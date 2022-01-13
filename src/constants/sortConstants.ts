export interface ISortParamSpecs {
  name: string;
  title: string;
  sortKey: string[];
  sortDir: string[];
}

export interface ISortParams {
  [key: string]: ISortParamSpecs;
}

export const BUS_ROUTES_SORT_PARAMS: ISortParams = {
  START_TIME: {
    name: 'START_TIME',
    title: 'Departure Time',
    sortKey: ['start_time', 'start_city', 'end_city', 'company_name', 'price'],
    sortDir: ['ASC', 'ASC', 'ASC', 'ASC', 'ASC'],
  },
  END_TIME: {
    name: 'END_TIME',
    title: 'Arraival Time',
    sortKey: [
      'end_time',
      'start_city',
      'end_city',
      'start_time',
      'company_name',
      'price',
    ],
    sortDir: ['ASC', 'ASC', 'ASC', 'ASC', 'ASC'],
  },
  START_CITY: {
    name: 'START_CITY',
    title: 'Departure City',
    sortKey: ['start_city', 'end_city', 'start_time', 'company_name', 'price'],
    sortDir: ['ASC', 'ASC', 'ASC', 'ASC', 'ASC'],
  },
  END_CITY: {
    name: 'END_CITY',
    title: 'Arrival City',
    sortKey: ['end_city', 'start_city', 'start_time', 'company_name', 'price'],
    sortDir: ['ASC', 'ASC', 'ASC', 'ASC', 'ASC'],
  },
  COMPANY_NAME: {
    name: 'COMPANY_NAME',
    title: 'Company',
    sortKey: ['company_name', 'start_time', 'start_city', 'end_city', 'price'],
    sortDir: ['ASC', 'ASC', 'ASC', 'ASC', 'ASC'],
  },
  PRICE: {
    name: 'PRICE',
    title: 'Price',
    sortKey: ['price', 'start_time', 'start_city', 'end_city', 'company_name'],
    sortDir: ['ASC', 'ASC', 'ASC', 'ASC', 'ASC'],
  },
  DURATION: {
    name: 'DURATION',
    title: 'Duration',
    sortKey: [
      'duration',
      'start_time',
      'start_city',
      'end_city',
      'company_name',
      'price',
    ],
    sortDir: ['ASC', 'ASC', 'ASC', 'ASC', 'ASC'],
  },
};

export const sortItems = Object.keys(BUS_ROUTES_SORT_PARAMS);
