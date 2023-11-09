import { Model, Table, Column } from 'sequelize-typescript';

@Table
export class ShoppingCart extends Model {
  @Column
  userId: number;

  @Column({ defaultValue: 0 })
  productId: number;

  @Column
  boiler_manufacturer: string;

  @Column
  parts_manufacturer: string;

  @Column({ defaultValue: 0 })
  product_price: number;

  @Column
  product_name: string;

  @Column
  image: string;

  @Column({ defaultValue: 0 })
  in_stock: number;

  @Column({ defaultValue: 0 })
  total_price: number;

  @Column({ defaultValue: 0 })
  count: number;
}