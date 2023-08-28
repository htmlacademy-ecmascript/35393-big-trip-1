const OFFERS = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': '1',
        'title': 'Upgrade to a business class',
        'price': 120
      },
      {
        'id': '2',
        'title': 'Upgrade to a business class',
        'price': 120
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': '3',
        'title': 'Order Uber',
        'price': 20
      },
      {
        'id': '4',
        'title': 'Upgrade to a business class',
        'price': 120
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': [
      {
        'id': '5',
        'title': 'Add luggage',
        'price': 50
      },
      {
        'id': '6',
        'title': 'Switch to comfort',
        'price': 80
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': '7',
        'title': 'Switch to comfort',
        'price': 80
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': '8',
        'title': 'Rent a car',
        'price': 200
      }
    ]
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': '9',
        'title': 'Add breakfast',
        'price': 50
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': '10',
        'title': 'Book tickets',
        'price': 40
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': '11',
        'title': 'Lunch in city',
        'price': 30
      }
    ]
  }
];

const DESTINATIONS = [
  {
    'id': '1',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat augue sit amet faucibus sodales. Morbi blandit leo elit, tincidunt maximus orci varius ultricies.',
    'name': 'Shanghai',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Shanghai parliament building'
      }]
  },
  {
    'id': '2',
    'description': 'Proin turpis nulla, sollicitudin ac felis in, porta pulvinar leo. Proin lobortis tristique sem, eu malesuada purus dictum sed.',
    'name': 'Beijing',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Beijing parliament building'
      }]
  },
  {
    'id': '3',
    'description': 'Donec porttitor dapibus ultrices. Sed congue dictum ex nec tempus. Cras ac efficitur nunc. Fusce consectetur dapibus vehicula.',
    'name': 'Guangzhou',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Guangzhou parliament building'
      }]
  },
  {
    'id': '4',
    'description': 'Praesent lobortis ante at orci viverra condimentum. In vel ipsum leo. Suspendisse potenti. Integer et purus vel neque aliquam tristique.',
    'name': 'Shenzhen',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Shenzhen parliament building'
      }]
  },
  {
    'id': '5',
    'description': 'Aliquam massa ligula, ornare sed dolor ut, ullamcorper dapibus urna. Quisque sapien turpis, suscipit a nulla a, dignissim blandit ipsum.',
    'name': 'Chongqing',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chongqing parliament building'
      }]
  }
];

const MIN_PRICE = 10;
const MAX_PRICE = 1000;

export {MAX_PRICE, MIN_PRICE, OFFERS, DESTINATIONS};
