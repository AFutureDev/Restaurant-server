import { ObjectType, Field, Int } from '@nestjs/graphql';

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
  //favorite_restuarants Restaurant[]
  //reviews              Review[]
}
