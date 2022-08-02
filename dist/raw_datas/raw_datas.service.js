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
exports.RawDatasService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const raw_data_entity_1 = require("./raw_data.entity");
let RawDatasService = class RawDatasService {
    constructor(rawDataModel) {
        this.rawDataModel = rawDataModel;
    }
    async create(data) {
        data.forEach(el => new this.rawDataModel(el).save());
        return "add success";
    }
    async find(option) {
        return await this.rawDataModel.find({
            enodebId: option.enodebId,
            cellId: option.cellId
        }).exec();
    }
};
RawDatasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(raw_data_entity_1.RawDataEntity.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RawDatasService);
exports.RawDatasService = RawDatasService;
//# sourceMappingURL=raw_datas.service.js.map