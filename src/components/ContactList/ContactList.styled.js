// Utils
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 10px;
  }
`;
