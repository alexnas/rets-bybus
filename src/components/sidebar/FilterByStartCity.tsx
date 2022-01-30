import React, { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  initializeFilterByStartCity,
  setStartCityFilterParams,
} from '../../store/slices/filterByStartCitySlice';
import {
  FilterItem,
  StyledFilterLi,
  StyledFilterWrapperUl,
  StyledLink,
} from '../../styles/Filters';

interface IItemProps {
  startCityName: string;
  startCityChecked: boolean;
  toggleStartCityFilter: (
    startCityName: string,
    startCityChecked: boolean
  ) => void;
}

const StartCityFilterItem: React.FC<IItemProps> = ({
  startCityName,
  startCityChecked,
  toggleStartCityFilter,
}) => {
  return (
    <FilterItem>
      <input
        id={`startCity-${startCityName}`}
        type='checkbox'
        name={startCityName}
        checked={startCityChecked}
        onChange={() => toggleStartCityFilter(startCityName, startCityChecked)}
      />
      <label htmlFor={`startCity-${startCityName}`}>{startCityName}</label>
    </FilterItem>
  );
};

const FilterByStartCity: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showFilterBox, setShowFilterBox] = useState(true);
  const routes = useAppSelector((state) => state.routes.routes);
  const filterByStartCity = useAppSelector(
    (state) => state.filterByStartCity.filterByStartCity
  );

  useEffect(() => {
    dispatch(initializeFilterByStartCity(routes));
  }, [dispatch, routes]);

  const toggleShowFilterBox = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowFilterBox(!showFilterBox);
  };

  const toggleStartCityFilter = (
    startCityName: string,
    startCityChecked: boolean
  ): void => {
    dispatch(
      setStartCityFilterParams({
        startCityName: startCityName,
        filterState: !startCityChecked,
      })
    );
  };

  return (
    <StyledFilterWrapperUl>
      <li>
        <StyledLink onClick={toggleShowFilterBox} href='/#'>
          <FaCaretDown />
          <div>Departure City</div>
        </StyledLink>
      </li>
      <StyledFilterLi showFilterBox={showFilterBox}>
        {Object.keys(filterByStartCity).map((item) => {
          return (
            <StartCityFilterItem
              key={item}
              startCityName={item}
              startCityChecked={filterByStartCity[item]}
              toggleStartCityFilter={toggleStartCityFilter}
            />
          );
        })}
      </StyledFilterLi>
    </StyledFilterWrapperUl>
  );
};

export default FilterByStartCity;
