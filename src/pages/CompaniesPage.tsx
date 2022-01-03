import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import Card from '../components/Card';
import CompaniesList from '../components/companies/CompaniesList';
import { Wrapper } from '../styles/Wrapper';

interface Props {}

const CompaniesPage: React.FC = (props: Props) => {
  return (
    <>
      <SecondBar title='Bus companies' />
      <Container>
        <Wrapper>
          <h2>Top bus companies working with Cuenca</h2>
          <h4>Get information about your bus company</h4>

          <Card title='Top bus companies working with Cuenca'>
            <CompaniesList />
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

export default CompaniesPage;
