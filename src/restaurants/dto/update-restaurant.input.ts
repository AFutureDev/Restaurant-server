import { CreateRestaurantInput } from './create-restaurant.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRestaurantInput extends PartialType(CreateRestaurantInput) {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  title: string;
  @Field(() => String)
  address: string;
  @Field(() => Int)
  rating: number;
  @Field(() => Int)
  num_of_reviews: number;
  @Field(() => String)
  cuisines: string;
}
