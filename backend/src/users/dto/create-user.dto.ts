import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user', description: 'name'})
    @IsString({message: 'Only string'})
    readonly name: string;
    @ApiProperty({example: 'user@mail.ru', description: 'Mail'})
    @IsString({message: 'Only string'})
    @IsEmail({}, {message: "Incorrect email"})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'password'})
    @IsString({message: 'Only string'})
    @Length(4, 16, {message: 'Not less then 4 and not more then 16 symbols'})
    readonly password: string;
}
