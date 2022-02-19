import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Review } from 'src/reviews/entities/review.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  first_name: string;
  @Field(() => String)
  last_name: string;
  @Field(() => String)
  email: string;

  @Field(() => [Restaurant])
  favorite_restuarants: Restaurant[];
  @Field(() => [Review])
  Review: Review[];
  @Field(() => Restaurant)
  Restaurant: Restaurant[];
}
