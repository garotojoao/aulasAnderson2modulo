import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { Repository } from 'typeorm';
import { UpdateProductDto } from './dto/update-products.dto';
import { PaginationDto } from 'src/util/dto/pagination.dto';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(Products)
    private readonly repo: Repository<Products>
    ) { }

    salvarProduto(dados: any): any {
        return this.repo.save(dados);
    }

    async atualizarProdutos(dados: any): Promise<any> {
        //obriga a esperar a execucao
        await this.repo.update(dados.id, dados);
        return this.repo.findOne({ where: { id: dados.id } });
    }
    

    async buscarTodosProdutos(pagination: PaginationDto): Promise<any> {
        let page = pagination.page ?? 1;
        let limit = pagination.limit ?? 10;
        let resultado = await this.repo.findAndCount({
            skip: (page - 1) * limit,
            take: limit
        });
        let data = resultado[0];
        let total = resultado[1];
        return { data, page, limit, total }
    }


    buscarPorId(id: number): any {
        return this.repo.findOne({ where: { id: id } });
    }
    
}
