import {createElement} from '../render.js';

function createTripInfoOverWrapperTemplate() {
  return '<section class="trip-main__trip-info trip-info"></section>';
}

export default class NewTripInfoSection {
  getTemplate() {
    return createTripInfoOverWrapperTemplate();
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
