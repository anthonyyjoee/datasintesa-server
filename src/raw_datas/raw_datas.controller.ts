// @ts-ignore
import { Controller, Get, Post, Query, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { RawDatasService } from './raw_datas.service';
import { FileInterceptor } from '@nestjs/platform-express';
import decompress from '@xingrz/decompress';
import { Readable } from "stream"
import csv = require('csv-parser')

@Controller('raw-datas')
export class RawDatasController {
  constructor(private readonly rawDatasService: RawDatasService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async handleUploads(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    
    const results = []
    try {
      const a = await decompress(file.buffer);
      
      const stream = Readable.from(a[0].data);
      
      stream.pipe(csv())
      .on("data",(data) => {
        let enodebId = data['Object Name'].split(',')[3]
        let cellId = data['Object Name'].split(',')[1]
        if (enodebId) enodebId = enodebId.split('=')[1]
        if (cellId) cellId = cellId.split('=')[1]
        if (!enodebId || !cellId || !data["Result Time"] || !data["L.Cell.Avail.Dur"]) {
          return 
        }
        const obj = {
          uniqueId: `${enodebId}${cellId}${data['Result Time']}`,
          resultTime: new Date(data['Result Time']),
          enodebId,
          cellId,
          availDur: data["L.Cell.Avail.Dur"]
        }
        
        results.push(obj)
        console.log(data);
        
      })
      .on("end", () => {
        return this.rawDatasService.create(results);
      })
    } catch (err) {
      console.log(err);
    }
  }

  @Get()
  find(@Query() query) {
    console.log(query);
    
    return this.rawDatasService.find(query)
  }
}
