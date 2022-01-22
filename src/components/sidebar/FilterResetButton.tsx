import React from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { initializeFilterByCompany } from '../../store/slices/filterByCompanySlice';
import { initializeFilterByStartCity } from '../../store/slices/FilterByStartCitySlice';
import { initializeFilterByEndCity } from '../../store/slices/FilterByEndCitySlice';
import { StyledButton } from '../../styles/Button';

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
  const dispatch = useAppDispatch();
  const routes = useAppSelector((state) => state.routes.routes);

  const filterReset = () => {
    dispatch(initializeFilterByCompany(routes));
    dispatch(initializeFilterByStartCity(routes));
    dispatch(initializeFilterByEndCity(routes));
  };

  return (
    <ButtonWrapper className='relative group leading-9 shadow-asideBox border-1 border-gray-500 rounded-sm mb-2 text-base bg-topBg'>
      <StyledResetButton onClick={filterReset}>Reset</StyledResetButton>
    </ButtonWrapper>
  );
};

export default FilterResetButton;
