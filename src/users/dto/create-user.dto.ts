import { IsInt, IsString, Min, Max, IsEmail, IsNotEmpty } from "class-validator";
export class CreateUserDto {

    @IsString({message: "Nome é obrigatoio"})
    name: string;

    @IsNotEmpty ({message: "email é obrigatorio"})
    @IsEmail({}, {message:"imforme um email valido"})
    email: string;

    @IsNotEmpty ({message: "Idade é obrigatoria"})
    @Min(16, {message: "A idade minima é de 16 Anos"})
    @Max(120, {message: "Idade maxima de 120 anos"})
    @IsInt({message: "A idade deve ser um numero"})    
    age: number;
}