import {Body, Controller, Post, Req} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";
import { Request } from 'express';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    // @Post('/registration')
    // registration(@Body() userDto: CreateUserDto) {
    //     return this.authService.registration(userDto)
    // }

    @Post('/get-user')
    getUser(@Body('token') token: string) {
        return this.authService.getUser(token)
    }

}
