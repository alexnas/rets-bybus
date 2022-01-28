import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { initializeFilterByCompany } from '../../store/slices/filterByCompanySlice';
import { initializeFilterByStartCity } from '../../store/slices/filterByStartCitySlice';
import { initializeFilterByEndCity } from '../../store/slices/filterByEndCitySlice';
import { getStartTimeLimits } from './FilterByStartTime';
import { resetFilterByStartTime } from '../../store/slices/filterByStartTimeSlice';
import { resetFilterByEndTime } from '../../store/slices/filterByEndTimeSlice';
import { getEndTimeLimits } from './FilterByEndTime';
import { resetFilterByPrice } from '../../store/slices/filterByPriceSlice';
import { getPriceLimits } from './FilterByPrice';

export const useFilterReset = () => {
  const dispatch = useAppDispatch();
  const routes = useAppSelector((state) => state.routes.routes);
  const {
    minScaleLimit: minStartTimeScaleLimit,
    maxScaleLimit: maxStartTimeScaleLimit,
  } = getStartTimeLimits(routes);
  const {
    minScaleLimit: minEndTimeScaleLimit,
    maxScaleLimit: maxEndTimeScaleLimit,
  } = getEndTimeLimits(routes);
  const {
    minScaleLimit: minPriceScaleLimit,
    maxScaleLimit: maxPriceScaleLimit,
  } = getPriceLimits(routes);
  const [isFilterChanged, setFilterChanged] = useState<boolean>(false);

  const resetFilter = () => {
    dispatch(initializeFilterByCompany(routes));
    dispatch(initializeFilterByStartCity(routes));
    dispatch(initializeFilterByEndCity(routes));
    dispatch(
      resetFilterByStartTime({
        minLimit: minStartTimeScaleLimit,
        maxLimit: maxStartTimeScaleLimit,
      })
    );
    dispatch(
      resetFilterByEndTime({
        minLimit: minEndTimeScaleLimit,
        maxLimit: maxEndTimeScaleLimit,
      })
    );
    dispatch(
      resetFilterByPrice({
        minLimit: minPriceScaleLimit,
        maxLimit: maxPriceScaleLimit,
      })
    );
    setFilterChanged(false);
  };

  return { isFilterChanged, resetFilter };
};
