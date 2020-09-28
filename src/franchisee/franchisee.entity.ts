import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Request } from 'src/request/request.entity';

@Entity("Franchiseers")
export class Franchisee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: '100' })
    name: string;

    @Column({ name: 'cnpj', type: 'varchar', length: '12' })
    cnpj: string;

    @Column({ name: 'ie', type: 'varchar', length: '50' })
    ie: string;

    @Column({ name: 'address', type: 'varchar', length: '50' })
    address: string;

    @Column({ name: 'district', type: 'varchar', length: '50' })
    district: string;

    @Column({ name: 'city', type: 'varchar', length: '30' })
    city: string;

    @Column({ name: 'cep', type: 'integer', length: '8' })
    cep: number;


    @OneToMany(type => Request, requests => requests.Franchiseers)
    requests: Request[]
}