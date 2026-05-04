import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreatCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';
import { PaginationDto } from 'src/util/dto/pagination.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly service: CategoriesService) {}
        
    @Post()
    salvarCategories(@Body() dados:CreatCategoriesDto ) : any{
        return this.service.salvarCategories(dados);
    }

    @Put()
    atualizarCategorias (@Body() dados: UpdateCategoriesDto): any {
        return this.service.atualizarCategorias(dados);
    }
    
    @Get()
    buscarTodosCategories(@Query() pagination: PaginationDto) : any{
        return this.service.buscarTodos(pagination);
    }

    @Get(":id")
    buscarCategoryPorId(@Param("id") id: number) : any{
        return this.service.buscarPorId(id);
    }
}