import { LivingAreaType } from './living-area-type.enum';
import { User } from './user.type';
import { Facility } from './facility.enum';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: string;
  preview: string;
  photos: string[];
  isPremium: boolean;
  rating: number;
  livingAreaType: LivingAreaType;
  roomsCount: number;
  guestsCount: number;
  rentalCost: number;
  facilities: Facility[];
  user: User;
  commentsCount: number;
  coordinates: string[];
}

