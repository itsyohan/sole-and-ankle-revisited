import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES } from '../../constants';

import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';

const SearchInput = ({ label, ...delegated }) => {
  return (
    <Label>
      <VisuallyHidden>Search</VisuallyHidden>
      <Input {...delegated} placeholder="Search…" />
      <SearchIcon id="search" strokeWidth={1} />
    </Label>
  );
};

// label hack
// on mobile label becomes 0 width so giving it an explicit size
const Label = styled.label`
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    width: 24px;
    height: 24px;
  }
`;

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding-left: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[100]};
  outline-offset: 4px;

  &::placeholder {
    color: ${COLORS.gray[500]};
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;

export default SearchInput;
