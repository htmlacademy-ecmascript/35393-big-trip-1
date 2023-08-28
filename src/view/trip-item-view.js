import {humanizeEventDate, getDuration} from '../utils';
import {DESTINATIONS, OFFERS} from '../const';
import {createElement} from '../render.js';

const DATE_FORMAT = 'MMM DD';
const TIME_DATE_FORMAT = 'YYYY-MM-DD';
const START_END_TIME = 'YYYY-MM-DD[T]HH:mm';
const TIME_FORMAT = 'HH:mm';
const IS_FAVORITE_CLASS = 'event__favorite-btn--active';

// function getActiveOffers(event) {
//   const activeOffers = [];
//
//   for (let i = 0; i < OFFERS.length; i++) {
//     if (OFFERS[i].type === event.type) {
//
//       event.offers.forEach((item) => {
//         for (let j = 0; j < OFFERS[i].offers.length; j++) {
//
//           if (OFFERS[i].offers[j].id === item) {
//             activeOffers[0] = OFFERS[i].offers[j];
//           }
//         }
//       });
//     }
//   }
//
//   if (activeOffers.length) {
//     return activeOffers;
//   } else {
//     return false;
//   }
// }

function getCurDestination(destination) {
  let dest;

  for (let i = 0; i < DESTINATIONS.length; i++) {
    if (DESTINATIONS[i].id === destination) {
      dest = DESTINATIONS[i].name;
      break;
    }
  }

  return dest;
}

function createTripItemTemplate(event) {
  const {basePrice, type, destination} = event;

  const date = humanizeEventDate(event.dateFrom, DATE_FORMAT);
  const dateTime = humanizeEventDate(event.dateFrom, TIME_DATE_FORMAT);
  const dateTimeStart = humanizeEventDate(event.dateFrom, START_END_TIME);
  const dateTimeEnd = humanizeEventDate(event.dateTo, START_END_TIME);
  const timeStart = humanizeEventDate(event.dateFrom, TIME_FORMAT);
  const timeEnd = humanizeEventDate(event.dateTo, TIME_FORMAT);
  const duration = getDuration(timeStart, timeEnd);
  const curDestination = getCurDestination(destination);
  // const activeOffers = getActiveOffers(event);
  const highliterFavorite = event.isFavorite ? IS_FAVORITE_CLASS : '';

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateTime}">${date}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${curDestination}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateTimeStart}">${timeStart}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTimeEnd}">${timeEnd}</time>
          </p>
          <p class="event__duration">${duration}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
        <!--          Offers-->
        </ul>
        <button class="event__favorite-btn ${highliterFavorite}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
}

export default class TripItemView {
  constructor({event}) {
    this.event = event;
  }

  getTemplate() {
    return createTripItemTemplate(this.event);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
