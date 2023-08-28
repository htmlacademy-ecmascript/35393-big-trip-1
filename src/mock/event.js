import {getRandomArrayElement, getRandomNumberInRange} from '../utils.js';
import {MAX_PRICE, MIN_PRICE, DESTINATIONS} from '../const.js';

const mockEvents = [
  {
    'id': '1',
    'basePrice': getRandomNumberInRange(MIN_PRICE, MAX_PRICE),
    'dateFrom': '2024-03-10T22:55:56.845Z',
    'dateTo': '2024-03-11T11:22:13.375Z',
    'destination': getRandomArrayElement(DESTINATIONS).id,
    'isFavorite': getRandomNumberInRange(0, 1),
    'offers': [
      '1', '2'
    ],
    'type': 'taxi'
  },
  {
    'id': '2',
    'basePrice': getRandomNumberInRange(MIN_PRICE, MAX_PRICE),
    'dateFrom': '2018-07-10T22:55:56.845Z',
    'dateTo': '2018-07-11T11:22:13.375Z',
    'destination': getRandomArrayElement(DESTINATIONS).id,
    'isFavorite': getRandomNumberInRange(0, 1),
    'offers': [
      '3'
    ],
    'type': 'check-in'
  },
  {
    'id': '3',
    'basePrice': getRandomNumberInRange(MIN_PRICE, MAX_PRICE),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': getRandomArrayElement(DESTINATIONS).id,
    'isFavorite': getRandomNumberInRange(0, 1),
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '4',
    'basePrice': getRandomNumberInRange(MIN_PRICE, MAX_PRICE),
    'dateFrom': '2022-07-17T22:55:56.845Z',
    'dateTo': '2022-07-17T23:22:13.375Z',
    'destination': getRandomArrayElement(DESTINATIONS).id,
    'isFavorite': getRandomNumberInRange(0, 1),
    'offers': ['7'],
    'type': 'restaurant'
  },
  {
    'id': '5',
    'basePrice': getRandomNumberInRange(MIN_PRICE, MAX_PRICE),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': getRandomArrayElement(DESTINATIONS).id,
    'isFavorite': getRandomNumberInRange(0, 1),
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': '6',
    'basePrice': getRandomNumberInRange(MIN_PRICE, MAX_PRICE),
    'dateFrom': '2023-12-10T22:55:56.845Z',
    'dateTo': '2023-12-11T11:22:13.375Z',
    'destination': getRandomArrayElement(DESTINATIONS).id,
    'isFavorite': getRandomNumberInRange(0, 1),
    'offers': ['8'],
    'type': 'train'
  },
  {
    'id': '7',
    'basePrice': getRandomNumberInRange(MIN_PRICE, MAX_PRICE),
    'dateFrom': '2023-07-10T22:55:56.845Z',
    'dateTo': '2023-07-15T11:22:13.375Z',
    'destination': getRandomArrayElement(DESTINATIONS).id,
    'isFavorite': getRandomNumberInRange(0, 1),
    'offers': [],
    'type': 'ship'
  },
  {
    'id': '8',
    'basePrice': getRandomNumberInRange(MIN_PRICE, MAX_PRICE),
    'dateFrom': '2024-08-05T22:14:56.845Z',
    'dateTo': '2024-08-05T11:13:13.375Z',
    'destination': getRandomArrayElement(DESTINATIONS).id,
    'isFavorite': getRandomNumberInRange(0, 1),
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '9',
    'basePrice': getRandomNumberInRange(MIN_PRICE, MAX_PRICE),
    'dateFrom': '2023-10-10T10:55:56.845Z',
    'dateTo': '2023-10-10T11:11:13.375Z',
    'destination': getRandomArrayElement(DESTINATIONS).id,
    'isFavorite': getRandomNumberInRange(0, 1),
    'offers': ['11'],
    'type': 'flight'
  },
  {
    'id': '10',
    'basePrice': getRandomNumberInRange(MIN_PRICE, MAX_PRICE),
    'dateFrom': '2022-04-10T22:55:56.845Z',
    'dateTo': '2022-05-11T11:22:13.375Z',
    'destination': getRandomArrayElement(DESTINATIONS).id,
    'isFavorite': getRandomNumberInRange(0, 1),
    'offers': [],
    'type': 'restaurant'
  }
];

function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}

export {getRandomEvent};
