import { Hotel } from './types';

export const MockData: Hotel[] = [
  {
    image: '/hotels/hotel-01.jpg',
    stars: 4,
    name: 'Hotel 1',
    city: 'Köln',
    distance: 0.3,
    capacities: {
      rooms: 262,
      meetingRoom: 8,
    },
    hygiene: true,
    grade: 8.5,
    price: 79,
  },
  {
    image: '/hotels/hotel-02.jpg',
    stars: 3,
    name: 'Hotel 2',
    city: 'Köln',
    distance: 1.2,
    capacities: {
      rooms: 182,
      meetingRoom: 12,
    },
    hygiene: false,
    grade: 7.2,
    price: 59,
  },
  {
    image: '/hotels/hotel-03.jpg',
    stars: 5,
    name: 'Hotel 3',
    city: 'Köln',
    distance: 2.6,
    capacities: {
      rooms: 332,
      meetingRoom: 18,
    },
    hygiene: true,
    grade: 6,
    price: 89,
  },
];
