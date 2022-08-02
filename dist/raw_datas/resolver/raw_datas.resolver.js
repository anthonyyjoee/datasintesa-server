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
exports.RawDataResolver = void 0;
const core_1 = require("@nestjs-query/core");
const query_graphql_1 = require("@nestjs-query/query-graphql");
const graphql_1 = require("@nestjs/graphql");
const raw_data_dto_1 = require("../dto/raw_data.dto");
const raw_data_entity_1 = require("../entities/raw_data.entity");
let RawDataResolver = class RawDataResolver extends (0, query_graphql_1.CRUDResolver)(raw_data_dto_1.RawDataDto) {
    constructor(service) {
        super(service);
        this.service = service;
    }
};
RawDataResolver = __decorate([
    (0, graphql_1.Resolver)(() => raw_data_dto_1.RawDataDto),
    __param(0, (0, core_1.InjectQueryService)(raw_data_entity_1.RawDataEntity)),
    __metadata("design:paramtypes", [Object])
], RawDataResolver);
exports.RawDataResolver = RawDataResolver;
//# sourceMappingURL=raw_datas.resolver.js.map