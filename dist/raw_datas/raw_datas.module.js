"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawDatasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const raw_data_entity_1 = require("./raw_data.entity");
const raw_datas_controller_1 = require("./raw_datas.controller");
const raw_datas_service_1 = require("./raw_datas.service");
let RawDatasModule = class RawDatasModule {
};
RawDatasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: raw_data_entity_1.RawDataEntity.name, schema: raw_data_entity_1.RawDataSchema }])
        ],
        controllers: [raw_datas_controller_1.RawDatasController],
        providers: [raw_datas_service_1.RawDatasService]
    })
], RawDatasModule);
exports.RawDatasModule = RawDatasModule;
//# sourceMappingURL=raw_datas.module.js.map