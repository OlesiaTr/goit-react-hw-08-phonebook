// Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;

  font-weight: 700;
  color: #e5e5e5;

  &.active {
    color: #fb6d3a;
  }
`;
