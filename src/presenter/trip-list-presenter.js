import TripListView from '../view/trip-list-view.js';
import EditTripForm from '../view/event-edit-trip-form-view.js';
import TripItemView from '../view/trip-item-view.js';
import TripOfferView from '../view/trip-offer-view';
import {render} from '../render.js';


export default class TripListPresenter {
  tripListComponent = new TripListView();
  tripOfferComponent = new TripOfferView();

  constructor({boardContainer, eventsModel}) {
    this.boardContainer = boardContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.boardEvents = [...this.eventsModel.getEvents()];

    render(this.tripListComponent, this.boardContainer);
    render(new EditTripForm(), this.tripListComponent.getElement());

    for (let i = 0; i < this.boardEvents.length; i++) {
      render(new TripItemView({event: this.boardEvents[i]}), this.tripListComponent.getElement());
    }
  }

}
