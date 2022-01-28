import React from 'react';
import { StyledFilterWrapper } from '../../styles/Filters';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFilterByEndTime } from '../../store/slices/filterByEndTimeSlice';
import { selectEndTimeLimits } from '../../utils/selectors/filterSelectors';
import ReSlider from './ReSlider';

type Props = {};

const FilterByEndTime = (props: Props) => {
  const dispatch = useAppDispatch();
  const { minCurrent, maxCurrent } = useAppSelector(
    (state) => state.filterByEndTime
  );
  const { isRoutesNotEmpty, minScaleLimit, maxScaleLimit } = useAppSelector(
    (state) => selectEndTimeLimits(state)
  );

  const minCurrentPosition = minCurrent ? minCurrent : minScaleLimit;
  const maxCurrentPosition = maxCurrent ? maxCurrent : maxScaleLimit;

  const minCurrentLabel: string = isRoutesNotEmpty
    ? minCurrentPosition + ':00'
    : `__:__`;
  const maxCurrentLabel: string = isRoutesNotEmpty
    ? maxCurrentPosition + ':00'
    : `__:__`;

  const handleOnChange = (values: any) => {
    dispatch(
      setFilterByEndTime({
        minCurrent: values[0],
        maxCurrent: values[1],
      })
    );
  };

  return (
    <StyledFilterWrapper>
      <div>Arrival Time</div>
      <ReSlider
        handleOnChange={handleOnChange}
        minCurrentLabel={minCurrentLabel}
        maxCurrentLabel={maxCurrentLabel}
        minScaleLimit={minScaleLimit}
        maxScaleLimit={maxScaleLimit}
        minCurrentPosition={minCurrentPosition}
        maxCurrentPosition={maxCurrentPosition}
      />
    </StyledFilterWrapper>
  );
};

export default FilterByEndTime;
