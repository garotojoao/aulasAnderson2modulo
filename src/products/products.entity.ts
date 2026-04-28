import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Products {
    @PrimaryGeneratedColumn()
    id: number; 
    
    @Column()
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column()
    description: string;

}