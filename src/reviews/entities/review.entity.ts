import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Review {
  @Field(() => Int)
  id: number;
  @Field(() => Int)
  rating: number;
  @Field(() => String)
  comment: string;
  // Restaurant   Restaurant? @relation(fields: [restaurantId], references: [id])
  // restaurantId Int?
}
