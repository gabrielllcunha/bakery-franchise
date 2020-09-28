import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ProductDto } from './productdto';
import { ProductService } from './product.service';
import { Product } from './franqueado.entity';
import { plainToClass } from "class-transformer";

@Controller('Products')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Post()
    save(@Body() productDto: ProductDto) {
        const product = plainToClass(Product, ProductDto);
        return this.productService.save(product);
    }

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.productService.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);
    }
}
