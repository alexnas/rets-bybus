import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { initializeFilterByCompany } from '../../store/slices/filterByCompanySlice';
import { initializeFilterByStartCity } from '../../store/slices/filterByStartCitySlice';
import { initializeFilterByEndCity } from '../../store/slices/filterByEndCitySlice';
import { resetFilterByStartTime } from '../../store/slices/filterByStartTimeSlice';
import { resetFilterByEndTime } from '../../store/slices/filterByEndTimeSlice';
import { resetFilterByPrice } from '../../store/slices/filterByPriceSlice';
import {
  selectEndTimeLimits,
  selectPriceLimits,
  selectStartTimeLimits,
} from '../../utils/selectors/filterSelectors';

export const useFilterReset = () => {
  const dispatch = useAppDispatch();
  const routes = useAppSelector((state) => state.routes.routes);

  const {
    minScaleLimit: minStartTimeScaleLimit,
    maxScaleLimit: maxStartTimeScaleLimit,
  } = useAppSelector((state) => selectStartTimeLimits(state));

  const {
    minScaleLimit: minEndTimeScaleLimit,
    maxScaleLimit: maxEndTimeScaleLimit,
  } = useAppSelector((state) => selectEndTimeLimits(state));

  const {
    minScaleLimit: minPriceScaleLimit,
    maxScaleLimit: maxPriceScaleLimit,
  } = useAppSelector((state) => selectPriceLimits(state));

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
