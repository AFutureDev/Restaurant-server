import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsResolver } from './restaurants.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [RestaurantsResolver, RestaurantsService, PrismaService]
})
export class RestaurantsModule {}
