import React from 'react';
import styled from 'styled-components';

interface Props {}

const StyledCopyright = styled.div`
  font-size: 0.9rem;
  margin-left: 30px;
`;

const Copyright = (props: Props) => {
  return (
    <StyledCopyright>
      &copy;
      <span>Copyright</span>
    </StyledCopyright>
  );
};

export default Copyright;
