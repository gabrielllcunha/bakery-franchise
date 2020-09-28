import { IsString, IsNumber, MaxLength, MinLength } from "class-validator";

export class ProductDto {

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(10, { message: 'O campo precisa ter no mínimo 10 caracteres.' })
    @MaxLength(60, { message: 'O campo não pode exceder 60 caracteres.' })
    name: string;

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(10, { message: 'O campo precisa ter no mínimo 10 caracteres.' })
    @MaxLength(100, { message: 'O campo não pode exceder 100 caracteres.' })
    description: string;

    @IsNumber({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(25, { message: 'O campo não pode exceder 25 caracteres.' })
    price: number;

    @IsNumber({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(25, { message: 'O campo não pode exceder 25 caracteres.' })
    stock: number;

    @IsNumber({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(25, { message: 'O campo não pode exceder 25 caracteres.' })
    expirationDate: number;

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(5, { message: 'O campo não pode exceder 5 caracteres.' })
    measurementUnit: string;

}