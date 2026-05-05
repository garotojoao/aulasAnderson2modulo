import { Body, Controller, Get, Param, Post, Put, Delete, Query, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from 'src/util/dto/pagination.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import multerConfig from 'src/users/multer.config';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) { }

  @Delete(':id')
  deletarUsuario(@Param("id") id: number): any {
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

  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('arquivo', multerConfig))
  uploadArquivo(
    @Param("id") id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.service.salvarDados(file, id);
  }

  @Get()
  buscarTodosUsuarios(@Query() pagination: PaginationDto): any {
    return this.service.buscarTodos(pagination);
  }

  @Get(":id")
  buscarUsuarioPorId(@Param("id") id: number): any {
    return this.service.buscarPorId(id);
  }

}
