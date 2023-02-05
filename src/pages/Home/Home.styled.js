// Core
import { ImAddressBook } from 'react-icons/im';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin-bottom: 20px;
`;

export const Icon = styled(ImAddressBook)`
  display: inline-flex;
  width: 50px;
  height: 50px;

  color: #2b3a55;
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const Desc = styled.p`
  color: #fb6d3a;
  font-weight: 500;
`;

export const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 250px;
  height: 40px;

  background-color: #2b3a55;
  color: #e5e5e5;

  font-weight: 700;
  font-size: 24px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #1e2939;
    color: #fb6d3a;
  }
`;
