import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ autoCreate: true, collection: 'posts', skipVersioning: true })
export class PostDocument {
  @Prop()
  id: number;
  @Prop()
  slug: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  content: string;
  @Prop({ default: 0 })
  likes: number;
}

export const PostSchema = SchemaFactory.createForClass(PostDocument);
