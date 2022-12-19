import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {Repository} from "sequelize-typescript";
import {FilesService} from "../files/files.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: Repository<User>,
                private roleService: RolesService, private fileService: FilesService) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("ADMIN")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    // async uploadAvatar(image: any) {
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


    async addAvatar(dto: AddAvatarDto) {
        const avatar = await this.userRepository.findByPk(dto.userId);
        const avatar = await this.avatarService.getAvatarByValue(dto.value);
        if (avatar && user) {
            await user.$add('avatar', Avatar.id);
            return dto;
        }
        throw new HttpException('User or avatar not found', HttpStatus.NOT_FOUND);
    }

}