import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ShoppingCart } from './shopping-cart.model';
import { UsersService } from '../users/users.service';
import { BoilerPartsService } from '../boiler-parts/boiler-parts.service';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart)
    private shoppingCartModel: typeof ShoppingCart,
    private readonly usersService: UsersService,
    private readonly boilerPartsService: BoilerPartsService,
  ) {}

  async findAll(userId: number | string): Promise<ShoppingCart[]> {
    return this.shoppingCartModel.findAll({
      where: { userId },
    });
  }

  async addToCart(dto: AddToCartDto) {
    const cart = new ShoppingCart();
    const user = await this.usersService.findOne({
      where: { username: dto.username },
    });
    const product = await this.boilerPartsService.findOne(dto.productId);

    cart.userId = user.id;
    cart.productId = product.id;
    cart.boiler_manufacturer = product.boiler_manufacturer;
    cart.parts_manufacturer = product.parts_manufacturer;
    cart.product_price = product.product_price;
    cart.in_stock = product.in_stock;
    cart.product_name = product.product_name;
    cart.total_price = product.product_price;
    cart.image = JSON.parse(product.images)[0];

    return cart.save();
  }

  async updateCount(
    count: number,
    productId: number,
  ): Promise<{ count: number }> {
    await this.shoppingCartModel.update({ count }, { where: { productId } });

    const product = await this.shoppingCartModel.findOne({
      where: { productId },
    });

    return { count: product.count };
  }

  async updateTotalPrice(
    total_price: number,
    productId: number,
  ): Promise<{ total_price: number }> {
    await this.shoppingCartModel.update(
      { total_price },
      { where: { productId } },
    );

    const product = await this.shoppingCartModel.findOne({
      where: { productId },
    });

    return { total_price: product.total_price };
  }

  async removeProduct(productId: number): Promise<void> {
    const product = await this.shoppingCartModel.findOne({
      where: { productId },
    });

    await product.destroy();
  }

  async removeAll(userId: number): Promise<void> {
    await this.shoppingCartModel.destroy({ where: { userId } });
  }
}
