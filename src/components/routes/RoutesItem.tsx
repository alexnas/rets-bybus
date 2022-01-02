import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCardListItem } from '../../styles/Card';
import { IRoute } from '../../types';

interface IRouteItemProps {
  route: IRoute;
}

const RouteItem: React.FC<IRouteItemProps> = ({ route }) => {
  return (
    <StyledCardListItem key={route.id}>
      <Link
        title={`Bus route ${route.name}`}
        to={`/route/${route.name.toLowerCase()}`}
      >
        {route.name}
      </Link>
    </StyledCardListItem>
  );
};

export default RouteItem;
