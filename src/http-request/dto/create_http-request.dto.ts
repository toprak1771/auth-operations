import { Transform } from "class-transformer";
import { IsEnum, IsNotEmpty } from "class-validator";
import { POOL_NAMES } from "../interfaces/pool_name";

export class CreateHttpRequestDto {
    @IsNotEmpty()
    readonly route: string;

    @IsNotEmpty()
    readonly min_role:string;

    @IsNotEmpty()
    readonly http_method:string;

    @IsNotEmpty()
    @IsEnum(POOL_NAMES)
    @Transform(({value}) => {
        return POOL_NAMES[value];
    })
    readonly pool_name:POOL_NAMES;

   
}