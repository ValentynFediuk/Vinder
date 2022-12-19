import { Injectable } from '@nestjs/common';
import { FileElementResponse } from './dto/file-element.response'
import { format } from 'date-fns'
import { path } from 'app-root-path'
import { ensureDir, writeFile } from 'fs-extra'

@Injectable()
export class FilesService {

    async saveFiles(files: Express.Multer.File[]): Promise<FileElementResponse[]> {
        const dateFolder = format(new Date(), 'yyy-MM-dd')
        const uploadFolder = `${path}/uploads/${dateFolder}`
        await ensureDir(uploadFolder)
        const res: FileElementResponse[] = [];

        for (const file of files) {
            await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer)
            res.push({ url: `${dateFolder}/${file.originalname}`, name: file.originalname})

            return res;
        }

        // try {
        //     const fileName = uuid.v4() + '.jpg';
        //     const filePath = path.resolve(__dirname, '..', 'static')
        //     if (!fs.existsSync(filePath)) {
        //         fs.mkdirSync(filePath, {recursive: true})
        //     }
        //     console.log(fileName, filePath)
        //     fs.writeFileSync(path.join(filePath, fileName), file.buffer)
        //     return fileName;
        // } catch (e) {
        //     console.log(e.message)
        //     throw new HttpException('An error has occurred while uploading the file', HttpStatus.INTERNAL_SERVER_ERROR)
        // }
    }

}