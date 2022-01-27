import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactSlider from 'react-slider';
import orderBy from 'lodash/orderBy';
import { textBase } from '../../styles/Filters';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  initializeFilterByStartTime,
  setFilterByStartTimeParams,
} from '../../store/slices/FilterByStartTimeSlice';
import { IRoute } from '../../types';
import { START_TIME } from '../../constants/sortConstants';
import {
  MAX_SCALE_START_TIME,
  MIN_SCALE_START_TIME,
} from '../../constants/filterConstants';

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

// ==================
export const StyledFilterWrapper = styled.div`
  ${textBase};
  position: relative;
  box-shadow: '0 3px 5px 0 rgb(0 0 0 / 20%)';
  border: 1px solid rgb(204, 204, 204);
  background-color: white;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 0.5rem;
`;

export const StyledSliderLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
`;

export const getStartTimeLimits = (routes: IRoute[]) => {
  let minStartTimeLimit: number = MIN_SCALE_START_TIME;
  let maxStartTimeLimit: number = MAX_SCALE_START_TIME;

  if (routes.length > 0) {
    const sortedRoutes = orderBy(routes, START_TIME);
    minStartTimeLimit = +sortedRoutes[0][START_TIME].split(':')[0];
    maxStartTimeLimit =
      +sortedRoutes[sortedRoutes.length - 1][START_TIME].split(':')[0] + 1;
  }
  return {
    minStartTimeLimit,
    maxStartTimeLimit,
  };
};

type Props = {};

const FilterByStartTime: React.FC = (props: Props) => {
  const dispatch = useAppDispatch();
  const routes = useAppSelector((state) => state.routes.routes);
  const { minCurrent, maxCurrent } = useAppSelector(
    (state) => state.filterByStartTime
  );

  let { minStartTimeLimit, maxStartTimeLimit } = getStartTimeLimits(routes);
  const minHourLimit = MIN_SCALE_START_TIME; // 0 Default Scale Limits
  const maxHourLimit = MAX_SCALE_START_TIME; // 24 Default Scale Limits

  const minTimeLimit = minStartTimeLimit ? minStartTimeLimit : minHourLimit; // Scale limits
  const maxTimeLimit = maxStartTimeLimit ? maxStartTimeLimit : maxHourLimit; // Scale limits

  const minCur = minCurrent ? minCurrent : minStartTimeLimit; // Defined current values
  const maxCur = maxCurrent ? maxCurrent : maxStartTimeLimit; // Defined current values

  const minCurrentLable: string = minCurrent ? minCurrent + ':00' : `__:__`; // LAbel current values
  const maxCurrentLable: string = maxCurrent ? maxCurrent + ':00' : `__:__`; // LAbel current values

  useEffect(() => {
    if (routes.length > 0) {
      dispatch(
        initializeFilterByStartTime({
          filterByStartTime: {
            minLimit: minTimeLimit,
            maxLimit: maxTimeLimit,
            minCurrent: minCur,
            maxCurrent: maxCur,
          },
        })
      );
    }
  }, [dispatch, minTimeLimit, maxTimeLimit, minCur, maxCur, routes.length]);

  const handleOnChange = (values: any) => {
    dispatch(
      setFilterByStartTimeParams({
        minCurrent: values[0],
        maxCurrent: values[1],
      })
    );
  };

  return (
    <StyledFilterWrapper>
      <div>Departure Time</div>
      <StyledSliderLabel>
        <div>{minCurrentLable}</div>
        <div>{maxCurrentLable}</div>
      </StyledSliderLabel>
      <StyledSlider
        value={[minCur, maxCur]}
        renderTrack={Track}
        renderThumb={(props, state) => Thumb(props, state)}
        onChange={(values: any) => handleOnChange(values)}
        min={minStartTimeLimit}
        max={maxStartTimeLimit}
        minDistance={1}
      />
    </StyledFilterWrapper>
  );
};

export default FilterByStartTime;
