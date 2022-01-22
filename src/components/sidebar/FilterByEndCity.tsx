import React, { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  initializeFilterByEndCity,
  setEndCityFilterParams,
} from '../../store/slices/filterByEndCitySlice';
import {
  FilterItem,
  FilterLi,
  StyledFilterWrapperUl,
  StyledLink,
} from '../../styles/Filters';

interface IItemProps {
  endCityName: string;
  endCityChecked: boolean;
  toggleEndCityFilter: (endCityName: string, endCityChecked: boolean) => void;
}

const EndCityFilterItem: React.FC<IItemProps> = ({
  endCityName,
  endCityChecked,
  toggleEndCityFilter,
}) => {
  return (
    <FilterItem>
      <input
        id={`endCity-${endCityName}`}
        type='checkbox'
        name={endCityName}
        checked={endCityChecked}
        onChange={() => toggleEndCityFilter(endCityName, endCityChecked)}
      />
      <label htmlFor={`endCity-${endCityName}`}>{endCityName}</label>
    </FilterItem>
  );
};

const FilterByEndCity: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showFilterBox, setShowFilterBox] = useState(true);
  const routes = useAppSelector((state) => state.routes.routes);
  const filterByEndCity = useAppSelector(
    (state) => state.filterByEndCity.filterByEndCity
  );

  useEffect(() => {
    dispatch(initializeFilterByEndCity(routes));
  }, [dispatch, routes]);

  const toggleShowFilterBox = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowFilterBox(!showFilterBox);
  };

  const toggleEndCityFilter = (
    endCityName: string,
    endCityChecked: boolean
  ): void => {
    dispatch(
      setEndCityFilterParams({
        endCityName: endCityName,
        filterState: !endCityChecked,
      })
    );
  };

  return (
    <StyledFilterWrapperUl>
      <li>
        <StyledLink onClick={toggleShowFilterBox} href='/#'>
          <FaCaretDown />
          <div>Arrival City</div>
        </StyledLink>
      </li>
      <FilterLi showFilterBox={showFilterBox}>
        {Object.keys(filterByEndCity).map((item) => {
          return (
            <EndCityFilterItem
              key={item}
              endCityName={item}
              endCityChecked={filterByEndCity[item]}
              toggleEndCityFilter={toggleEndCityFilter}
            />
          );
        })}
      </FilterLi>
    </StyledFilterWrapperUl>
  );
};

export default FilterByEndCity;
