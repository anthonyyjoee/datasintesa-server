import { Model } from 'mongoose';
import { RawDataEntity, RawDataDocument } from './raw_data.entity';
export declare class RawDatasService {
    private readonly rawDataModel;
    constructor(rawDataModel: Model<RawDataDocument>);
    create(data: any): Promise<string>;
    find(option: any): Promise<(RawDataEntity & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
