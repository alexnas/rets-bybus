import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCompanyFilterParams } from '../../store/slices/filterByCompanySlice';
import {
  FilterItem,
  StyledFilterLi,
  StyledFilterWrapperUl,
  StyledLink,
} from '../../styles/Filters';

interface IItemProps {
  companyName: string;
  companyChecked: boolean;
  toggleCompanyFilter: (companyName: string, companyChecked: boolean) => void;
}

const CompanyFilterItem: React.FC<IItemProps> = ({
  companyName,
  companyChecked,
  toggleCompanyFilter,
}) => {
  return (
    <FilterItem>
      <input
        id={`company-${companyName}`}
        type='checkbox'
        name={companyName}
        checked={companyChecked}
        onChange={() => toggleCompanyFilter(companyName, companyChecked)}
      />
      <label htmlFor={`company-${companyName}`}>{companyName}</label>
    </FilterItem>
  );
};

const FilterByCompany: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showFilterBox, setShowFilterBox] = useState(true);
  const filterByCompany = useAppSelector(
    (state) => state.filterByCompany.filterByCompany
  );

  const toggleCompanyBox = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowFilterBox(!showFilterBox);
  };

  const toggleCompanyFilter = (
    companyName: string,
    companyChecked: boolean
  ): void => {
    dispatch(
      setCompanyFilterParams({
        companyName: companyName,
        filterState: !companyChecked,
      })
    );
  };

  return (
    <StyledFilterWrapperUl>
      <li>
        <StyledLink onClick={toggleCompanyBox} href='/#'>
          <FaCaretDown />
          <div>Company</div>
        </StyledLink>
      </li>
      <StyledFilterLi showFilterBox={showFilterBox}>
        {Object.keys(filterByCompany).map((item) => {
          return (
            <CompanyFilterItem
              key={item}
              companyName={item}
              companyChecked={filterByCompany[item]}
              toggleCompanyFilter={toggleCompanyFilter}
            />
          );
        })}
      </StyledFilterLi>
    </StyledFilterWrapperUl>
  );
};

export default FilterByCompany;
