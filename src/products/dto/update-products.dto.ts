import { IsString, IsPositive, IsNumber, IsNotEmpty, IsOptional } from "class-validator";
export class UpdateProductDto {

    @IsNotEmpty({ message: "A descricao é obrigatoria" })
    id: number;

    @IsOptional()
    @IsString({ message: "Nome do produto é obrigatoio" })
    name: string;

    @IsOptional()
    @IsNumber({}, { message: "O preço deve ser um número" })
    @IsPositive({ message: "O preço deve ser positivo" })
    price: number;

    description: string;

}