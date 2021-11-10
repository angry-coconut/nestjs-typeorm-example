import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [
    CustomersModule,
    ProductsModule,
    OrdersModule,
    PersonalInfoModule,
    StoresModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
