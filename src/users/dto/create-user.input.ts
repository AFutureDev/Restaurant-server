import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  first_name: string;
  @Field(() => String)
  last_name: string;
  @Field(() => String)
  email: string;
}
