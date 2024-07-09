import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    readonly nameCat: string;
}
