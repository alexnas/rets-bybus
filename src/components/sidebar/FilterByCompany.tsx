import React, { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  initializeFilterByCompany,
  setCompanyFilterParams,
} from '../../store/slices/filterByCompanySlice';
import { StyledFilterWrapperUl, StyledLink } from '../../styles/Filters';

interface IItemProps {
  companyName: string;
  companyChecked: boolean;
  toggleCompanyFilter: (companyName: string, companyChecked: boolean) => void;
}

interface IFilterLiProps {
  showCompanyBox: boolean;
}

const StyledFilterLi = styled.li<IFilterLiProps>`
  display: ${(props) => (!props.showCompanyBox ? '' : 'none')};
  margin-top: ${(props) => (!props.showCompanyBox ? '8px' : '0')};
  div:first-child {
    border-top: 1px solid transparent;
  }
  div:not(:first-child) {
    border-top: 1px solid rgb(209 213 219 / 60%);
  }
`;

const FilterLi: React.FC<IFilterLiProps> = (props) => {
  return <StyledFilterLi {...props} />;
};

const FilterItem = styled.div`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    user-select: none;
    width: 100%;
    color: rgb(37, 33, 19);
    cursor: default;
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
  }

  input:checked + label {
    color: teal;
    font-weight: 400;
  }

  label:before {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-right: 15px;
    height: 14px;
    width: 14px;
    background: #fff;
    border: 2px solid teal;
    color: teal;
    border-radius: 5px;
    content: '';
  }

  input:checked + label:before {
    content: '\u2713';
  }
`;

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

interface Props {}

const FilterByCompany = (props: Props) => {
  const dispatch = useAppDispatch();
  const [showCompanyBox, setShowCompanyBox] = useState(true);
  const routes = useAppSelector((state) => state.routes.routes);
  const filterByCompany = useAppSelector(
    (state) => state.filterByCompany.filterByCompany
  );

  useEffect(() => {
    dispatch(initializeFilterByCompany(routes));
  }, [dispatch, routes]);

  const toggleCompanyBox = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowCompanyBox(!showCompanyBox);
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
      <FilterLi showCompanyBox={showCompanyBox}>
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
      </FilterLi>
    </StyledFilterWrapperUl>
  );
};

export default FilterByCompany;
