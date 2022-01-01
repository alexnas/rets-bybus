import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ICompany } from '../../types';

interface ICompanyItemProps {
  company: ICompany;
}

const StyledCompanyItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
  img {
    width: 30%;
  }
`;

const CompanyItem: React.FC<ICompanyItemProps> = ({ company }) => {
  const logo = `/images/busLogos/${company.logo}`;
  return (
    <StyledCompanyItem key={company.id}>
      <Link
        className='flex items-center space-x-10'
        title={`Bus company ${company.name}`}
        to={`/company/${company.name.toLowerCase()}`}
      >
        <img src={logo} className='w-1/3' alt='Company logo' />
        {company.name}
      </Link>
    </StyledCompanyItem>
  );
};

export default CompanyItem;
