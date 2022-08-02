"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawDatasController = void 0;
const common_1 = require("@nestjs/common");
const raw_datas_service_1 = require("./raw_datas.service");
const platform_express_1 = require("@nestjs/platform-express");
const decompress_1 = require("@xingrz/decompress");
const stream_1 = require("stream");
const csv = require("csv-parser");
let RawDatasController = class RawDatasController {
    constructor(rawDatasService) {
        this.rawDatasService = rawDatasService;
    }
    async handleUploads(file) {
        console.log(file);
        const results = [];
        try {
            const a = await (0, decompress_1.default)(file.buffer);
            const stream = stream_1.Readable.from(a[0].data);
            stream.pipe(csv())
                .on("data", (data) => {
                let enodebId = data['Object Name'].split(',')[3];
                let cellId = data['Object Name'].split(',')[1];
                if (enodebId)
                    enodebId = enodebId.split('=')[1];
                if (cellId)
                    cellId = cellId.split('=')[1];
                if (!enodebId || !cellId || !data["Result Time"] || !data["L.Cell.Avail.Dur"]) {
                    return;
                }
                const obj = {
                    uniqueId: `${enodebId}${cellId}${data['Result Time']}`,
                    resultTime: new Date(data['Result Time']),
                    enodebId,
                    cellId,
                    availDur: data["L.Cell.Avail.Dur"]
                };
                results.push(obj);
                console.log(data);
            })
                .on("end", () => {
                return this.rawDatasService.create(results);
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    find(query) {
        console.log(query);
        return this.rawDatasService.find(query);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RawDatasController.prototype, "handleUploads", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RawDatasController.prototype, "find", null);
RawDatasController = __decorate([
    (0, common_1.Controller)('raw-datas'),
    __metadata("design:paramtypes", [raw_datas_service_1.RawDatasService])
], RawDatasController);
exports.RawDatasController = RawDatasController;
//# sourceMappingURL=raw_datas.controller.js.map