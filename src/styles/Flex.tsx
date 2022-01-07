import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IFlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  children: ReactNode;
}

const StyledFlex = styled.div<IFlexProps>`
  display: flex;
  white-space: 'nowrap';
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'space-between'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;

export const Flex: React.FC<IFlexProps> = (props) => {
  return <StyledFlex {...props} />;
};
