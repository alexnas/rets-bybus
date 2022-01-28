import React, { ReactNode } from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

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

interface IReSliderProps {
  handleOnChange: (values: number[]) => void;
  minCurrentLabel: string;
  maxCurrentLabel: string;
  minScaleLimit: number;
  maxScaleLimit: number;
  minCurrentPosition: number;
  maxCurrentPosition: number;
  children?: ReactNode;
}

const ReSlider: React.FC<IReSliderProps> = (props) => {
  const {
    handleOnChange,
    minCurrentLabel,
    maxCurrentLabel,
    minScaleLimit,
    maxScaleLimit,
    minCurrentPosition,
    maxCurrentPosition,
  } = props;

  return (
    <>
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
    </>
  );
};

export default ReSlider;
