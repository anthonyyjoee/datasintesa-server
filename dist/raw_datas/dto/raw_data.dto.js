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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawDataDto = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const graphql_1 = require("@nestjs/graphql");
let RawDataDto = class RawDataDto {
};
__decorate([
    (0, query_graphql_1.IDField)(() => graphql_1.ID),
    __metadata("design:type", Number)
], RawDataDto.prototype, "id", void 0);
__decorate([
    (0, query_graphql_1.FilterableField)(),
    __metadata("design:type", String)
], RawDataDto.prototype, "title", void 0);
__decorate([
    (0, query_graphql_1.FilterableField)(),
    __metadata("design:type", Boolean)
], RawDataDto.prototype, "completed", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], RawDataDto.prototype, "created", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], RawDataDto.prototype, "updated", void 0);
RawDataDto = __decorate([
    (0, graphql_1.ObjectType)('TodoItem')
], RawDataDto);
exports.RawDataDto = RawDataDto;
//# sourceMappingURL=raw_data.dto.js.map