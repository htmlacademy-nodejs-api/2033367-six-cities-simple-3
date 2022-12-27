import { readFileSync } from 'fs';
import { Facility } from '../types/facility.enum.js';
import { LivingAreaType } from '../types/living-area-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { User } from '../types/user.type.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, creationDate, city, preview, photos, isPremium, rating, livingAreaType, roomsCount, guestsCount, rentalCost, facilities, name, email, avatar, password, isPro, commentsCount, coordinates]) => ({
        title,
        description,
        postDate: new Date(creationDate),
        city,
        preview,
        photos: photos.split(';'),
        isPremium: Boolean(isPremium),
        rating: Number(rating),
        livingAreaType: livingAreaType as LivingAreaType,
        roomsCount: Number(roomsCount),
        guestsCount: Number(guestsCount),
        rentalCost: Number(rentalCost),
        facilities: facilities.split(';') as Facility[],
        user: {name, email, avatar, password, isPro: Boolean(isPro)} as User,
        commentsCount: Number(commentsCount),
        coordinates: coordinates.split(', '),
      }));
  }
}
