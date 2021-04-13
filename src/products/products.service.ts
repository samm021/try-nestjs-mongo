import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./product.model";

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  async insertProduct(
    title: string,
    description: string,
    price: number
  ) {
    const newProduct = new this.productModel({
      title,
      description,
      price
    })
    const product = await newProduct.save()
    return null;
  }

  // getProducts() {
  //   return [...this.products]
  // }

  // private findProduct(id: string) : [Product, number] {
  //   const productIndex = this.products.findIndex(p => p.id === id)
  //   const product = this.products[productIndex]
  //   if (!product) {
  //     throw new NotFoundException('Product not found')
  //   }
  //   return [product, productIndex]
  // }

  // getProduct(id: string) {
  //   const [product] = this.findProduct(id)
  //   return {...product}
  // }

  // updateProduct(id: string, title: string, desc: string, price: number) : {message: string} {
  //   const [product, productIndex] = this.findProduct(id)
  //   const productToUpdate = {...product}
  //   if (title) {
  //     productToUpdate.title = title
  //   }
  //   if (desc) {
  //     productToUpdate.description = desc
  //   }
  //   if (price) {
  //     productToUpdate.price = price
  //   }
  //   this.products[productIndex] = productToUpdate
  //   return {message: 'Product updated!'}
  // }

  // deleteProduct(id: string) : {message: string} {
  //   const [_, productIndex] = this.findProduct(id)
  //   this.products.splice(productIndex, 1)
  //   return {message: 'Product delete!'}
  // }
}