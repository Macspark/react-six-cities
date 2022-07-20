import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    'comment': 'Good stuff',
    'date': '01/01/2022',
    'id': 1,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 1,
      'isPro': true,
      'name': 'Max',
    },
  },
  {
    'comment': 'Good stuff',
    'date': '01/01/2022',
    'id': 2,
    'rating': 3.2,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 1,
      'isPro': true,
      'name': 'Max',
    },
  },
];
