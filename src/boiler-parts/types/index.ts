import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';

export interface IBoilerPartsQuery {
  limit: string;
  offset: string;
}

class BoilerParts {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  boiler_manufacturer: string;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  parts_manufacturer: string;

  @ApiProperty({ example: 8370 })
  product_price: string;

  @ApiProperty({ example: faker.internet.password() })
  vendor_code: string;

  @ApiProperty({ example: faker.lorem.word() })
  product_name: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  product_description: string;

  @ApiProperty({ example: faker.image.technics() })
  images: string;

  @ApiProperty({ example: 3 })
  in_stock: number;

  @ApiProperty({ example: false })
  bestseller: boolean;

  @ApiProperty({ example: false })
  new_product: boolean;

  @ApiProperty({ example: 45 })
  popularity_product: number;

  @ApiProperty({ example: faker.lorem.sentence() })
  compatibility: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: BoilerParts;
}

export class Bestsellers extends BoilerParts {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: Bestsellers;
}

export class NewProducts extends BoilerParts {
  @ApiProperty({ example: true })
  new_product: boolean;
}

export class GetNewProductsResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: NewProducts;
}

export class SearchRequest {
  @ApiProperty({ example: 'om' })
  search: string;
}

export class SearchByLetterResponse extends BoilerParts {
  @ApiProperty({ example: 'Explicabo omnis.' })
  product_name: string;
}
export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}

export class GetProductByNameRequest {
  @ApiProperty({ example: 'Explicabo omnis.' })
  name: string;
}
export class GetProductByNameResponse extends BoilerParts {
  @ApiProperty({ example: 'Explicabo omnis.' })
  product_name: string;
}

export class FindOneResponse extends BoilerParts {}
