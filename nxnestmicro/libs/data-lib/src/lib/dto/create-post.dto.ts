import { Exclude, Expose } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

@Exclude()
export class CreatePostDto {
  @Expose()
  @IsString()
  @IsOptional()
  @MaxLength(50)
  slug: string;

  @Expose()
  @IsString()
  @MaxLength(250)
  title: string;

  @Expose()
  @IsString()
  @MaxLength(4000)
  content: string;

  @Expose()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @MaxLength(250)
  likes: string;
}
