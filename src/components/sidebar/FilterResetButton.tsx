import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../../styles/Button';
import { useFilterReset } from './useFilterResetHook';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
`;
const StyledResetButton = styled(StyledButton)`
  width: 100%;
  height: 30px;
  font-size: 16px;
  color: #fff;
  background-color: #3fa8a8;
`;

const FilterResetButton: React.FC = () => {
  const { resetFilter } = useFilterReset();

  const handleFilterReset = () => {
    resetFilter();
  };

  return (
    <ButtonWrapper className='relative group leading-9 shadow-asideBox border-1 border-gray-500 rounded-sm mb-2 text-base bg-topBg'>
      <StyledResetButton type='button' onClick={handleFilterReset}>
        Reset
      </StyledResetButton>
    </ButtonWrapper>
  );
};

export default FilterResetButton;
