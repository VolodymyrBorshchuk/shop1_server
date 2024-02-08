import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto{
    @ApiProperty({example: 'Vova'})
    @IsNotEmpty()
    readonly    username:string;

    @ApiProperty({example: '123'})
    @IsNotEmpty()
    readonly    password:string;

    @ApiProperty({example: 'vova123@gmail.com'})
    @IsNotEmpty()
    readonly    email:string;
}