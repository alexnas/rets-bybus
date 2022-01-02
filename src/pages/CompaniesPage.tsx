import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { MainWrapper } from '../styles/MainWrapper';
import Card from '../components/Card';
import CompaniesList from '../components/companies/CompaniesList';

interface Props {}

const CompaniesPage: React.FC = (props: Props) => {
  return (
    <MainWrapper>
      <SecondBar title='Bus companies' />
      <Container>
        <h2>Top bus companies working with Cuenca</h2>
        <h4>Get information about your bus company</h4>

        <Card title='Top bus companies working with Cuenca'>
          <CompaniesList />
        </Card>
      </Container>
    </MainWrapper>
  );
};

export default CompaniesPage;
