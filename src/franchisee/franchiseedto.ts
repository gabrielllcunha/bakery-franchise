import { IsString, IsNumber, MaxLength, MinLength } from "class-validator";

export class ProductDto {

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(10, { message: 'O campo precisa ter no mínimo 10 caracteres.' })
    @MaxLength(60, { message: 'O campo não pode exceder 60 caracteres.' })
    name: string;

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(12, { message: 'O campo precisa ter no mínimo 12 caracteres.' })
    @MaxLength(12, { message: 'O campo não pode exceder 12 caracteres.' })
    cnpj: string;

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(25, { message: 'O campo não pode exceder 25 caracteres.' })
    ie: string;

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(25, { message: 'O campo não pode exceder 25 caracteres.' })
    address: string;

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(25, { message: 'O campo não pode exceder 25 caracteres.' })
    district: string;

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(5, { message: 'O campo não pode exceder 5 caracteres.' })
    city: string;

    @IsNumber({ message: 'O campo não é válido.' })
    @MinLength(8, { message: 'O campo precisa ter no mínimo 8 caracteres.' })
    @MaxLength(8, { message: 'O campo não pode exceder 8 caracteres.' })
    cep: number;

}