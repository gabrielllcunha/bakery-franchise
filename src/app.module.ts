import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Franchisee } from './franchisee/franchisee.entity';
import { FranchiseeModule } from './franchisee/franchisee.module';
import { FranchiseeController } from './franchisee/franchisee.controller';
import { FranchiseeService } from './franchisee/franchisee.service';
import { Request } from './request/request.entity';
import { RequestModule } from './request/request.module';
import { RequestController } from './request/request.controller';
import { RequestService } from './request/request.service';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [ScheduleModule.forRoot(), FranchiseeModule, ProductModule, RequestModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 1234,
    username: 'admin',
    password: 'admin',
    database: 'bakery',
    entities: [Franchisee, Product, Request],
    synchronize: true,
    logging: true
  }),
  TypeOrmModule.forFeature([Franchisee, Product, Request]),
    FranchiseeModule,
    ProductModule,
    RequestModule,
  ],
  controllers: [AppController, FranchiseeController, ProductController, RequestController],
  providers: [AppService, FranchiseeService, ProductService, RequestService],
})
export class AppModule { }
