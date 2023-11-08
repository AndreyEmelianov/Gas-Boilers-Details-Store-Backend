import { Model, Table, Column } from 'sequelize-typescript';

@Table
export class BoilerParts extends Model {
  @Column
  boiler_manufacturer: string;

  @Column
  part_manufacturer: string;

  @Column({ defaultValue: 0 })
  product_price: number;

  @Column
  vendor_code: string;

  @Column
  product_name: string;

  @Column
  product_description: string;

  @Column
  images: string;

  @Column({ defaultValue: 0 })
  in_stock: number;

  @Column({ defaultValue: false })
  bestsellers: boolean;

  @Column({ defaultValue: false })
  new_product: boolean;

  @Column
  popularity_product: number;

  @Column
  compatibility: string;
}
