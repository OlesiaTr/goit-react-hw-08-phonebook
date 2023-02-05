// Core
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
