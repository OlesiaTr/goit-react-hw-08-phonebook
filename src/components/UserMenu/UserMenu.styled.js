// Core
import styled from 'styled-components';
import { RiLogoutCircleRLine } from 'react-icons/ri';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Desc = styled.p`
  color: #e5e5e5;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;

  color: #2b3a55;

  margin-right: 12px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fb6d3a;
  }
`;

export const Icon = styled(RiLogoutCircleRLine)`
  width: 20px;
  height: 20px;
`;
