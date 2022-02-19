import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantInput {
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
