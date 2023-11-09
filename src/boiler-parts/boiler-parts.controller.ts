import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';

@Controller('boiler-parts')
export class BoilerPartsController {
  constructor(private readonly boilerPartsService: BoilerPartsService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  paginateAndFilter(@Query() query) {
    return this.boilerPartsService.paginateAndFilter(query);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('find/:id')
  getProductById(@Param('id') id: string) {
    return this.boilerPartsService.findOne(id);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('bestsellers')
  getBestsellers() {
    return this.boilerPartsService.bestsellers();
  }

  @UseGuards(AuthenticatedGuard)
  @Get('new-products')
  getNewProducts() {
    return this.boilerPartsService.newProducts();
  }

  @UseGuards(AuthenticatedGuard)
  @Post('search')
  search(@Body() { search }: { search: string }) {
    return this.boilerPartsService.searchByString(search);
  }

  @UseGuards(AuthenticatedGuard)
  @Post('product-name')
  getProductByName(@Body() { name }: { name: string }) {
    return this.boilerPartsService.findOneByName(name);
  }
}
