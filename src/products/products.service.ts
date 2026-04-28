import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { Repository } from 'typeorm';
import { UpdateProductDto } from './dto/update-products.dto';

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
    

    buscarTodos(): any {
        return this.repo.find();
    }

    buscarPorId(id: number): any {
        return this.repo.findOne({ where: { id: id } });
    }
    
}
