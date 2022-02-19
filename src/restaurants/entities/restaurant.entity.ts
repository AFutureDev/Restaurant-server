import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Review } from 'src/reviews/entities/review.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Restaurant {
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
  // @Field(() => Manager)
  //managers       Manager[]
  @Field(() => [Review])
  reviews: Review[];
  @Field(() => [User])
  user_favorite_restaurants: User[];
  @Field(() => User)
  user: User;
  @Field(() => Int)
  userId: number;
}
