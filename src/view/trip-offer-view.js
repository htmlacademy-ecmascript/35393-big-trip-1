import {createElement} from '../render.js';

function createTripOfferTemplate(ttl, price) {
  return (
    `<li class="event__offer">
      <span class="event__offer-title">${ttl}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </li>`
  );
}

export default class TripOfferView {
  getTemplate() {
    return createTripOfferTemplate();
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
