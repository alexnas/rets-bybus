import styled from 'styled-components';

interface IWrapperProps {
  display?: string;
  minHeight?: string;
  padding?: string;
  margin?: string;
  maxWidth?: string;
}

export const StyledWrapper = styled.div<IWrapperProps>`
  display: ${(props) => props.display || 'block'};
  min-height: ${(props) => props.minHeight || '600px'};
  margin: ${(props) => props.margin || '0 auto'};
  padding: ${(props) => props.padding || '0'};
  max-width: ${(props) => props.maxWidth || '1024px'};
`;
