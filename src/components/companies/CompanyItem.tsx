import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCardListItem } from '../../styles/Card';
import { ICompany } from '../../types';

interface ICompanyItemProps {
  company: ICompany;
}

const CompanyItem: React.FC<ICompanyItemProps> = ({ company }) => {
  const logo = `/images/busLogos/${company.logo}`;
  return (
    <StyledCardListItem key={company.id}>
      <Link
        title={`Bus company ${company.name}`}
        to={`/company/${company.name.toLowerCase()}`}
      >
        <img src={logo} alt='Company logo' />
        {company.name}
      </Link>
    </StyledCardListItem>
  );
};

export default CompanyItem;
