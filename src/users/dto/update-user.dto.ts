import { IsInt, IsNumber, IsString, Min, Max, IsEmail, IsNotEmpty, IsOptional } from "class-validator";
export class UpdateUserDto {

    @IsNotEmpty( {message: "Preciso de um ID"})
    @IsInt({message: "Id é obrigatorio"})
    id:number;

    @IsOptional()
    @IsString({message: "Nome é obrigatoio"})
    name: string;

    @IsOptional()
    @IsEmail({}, {message:"imforme um email valido"})
    email: string;

    @IsOptional()
    @Min(16, {message: "A idade minima é de 16 Anos"})
    @Max(120, {message: "Idade maxima de 120 anos"})
    @IsInt({message: "A idade deve ser um numero"})    
    age: number;
}