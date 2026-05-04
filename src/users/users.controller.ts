import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
    Query,
    Patch,
    UseGuards,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import { FileUploadInterceptor } from 'src/file-upload/file-upload.interceptor';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from 'src/util/dto/pagination.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) { }

    @Delete(':id')
    deletarUsuario(@Param('id') id: number): any {
        return this.service.deletarUsuario(id);
    }

    @Put()
    atualizarUsuario(@Body() dados: UpdateUserDto): any {
        return this.service.atualizarUsuario(dados);
    }

    @Post()
    salvarUsuario(@Body() dados: CreateUserDto): any {
        return this.service.salvarUsuario(dados);
    }

    @Get()
    buscarTodosUsuarios(@Query() pagination: PaginationDto): any {
        return this.service.buscarTodos(pagination);
    }

    @Get(':id')
    buscarUsuarioPorId(@Param('id') id: number): any {
        return this.service.buscarPorId(id);
    }

    @Patch('user')
    @UseInterceptors(FileUploadInterceptor)
    async updateUser(
        @Body() body: UpdateUserDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        if (file) {
            body.image = `/uploads/${file.filename}`;
        }
        return this.service.updateUserInformation(body);
    }
}