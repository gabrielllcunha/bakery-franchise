import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Request } from 'src/request/request.entity';

@Entity("Products")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: '100' })
    name: string;

    @Column({ name: 'description', type: 'varchar', length: '50' })
    description: string;

    @Column({ name: 'price', type: 'integer', length: '10' })
    price: number;

    @Column({ name: 'stock', type: 'integer', length: '50' })
    stock: number;

    @Column({ name: 'expirationDate', type: 'integer', length: '10' })
    expirationDate: number;

    @Column({ name: 'measurementUnit', type: 'varchar', length: '10' })
    measurementUnit: string;


    @OneToMany(type => Request, requests => requests.products)
    requests: Request[]
}