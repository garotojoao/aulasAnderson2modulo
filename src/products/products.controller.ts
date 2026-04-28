import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-products.dto';
import { UpdateProductDto } from './dto/update-products.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductsService) { }

    @Put()
    atualizarProdutos(@Body() dados: UpdateProductDto): any {
        return this.service.atualizarProdutos(dados);
    }

    @Post()
    salvarProduto(@Body() dados: CreateProductDto): any {
        return this.service.salvarProduto(dados);
    }

    @Get()
    buscarTodosProdutos(): any {
        return this.service.buscarTodos();
    }
    

    @Get(":id")
    buscarProdutoPorId(@Param("id") id: number): any {
        return this.service.buscarPorId(id);
    }


}
