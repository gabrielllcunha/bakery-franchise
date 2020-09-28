import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { RequestDto } from './requestdto';
import { RequestService } from './request.service';
import { Request } from './request.entity';
import { plainToClass } from "class-transformer";

@Controller('Requests')
export class RequestController {

    constructor(private readonly requestService: RequestService) { }

    @Post()
    save(@Body() requestDto: RequestDto) {
        const request = plainToClass(Request, RequestDto);
        return this.requestService.save(request);
    }

    @Get()
    findAll() {
        return this.requestService.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.requestService.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);
    }
}
