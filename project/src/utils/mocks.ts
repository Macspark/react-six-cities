import {City} from '../types/map';
import {Offer} from '../types/offer';
import {Review} from '../types/review';

export const createMockCity = (): City => ({
  'location': {
    'latitude': 51.233334,
    'longitude': 6.783333,
    'zoom': 12,
  },
  'name': 'Dusseldorf',
} as City);

export const createMockOffer = (): Offer => ({
  "bedrooms": 3,
  "city": {
			"location": {
			"latitude": 52.370216,
			"longitude": 4.895168,
			"zoom": 10
		},
		"name": "Amsterdam"
  },
  "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  "goods": [
		"Heating"
  ],
  "host": {
		"avatarUrl": "img/1.png",
		"id": 3,
		"isPro": true,
		"name": "Angelina"
  },
  "id": 1,
  "images": [
		"img/1.png"
  ],
  "isFavorite": true,
  "isPremium": false,
  "location": {
		"latitude": 52.35514938496378,
		"longitude": 4.673877537499948,
		"zoom": 8
  },
  "maxAdults": 4,
  "previewImage": "img/1.png",
  "price": 120,
  "rating": 4.8,
  "title": "Beautiful & luxurious studio at great location",
  "type": "apartment"
} as Offer);

export const createMockReview = (): Review => ({
	"comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
	"date": "Fri Aug 12 2022 08:46:14 GMT+0300 (Москва, стандартное время)",
	"id": 1,
	"rating": 4,
	"user": {
		"avatarUrl": "img/1.png",
		"id": 1,
		"isPro": false,
		"name": "Oliver.conner"
	}
} as Review);