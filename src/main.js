import NewEventAddBtn from './view/event-add-btn-view.js';
import NewTripFilters from './view/trip-filters-view.js';
import NewTripSort from './view/trip-sort-view.js';
import {render} from './render.js';
import TripListPresenter from './presenter/trip-list-presenter.js';
import EventsModel from './model/event-model';

const siteHeaderElement = document.querySelector('.page-header');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteMainFiltersElement = siteHeaderElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

const eventsModel = new EventsModel();
const tripListPresenter = new TripListPresenter({
  boardContainer: siteTripEventsElement,
  eventsModel
});

render(new NewEventAddBtn(), siteTripMainElement);
render(new NewTripFilters(), siteMainFiltersElement);
render(new NewTripSort(), siteTripEventsElement);

tripListPresenter.init();
