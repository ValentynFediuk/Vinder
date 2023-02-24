import {
    Body,
    Controller,
    Get,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    Req
} from '@nestjs/common'
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {ValidationPipe} from "../pipes/validation.pipe";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreatePostDto} from "../posts/dto/create-post.dto";
import { AddAvatarDto } from './dto/add-avatar.dto'
import { Express } from 'express'

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}
    //
    // @ApiOperation({summary: 'User creation'})
    // @ApiResponse({status: 200, type: User})
    // @Post()
    // create(@Body() userDto: CreateUserDto) {
    //     return this.usersService.createUser(userDto);
    // }

    @ApiOperation({summary: 'Avatar uploading'})
    @ApiResponse({status: 200, type: User})
    @Post('upload')
    // @Roles("USER")
    // @UseGuards(RolesGuard)
    @UseInterceptors(FileInterceptor('file'))
    addAvatar(@UploadedFile() file: Express.Multer.File, @Req() req: Request & {user: User} ) {
        const userId = 1;
        return this.usersService.addAvatar(userId, file);
    }

    // @ApiOperation({summary: 'Upload user avatar'})
    // @ApiResponse({status: 200, type: User})
    // @Post('/upload-avatar')
    // @UseInterceptors(FileInterceptor('photo'))
    // uploadAvatar(@Body() @UploadedFile() image) {
    //     console.log('photo', image)
    //     return this.usersService.uploadAvatar(image);
    // }

    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    // @Roles("ADMIN")
    // @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Выдать роль'})
    @ApiResponse({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({summary: 'Забанить пользователя'})
    @ApiResponse({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto);
    }

}
