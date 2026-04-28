import { IsString,IsPositive, IsNumber, IsNotEmpty } from "class-validator";
export class CreatCategoriesDto {

    @IsNotEmpty ({message: "nome é obrigatorioN"})
    name: string;

    @IsNotEmpty ({message: "A descricao é obrigatoria"})
    status: string;

}

