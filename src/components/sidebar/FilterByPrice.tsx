import React from 'react';
import { StyledFilterWrapper } from '../../styles/Filters';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFilterByPrice } from '../../store/slices/filterByPriceSlice';
import { selectPriceLimits } from '../../utils/selectors/filterSelectors';
import ReSlider from './ReSlider';

type Props = {};

const FilterByPrice = (props: Props) => {
  const dispatch = useAppDispatch();
  const { minCurrent, maxCurrent } = useAppSelector(
    (state) => state.filterByPrice
  );
  const { isRoutesNotEmpty, minScaleLimit, maxScaleLimit } = useAppSelector(
    (state) => selectPriceLimits(state)
  );

  const minCurrentPosition = minCurrent ? minCurrent : minScaleLimit;
  const maxCurrentPosition = maxCurrent ? maxCurrent : maxScaleLimit;

  const minCurrentLabel: string = isRoutesNotEmpty
    ? '$' + minCurrentPosition
    : `$__`;
  const maxCurrentLabel: string = isRoutesNotEmpty
    ? '$' + maxCurrentPosition
    : `$__`;

  const handleOnChange = (values: any) => {
    dispatch(
      setFilterByPrice({
        minCurrent: values[0],
        maxCurrent: values[1],
      })
    );
  };

  return (
    <StyledFilterWrapper>
      <div>Price</div>
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

export default FilterByPrice;
