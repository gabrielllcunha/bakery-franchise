import { Franchisee } from './franchisee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class FranchiseeService {

    constructor(
        @InjectRepository(Franchisee)
        private readonly repository: Repository<Franchisee>) {
    }

    save(franchisee: Franchisee) {
        return this.repository.save(franchisee);
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    findAll() {
        return this.repository.find();
    }

    findById(id: number) {
        return this.repository.findOne(id);
    }
}
