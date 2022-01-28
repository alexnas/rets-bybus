import React from 'react';
import styled from 'styled-components';
import ReactSlider from 'react-slider';
import { orderBy } from 'lodash';
import { StyledFilterWrapper } from '../../styles/Filters';
import { IRoute } from '../../types';
import {
  MAX_SCALE_END_TIME,
  MIN_SCALE_END_TIME,
} from '../../constants/filterConstants';
import { END_TIME } from '../../constants/sortConstants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFilterByEndTime } from '../../store/slices/filterByEndTimeSlice';

const StyledSlider = styled(ReactSlider)`
  margin: 10px 0;
  width: 100%;
  height: 12px;
`;

const StyledThumb = styled.div`
  top: -7px;
  height: 24px;
  line-height: -24px;
  width: 24px;
  text-align: center;
  background-color: white;
  border: 2px solid #3fa8a8;
  border-radius: 30%;
  cursor: grab;

  &:hover {
    background-color: #3fa8a8;
  }
  &:focus {
    outline: #3fa8a8;
  }
`;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  border: 1px solid #ddd;
  background: ${(props: any) => (props.index === 1 ? '#3fa8a8' : 'white')};
  border-radius: 999px;
`;

const Track = (props: any, state: any) => {
  return <StyledTrack {...props} index={state.index} />;
};

interface IThumbProps {}

interface IThumbState {
  value: any;
}

const Thumb = (props: IThumbProps, state: IThumbState) => {
  return <StyledThumb {...props} />;
};

export const StyledSliderLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
`;

export const getEndTimeLimits = (routes: IRoute[]) => {
  let minScaleLimit: number = MIN_SCALE_END_TIME;
  let maxScaleLimit: number = MAX_SCALE_END_TIME;
  let isRoutesNotEmpty: boolean = routes.length > 0;

  if (isRoutesNotEmpty) {
    const sortedRoutes = orderBy(routes, END_TIME);
    minScaleLimit = +sortedRoutes[0][END_TIME].split(':')[0];
    maxScaleLimit =
      +sortedRoutes[sortedRoutes.length - 1][END_TIME].split(':')[0] + 1;
  }

  return {
    isRoutesNotEmpty,
    minScaleLimit,
    maxScaleLimit,
  };
};

type Props = {};

const FilterByEndTime = (props: Props) => {
  const dispatch = useAppDispatch();
  const routes = useAppSelector((state) => state.routes.routes);
  const { minCurrent, maxCurrent } = useAppSelector(
    (state) => state.filterByEndTime
  );
  const { isRoutesNotEmpty, minScaleLimit, maxScaleLimit } =
    getEndTimeLimits(routes);

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
      <StyledSliderLabel>
        <div>{minCurrentLabel}</div>
        <div>{maxCurrentLabel}</div>
      </StyledSliderLabel>
      <StyledSlider
        value={[minCurrentPosition, maxCurrentPosition]}
        renderTrack={Track}
        renderThumb={(props, state) => Thumb(props, state)}
        onChange={(values: any) => handleOnChange(values)}
        min={minScaleLimit}
        max={maxScaleLimit}
        minDistance={1}
      />
    </StyledFilterWrapper>
  );
};

export default FilterByEndTime;
