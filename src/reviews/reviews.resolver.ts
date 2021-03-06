import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { PrismaService } from 'src/prisma.service';

@Resolver(() => Review)
export class ReviewsResolver {
  constructor(
    private readonly reviewsService: ReviewsService,
    private prisma: PrismaService,
  ) {}

  @Query(() => [Review])
  async showAllReviews() {
    return await this.prisma.review.findMany({
      include: { User: true, Restaurant: true },
    });
  }

  // @Mutation(() => Review)
  // createReview(@Args('createReviewInput') createReviewInput: CreateReviewInput) {
  //   return this.reviewsService.create(createReviewInput);
  // }

  // @Query(() => [Review], { name: 'reviews' })
  // findAll() {
  //   return this.reviewsService.findAll();
  // }

  // @Query(() => Review, { name: 'review' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.reviewsService.findOne(id);
  // }

  // @Mutation(() => Review)
  // updateReview(@Args('updateReviewInput') updateReviewInput: UpdateReviewInput) {
  //   return this.reviewsService.update(updateReviewInput.id, updateReviewInput);
  // }

  // @Mutation(() => Review)
  // removeReview(@Args('id', { type: () => Int }) id: number) {
  //   return this.reviewsService.remove(id);
  // }
}
