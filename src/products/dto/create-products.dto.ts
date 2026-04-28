import { IsString,IsPositive, IsNumber, IsNotEmpty } from "class-validator";
export class CreateProductDto {

    @IsNotEmpty ({message: "email é obrigatorioN"})
    @IsString({message: "Nome do produto é obrigatoio"})
    name: string;
    

    @IsNumber({}, { message: "O preço deve ser um número" })
    @IsPositive({ message: "O preço deve ser positivo" })
    price: number;

    @IsNotEmpty ({message: "A descricao é obrigatoria"})
    description: string;

}