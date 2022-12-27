import { User } from './user.type';

export type Comment = {
  content: string;
  date: Date;
  rating: number;
  author: User;
}
