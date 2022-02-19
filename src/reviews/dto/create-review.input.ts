import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field(() => Int)
  rating: number;
  @Field(() => String)
  comment?: string;
}
