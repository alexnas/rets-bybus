export interface ICompany {
  id: number;
  name: string;
  fullname: string;
  logo: string;
  rating: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface IRoute {
  id: number;
  name: string;
  start_time: string;
  end_time: string;
  price: number;
  distance: number;
  description: string;
  startCityId: number;
  endCityId: number;
  companyId: number;
}
