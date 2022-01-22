import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBus } from 'react-icons/fa';
import { BsGeoAltFill } from 'react-icons/bs';
import { IRoute } from '../../types';
import { formatShowTime24, formattedDurationHM } from '../../utils/time';
import { useAppSelector } from '../../store/hooks';
import { cssCardBody, cssCardShadow } from '../../styles/StyledCard';
import { StyledButton } from '../../styles/Button';

interface IRouteItemProps {
  route: IRoute;
}

const StyledDetailsButton = styled(StyledButton)`
  width: 90px;
  height: 30px;
  font-size: 14px;
`;

const StyledRoutesWrapper = styled.div`
  ${cssCardBody}
  ${cssCardShadow}
		display: grid;
  padding: 10px;
  height: 160px;
  grid-template-columns: 368px 1fr 130px;
`;

const GridRight = styled.div`
  display: grid;
  width: 130px;

  > :nth-child(2) {
    align-self: center;
    justify-self: end;
    font-size: 26px;
  }

  > :nth-child(3) {
    align-self: end;
    justify-self: end;
  }
`;

const GridLeft = styled.div`
  display: grid;
  width: 368px;

  > :nth-child(1) {
    align-self: start;
  }
  > :nth-child(3) {
    align-self: end;
  }
`;

const GridLeftTopBottom = styled.div`
  display: grid;
  grid-template-columns: 84px 20px 1fr;

  > :nth-child(1) {
    display: grid;
    justify-content: end;
    padding-right: 8px;
    width: 84px;
  }
  > :nth-child(2) {
    display: grid;
    font-size: 0.97rem;
    justify-content: start;
    align-self: center;
    grid-auto-flow: column;
  }
  > :nth-child(3) {
    display: grid;
    font-size: 0.98rem;
    justify-content: start;
    align-self: center;
    padding-right: 8px;
  }
`;

const GridLeftMiddle = styled.div`
  display: grid;
  align-self: center;
  grid-template-columns: 60px 1fr;

  > :nth-child(1) {
    display: grid;
    align-content: center;
    justify-content: end;
    width: 60px;
  }

  > :nth-child(2) {
    display: grid;
    font-size: 0.9rem;
    align-content: center;
    justify-content: start;
    padding-left: 20px;
    margin-left: 32px;
    border-left: 2px solid gray;
  }
`;

const StyledGeoIcon = styled.span`
  color: rgb(37, 33, 19);
  padding-right: 10px;
`;

const StyledBusIcon = styled.div`
  color: rgb(75 85 99);
  font-size: 30px;
`;

const StyledLogo = styled.img`
  max-width: 130px;
`;

const RouteItem: React.FC<IRouteItemProps> = ({ route }) => {
  const { companies } = useAppSelector((state) => state.companies);

  const company = companies.filter(
    (company) => company.id === route.companyId
  )[0];

  const { start_time, end_time, start_city, end_city, price, distance } = route;
  const company_name = company && company.name;
  const logo = company && company.logo;
  const company_logo = `/images/busLogos/${logo}`;
  const duration = formattedDurationHM(start_time, end_time);

  const showStartTime = formatShowTime24(start_time);
  const showEndTime = formatShowTime24(end_time);

  return (
    <StyledRoutesWrapper>
      <GridLeft>
        <GridLeftTopBottom>
          <div>{showStartTime}</div>
          <StyledGeoIcon>
            <BsGeoAltFill />
          </StyledGeoIcon>
          <span>{start_city.city.name}</span>
        </GridLeftTopBottom>
        <GridLeftMiddle>
          <StyledBusIcon>
            <FaBus />
          </StyledBusIcon>
          <div>
            <div>
              <div>Duration: {duration}</div>
              <div>Distance: {distance} Km</div>
              <div>direct / via City</div>
            </div>
          </div>
        </GridLeftMiddle>
        <GridLeftTopBottom>
          <div>{showEndTime}</div>
          <StyledGeoIcon>
            <BsGeoAltFill />
          </StyledGeoIcon>
          <span>{end_city.city.name}</span>
        </GridLeftTopBottom>
      </GridLeft>

      <div></div>
      <GridRight>
        <Link to={'/company_details'}>
          <StyledLogo src={company_logo} alt={company_name} />
        </Link>
        <div>${price}</div>
        <Link to={'/route_details'}>
          <StyledDetailsButton>View Details</StyledDetailsButton>
        </Link>
      </GridRight>
    </StyledRoutesWrapper>
  );
};

export default RouteItem;
