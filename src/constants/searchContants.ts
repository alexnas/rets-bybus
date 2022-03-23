export interface ISearchParams {
  startCity: string;
  endCity: string;
  company: string;
}

export const initialSearchParams: ISearchParams = {
  startCity: 'Cuenca',
  endCity: '',
  company: '',
};
