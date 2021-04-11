import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(
    title: string,
    desc: string,
    price: number
  ) {
    const id = Math.random().toString()
    const newProduct : Product = new Product(id, title, desc, price)
    this.products.push(newProduct)
    return id
  }

  getProducts() {
    return [...this.products]
  }

  private findProduct(id: string) : [Product, number] {
    const productIndex = this.products.findIndex(p => p.id === id)
    const product = this.products[productIndex]
    if (!product) {
      throw new NotFoundException('Product not found')
    }
    return [product, productIndex]
  }

  getProduct(id: string) {
    const [product] = this.findProduct(id)
    return {...product}
  }

  updateProduct(id: string, title: string, desc: string, price: number) : {message: string} {
    const [product, productIndex] = this.findProduct(id)
    const productToUpdate = {...product}
    if (title) {
      productToUpdate.title = title
    }
    if (desc) {
      productToUpdate.description = desc
    }
    if (price) {
      productToUpdate.price = price
    }
    this.products[productIndex] = productToUpdate
    return {message: 'Product updated!'}
  }

  deleteProduct(id: string) : {message: string} {
    const [_, productIndex] = this.findProduct(id)
    this.products.splice(productIndex, 1)
    return {message: 'Product delete!'}
  }
}