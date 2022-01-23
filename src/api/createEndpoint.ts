import { ISearchParams } from '../constants/searchContants';

export const createBusRouteEndpoint = (props: ISearchParams) => {
  const { startCity, endCity, company } = props;
  if (!startCity && !endCity && !company) {
    return `/route`;
  }

  const startCityAttr =
    startCity && startCity !== ''
      ? `start_city=${startCity.toLowerCase()}`
      : '';
  const endCityAttr =
    endCity && endCity !== '' ? `&end_city=${endCity.toLowerCase()}` : '';
  const countryAttr =
    company && company !== '' ? `&company_name=${company.toLowerCase()}` : '';

  return `/route/?${startCityAttr}${endCityAttr}${countryAttr}`;
};
