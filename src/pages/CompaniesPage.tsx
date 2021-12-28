import React from 'react';
import SecondBar from '../components/secondBar/SecondBar';
import { Container } from '../styles/Container';
import { MainWrapper } from '../styles/MainWrapper';
import { PageTitleWrapper } from '../styles/PageTitleWrapper';

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

        <p>Under Construction...</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          suscipit ab sit dolor eaque tenetur necessitatibus neque voluptatum!
          Asperiores, modi. +1-345-456-5656
        </p>
      </Container>
    </MainWrapper>
  );
};

export default CompaniesPage;
