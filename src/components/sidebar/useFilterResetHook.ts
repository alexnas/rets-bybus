import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { initializeFilterByCompany } from '../../store/slices/filterByCompanySlice';
import { initializeFilterByStartCity } from '../../store/slices/filterByStartCitySlice';
import { initializeFilterByEndCity } from '../../store/slices/filterByEndCitySlice';
import { getStartTimeLimits } from './FilterByStartTime';
import { resetFilterByStartTime } from '../../store/slices/FilterByStartTimeSlice';

export const useFilterReset = () => {
  const dispatch = useAppDispatch();
  const routes = useAppSelector((state) => state.routes.routes);
  const { minStartTimeLimit, maxStartTimeLimit } = getStartTimeLimits(routes);
  const [isFilterChanged, setFilterChanged] = useState<boolean>(false);

  const resetFilter = () => {
    dispatch(initializeFilterByCompany(routes));
    dispatch(initializeFilterByStartCity(routes));
    dispatch(initializeFilterByEndCity(routes));
    dispatch(
      resetFilterByStartTime({
        filterByStartTime: {
          minLimit: minStartTimeLimit,
          maxLimit: maxStartTimeLimit,
        },
      })
    );
    setFilterChanged(false);
  };

  return { isFilterChanged, resetFilter };
};
