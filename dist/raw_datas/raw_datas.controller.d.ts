/// <reference types="multer" />
import { RawDatasService } from './raw_datas.service';
export declare class RawDatasController {
    private readonly rawDatasService;
    constructor(rawDatasService: RawDatasService);
    handleUploads(file: Express.Multer.File): Promise<void>;
    find(query: any): Promise<(import("./raw_data.entity").RawDataEntity & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
