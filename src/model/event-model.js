import {getRandomEvent} from '../mock/event.js';

const EVENT_COUNT = 10;

export default class EventsModel {
  events = Array.from({length: EVENT_COUNT}, getRandomEvent);

  getEvents() {
    return this.events;
  }
}
