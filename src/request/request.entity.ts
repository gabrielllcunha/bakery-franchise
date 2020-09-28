import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Request } from 'src/request/request.entity';

@Entity("Requests")
export class Request {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'date', type: 'integer', length: '15' })
    date: number;

    @Column({ name: 'deliveryDate', type: 'integer', length: '15' })
    deliveryDate: number;

    @Column({ name: 'shippingCompany', type: 'varchar', length: '50' })
    shippingCompany: string;

    @Column({ name: 'totalValue', type: 'integer', length: '50' })
    totalValue: number;

    @Column({ name: 'productValue', type: 'integer', length: '50' })
    productValue: number;

    @Column({ name: 'discountValue', type: 'integer', length: '50' })
    discountValue: number;

    @Column({ name: 'client', type: 'varchar', length: '75' })
    client: string;

    @Column({ name: 'deliveryAddress', type: 'varchar', length: '50' })
    deliveryAddress: string;


    @OneToMany(type => Request, requests => requests.products)
    requests: Request[]
}