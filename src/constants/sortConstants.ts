export const START_TIME = 'start_time';
export const START_CITY = 'start_city.city.name';
export const END_CITY = 'end_city.city.name';
export const COMPANY_NAME = 'company.name';
export const PRICE = 'price';
export const DURATION = 'duration';
export const ASC = 'ASC';
export const DESC = 'DESC';

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
    sortKey: [START_TIME, START_CITY, END_CITY, COMPANY_NAME, PRICE],
    sortDir: [ASC, ASC, ASC, ASC, ASC],
  },
  END_TIME: {
    name: 'END_TIME',
    title: 'Arraival Time',
    sortKey: [
      'end_time',
      START_CITY,
      END_CITY,
      START_TIME,
      COMPANY_NAME,
      'price',
    ],
    sortDir: [ASC, ASC, ASC, ASC, ASC],
  },
  START_CITY: {
    name: 'START_CITY',
    title: 'Departure City',
    sortKey: [START_CITY, END_CITY, START_TIME, COMPANY_NAME, PRICE],
    sortDir: [ASC, ASC, ASC, ASC, ASC],
  },
  END_CITY: {
    name: 'END_CITY',
    title: 'Arrival City',
    sortKey: [
      'end_city.city.name',
      START_CITY,
      START_TIME,
      COMPANY_NAME,
      'price',
    ],
    sortDir: [ASC, ASC, ASC, ASC, ASC],
  },
  COMPANY_NAME: {
    name: 'COMPANY_NAME',
    title: 'Company',
    sortKey: [COMPANY_NAME, START_TIME, START_CITY, END_CITY, PRICE],
    sortDir: [ASC, ASC, ASC, ASC, ASC],
  },
  PRICE: {
    name: 'PRICE',
    title: 'Price',
    sortKey: [PRICE, START_TIME, START_CITY, END_CITY, COMPANY_NAME],
    sortDir: [ASC, ASC, ASC, ASC, ASC],
  },
  DURATION: {
    name: 'DURATION',
    title: 'Duration',
    sortKey: [DURATION, START_TIME, START_CITY, END_CITY, COMPANY_NAME, PRICE],
    sortDir: [ASC, ASC, ASC, ASC, ASC],
  },
};

export const sortItems = Object.keys(BUS_ROUTES_SORT_PARAMS);
