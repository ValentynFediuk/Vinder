import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {Repository} from "sequelize-typescript";
import {FilesService} from "../files/files.service";
import { AddAvatarDto } from './dto/add-avatar.dto'
import { Express } from 'express'

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: Repository<User>,
                private roleService: RolesService, private fileService: FilesService) {}

    // async createUser(dto: CreateUserDto) {
    //     const user = await this.userRepository.create(dto);
    //     const role = await this.roleService.getRoleByValue("ADMIN")
    //     await user.$set('roles', [role.id])
    //     user.roles = [role]
    //     return user;
    // }

    // async uploadAvatar() {
    //     const fileName = await this.fileService.createFile(image);
    //     const avatar = await this.userRepository.create({image: fileName})
    //     return avatar;
    // }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user;
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }


    async addAvatar(userId: number, file: Express.Multer.File) {
        const fileName = await this.fileService.saveFile(file);
        return  this.userRepository.update({avatar: fileName}, {where: {id: userId}});

    }

}