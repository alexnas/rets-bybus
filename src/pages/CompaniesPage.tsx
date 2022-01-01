import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { MainWrapper } from '../styles/MainWrapper';
import { PageTitleWrapper } from '../styles/PageTitleWrapper';
import CompaniesList from '../components/companies/CompaniesList';

const headerLogo = process.env.PUBLIC_URL + '/images/gobybus_logo.png';
console.log('headLogo', headerLogo);

interface Props {}

const CompaniesPage: React.FC = (props: Props) => {
  return (
    <MainWrapper>
      <SecondBar title='Bus companies' />
      <Container>
        <h2>Top bus companies working with Cuenca</h2>
        <h4>Get information about your bus company</h4>

        <PageTitleWrapper>
          <h3>Top bus companies working with Cuenca</h3>
        </PageTitleWrapper>

        <CompaniesList />
      </Container>
    </MainWrapper>
  );
};

export default CompaniesPage;
