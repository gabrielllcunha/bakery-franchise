import { IsString, IsNumber, MaxLength, MinLength } from "class-validator";

export class RequestDto {

    @IsNumber({ message: 'O campo não é válido.' })
    @MinLength(5, { message: 'O campo precisa ter no mínimo 5 caracteres.' })
    @MaxLength(15, { message: 'O campo não pode exceder 15 caracteres.' })
    date: number;

    @IsNumber({ message: 'O campo não é válido.' })
    @MinLength(5, { message: 'O campo precisa ter no mínimo 5 caracteres.' })
    @MaxLength(15, { message: 'O campo não pode exceder 15 caracteres.' })
    deliveryDate: number;

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(50, { message: 'O campo não pode exceder 50 caracteres.' })
    shippingCompany: string;

    @IsNumber({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(25, { message: 'O campo não pode exceder 25 caracteres.' })
    totalValue: number;

    @IsNumber({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(25, { message: 'O campo não pode exceder 25 caracteres.' })
    productValue: number;

    @IsNumber({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(25, { message: 'O campo não pode exceder 25 caracteres.' })
    discountValue: number;

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(1, { message: 'O campo precisa ter no mínimo 1 caracteres.' })
    @MaxLength(50, { message: 'O campo não pode exceder 50 caracteres.' })
    client: string;

    @IsString({ message: 'O campo não é válido.' })
    @MinLength(5, { message: 'O campo precisa ter no mínimo 5 caracteres.' })
    @MaxLength(50, { message: 'O campo não pode exceder 50 caracteres.' })
    deliveryAddress: string;

}