import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { Repository } from 'typeorm';
import { CreatCategoriesDto } from './dto/create-categories.dto';

@Injectable()
export class CategoriesService {
    
    constructor(@InjectRepository(Categories) 
        private readonly repo:  Repository<Categories>
    ) {}

    salvarCategories(dados: any): any{
        return this.repo.save(dados);
    }

        async atualizarCategorias(dados: any): Promise<any> {
        //obriga a esperar a execucao
        await this.repo.update(dados.id, dados);
        return this.repo.findOne({ where: { id: dados.id } });
    }
    
    buscarTodos(): any{
        return this.repo.find();
    }

    buscarPorId(id: number): any{
        return this.repo.findOne({ where: {id: id} });
    }
}
