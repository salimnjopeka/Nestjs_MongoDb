import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly nameProduct: string;

    @IsString()
    readonly description: string;

    @IsNumber()
    readonly price: number;
}
