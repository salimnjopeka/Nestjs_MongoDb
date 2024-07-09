import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreatePersonSettingDto{
    @IsBoolean()
    @IsOptional()
    receiveNotifications?: boolean;

    @IsBoolean()
    @IsOptional()
    receiveEmail?: boolean;

    @IsBoolean()
    @IsOptional()
    receiveSMS?: boolean;
}

export class CreatePersonDto {
    @IsString()
    readonly name: string;
    readonly age: number;
    readonly gender: string;

    @IsOptional()
    readonly settings: CreatePersonSettingDto;
}
