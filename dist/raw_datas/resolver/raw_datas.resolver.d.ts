import { QueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { RawDataDto } from '../dto/raw_data.dto';
import { RawDataEntity } from '../entities/raw_data.entity';
declare const RawDataResolver_base: import("@nestjs-query/query-graphql/dist/src/resolvers/resolver.interface").ResolverClass<RawDataDto, QueryService<RawDataDto, import("@nestjs-query/core").DeepPartial<RawDataDto>, import("@nestjs-query/core").DeepPartial<RawDataDto>>, CRUDResolver<RawDataDto, import("@nestjs-query/core").DeepPartial<RawDataDto>, import("@nestjs-query/core").DeepPartial<RawDataDto>, import("@nestjs-query/query-graphql").ReadResolverOpts<RawDataDto>, QueryService<RawDataDto, import("@nestjs-query/core").DeepPartial<RawDataDto>, import("@nestjs-query/core").DeepPartial<RawDataDto>>>>;
export declare class RawDataResolver extends RawDataResolver_base {
    readonly service: QueryService<RawDataEntity>;
    constructor(service: QueryService<RawDataEntity>);
}
export {};
