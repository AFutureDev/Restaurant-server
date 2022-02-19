import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { PrismaService } from 'src/prisma.service';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(
    private readonly restaurantsService: RestaurantsService,
    private prisma: PrismaService,
  ) {}

  @Query(() => [Restaurant], { nullable: true })
  async showAllRestaurants() {
    return await this.prisma.restaurant.findMany({
      include: { User: true, reviews: true },
    });
  }

  // @Mutation(() => Restaurant)
  // createRestaurant(@Args('createRestaurantInput') createRestaurantInput: CreateRestaurantInput) {
  //   return this.restaurantsService.create(createRestaurantInput);
  // }

  // @Query(() => [Restaurant], { name: 'restaurants' })
  // findAll() {
  //   return this.restaurantsService.findAll();
  // }

  // @Query(() => Restaurant, { name: 'restaurant' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.restaurantsService.findOne(id);
  // }

  // @Mutation(() => Restaurant)
  // updateRestaurant(@Args('updateRestaurantInput') updateRestaurantInput: UpdateRestaurantInput) {
  //   return this.restaurantsService.update(updateRestaurantInput.id, updateRestaurantInput);
  // }

  // @Mutation(() => Restaurant)
  // removeRestaurant(@Args('id', { type: () => Int }) id: number) {
  //   return this.restaurantsService.remove(id);
  // }
}
