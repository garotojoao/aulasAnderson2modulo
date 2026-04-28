import { IsString,IsPositive, IsNumber, IsNotEmpty, IsOptional} from "class-validator";
export class UpdateCategoriesDto {

    @IsNotEmpty ({message: "nome é obrigatorioN"})
    id: number

    @IsOptional()
    name: string;

    @IsOptional()
    status: string;

}

