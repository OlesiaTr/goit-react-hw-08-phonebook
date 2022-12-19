// Utils
import styled from 'styled-components';

export const Btn = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;

  color: #2b3a55;

  padding: 8px 10px;

  border-radius: 8px;
  border: 1px solid #b2b2b2;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  :hover,
  :focus {
    color: #fb6d3a;
    border-color: #fb6d3a;
    transform: scale(1.1);
  }
`;
