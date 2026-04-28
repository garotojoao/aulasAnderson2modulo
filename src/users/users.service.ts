import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/util/dto/pagination.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users)
    private readonly repo: Repository<Users>
    ) { }

    salvarUsuario(dados: any): any {
        return this.repo.save(dados);
    }

    async atualizarUsuario(dados: any): Promise<any> {
        //obriga a esperar a execucao
        await this.repo.update(dados.id, dados);
        return this.repo.findOne({ where: { id: dados.id } });
    }

    async deletarUsuario(id: number): Promise<any> {
        let retorno = await this.repo.delete(id);
        let mensagem = { message: "usuario deletado com suceso" };

        if (retorno.affected == 0) {
            mensagem = { message: "usuario nao encontrado" }
        }
        return mensagem;

    }
    async buscarTodos(pagination: PaginationDto): Promise<any> {
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
