import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService : ProductsService) {

  }

  @Post()
  addProduct(@Body('title') title: string, @Body('description') desc: string, @Body('price') price: number) {
    const id = this.productsService.insertProduct(title, desc, price)
    return { id }
  }

  // @Get()
  // getProducts() {
  //   return this.productsService.getProducts
  // }

  // @Get(':id')
  // getProduct(@Param('id') id: string) {
  //   return this.productsService.getProduct(id)
  // }

  // @Patch(':id')
  // updateProduct(@Param('id') id: string, @Body('title') title: string, @Body('description') desc: string, @Body('price') price: number) {
  //   return this.productsService.updateProduct(id, title, desc, price)
  // }

  // @Delete(':id')
  // deleteProduct(@Param('id') id: string) {
  //   return this.productsService.deleteProduct(id)
  // }
}