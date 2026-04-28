import { IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {

    @IsInt()
    @Min(1)
    @Type(() => Number)
    page: number;

    @IsInt()
    @Max(100)
    @Min(1)
    @Type(() => Number)
    limit: number; 

}