import {IsString} from "class-validator";

export class AddAvatarDto {
	readonly userId: number;
	@IsString({message: "Must be a string"})
	readonly value: string;
}