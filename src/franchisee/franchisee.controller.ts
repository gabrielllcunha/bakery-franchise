import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { FranchiseeDto } from './franchiseedto';
import { FranchiseeService } from './franchisee.service';
import { Franchisee } from './franchisee.entity';
import { plainToClass } from "class-transformer";

@Controller('Franchiseers')
export class FranchiseeController {

    constructor(private readonly productService: FranchiseeService) { }

    @Post()
    save(@Body() franchiseeDto: FranchiseeDto) {
        const franchisee = plainToClass(Franchisee, FranchiseeDto);
        return this.franchiseeService.save(franchisee);
    }

    @Get()
    findAll() {
        return this.franchiseeService.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.franchiseeService.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);
    }
}
