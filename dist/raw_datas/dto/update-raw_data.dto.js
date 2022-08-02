"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRawDataDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_raw_data_dto_1 = require("./create-raw_data.dto");
class UpdateRawDataDto extends (0, mapped_types_1.PartialType)(create_raw_data_dto_1.CreateRawDataDto) {
}
exports.UpdateRawDataDto = UpdateRawDataDto;
//# sourceMappingURL=update-raw_data.dto.js.map