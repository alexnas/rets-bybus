import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaCaretDown, FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  BUS_ROUTES_SORT_PARAMS,
  sortItems,
} from '../../constants/sortConstants';
import { useAppSelector } from '../../store/hooks';
import { setSortParams } from '../../store/slices/sortSlice';

const textBase = css`
  font-size: 1rem;
  line-height: 1.5rem;
`;

const StyledSideBoxTitle = styled.div`
  ${textBase}
`;

const StyledSortWrapperUl = styled.ul`
  ${textBase};
  position: relative;
  line-height: 2.25rem;
  box-shadow: '0 3px 5px 0 rgb(0 0 0 / 20%)';
  border: 1px solid rgb(204, 204, 204);
  background-color: white;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: rgb(37, 33, 19);
  width: 100%;
  margin-left: 8px;

  *:focus {
    outline: none;
  }

  div {
    margin-left: 4px;
  }
`;

const StyledSortListUl = styled.ul`
  position: absolute;
  z-index: 50;
  width: 100%;
  top: 2.25rem;
  left: 0;
  border: 2px solid rgb(209 213 219);
  border-top: 0;
  background-color: rgb(243 244 246);

  li {
    color: teal;
    border-top-width: 0px;
  }

  a {
    color: rgb(37, 33, 19);
  }
`;

const StyledSortElem = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 4px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-top: 2px solid rgb(209 213 219);

  &:hover {
    background-color: rgb(229 231 235);
  }
`;

const StyledCheckIcon = styled(FaCheck)`
  height: 12px;
  width: 24px;
`;

interface ISortLinkProps {
  hideSortBox: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  sortParams: any;
  currentSortKey: string;
}

const SortLink: React.FC<ISortLinkProps> = ({
  hideSortBox,
  sortParams,
  currentSortKey,
}) => {
  const dispatch = useDispatch();
  let opacity = 0;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(setSortParams(sortParams));
    hideSortBox(e);
  };

  const SortElement = () => {
    return (
      <StyledSortElem>
        <StyledCheckIcon style={{ opacity: `${opacity}` }}></StyledCheckIcon>
        <div>{sortParams.title}</div>
      </StyledSortElem>
    );
  };

  if (sortParams.name === currentSortKey) {
    opacity = 100;
    return (
      <span>
        <SortElement />
      </span>
    );
  }

  return (
    <Link to='/#' onClick={handleClick}>
      <SortElement />
    </Link>
  );
};

const SortRoutes: React.FC = () => {
  const [showSortBox, setShowSortBox] = useState(true);
  const currentSortParams = useAppSelector(
    (state) => state.sortParams.sortParams
  );
  const { title: currentSortTitle, name: currentSortKey } = currentSortParams;

  const toggleSortBox = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowSortBox(!showSortBox);
  };

  const hideSortBox = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowSortBox(true);
  };

  return (
    <>
      <StyledSideBoxTitle>
        <span>Sort by</span>
      </StyledSideBoxTitle>
      <StyledSortWrapperUl>
        <li>
          <StyledLink onClick={toggleSortBox} href='/#'>
            <FaCaretDown />
            <div>{currentSortTitle}</div>
          </StyledLink>
          <StyledSortListUl hidden={showSortBox}>
            <li>
              {sortItems.map((sortItem) => {
                const item = BUS_ROUTES_SORT_PARAMS[sortItem];
                return (
                  <SortLink
                    key={item.name}
                    sortParams={item}
                    currentSortKey={currentSortKey}
                    hideSortBox={hideSortBox}
                  >
                    {item.title}
                  </SortLink>
                );
              })}
            </li>
          </StyledSortListUl>
        </li>
      </StyledSortWrapperUl>
    </>
  );
};

export default SortRoutes;
