import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Review {
  @Field(() => Int)
  id: number;
  @Field(() => Int)
  rating: number;
  @Field(() => String)
  comment: string;

  @Field(() => User)
  User: User;
  @Field(() => Int)
  userId: number;
  @Field(() => Restaurant)
  Restaurant: Restaurant;
  @Field(() => Int)
  restaurantId: number;
}
