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
  justify-content: space-between;

  padding: 8px;
  width: 100%;

  background-color: rgb(240 240 240);

  border-radius: 4px;
  border: 1px solid rgb(178, 178, 178);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  & + & {
    margin-top: 2px;
  }
`;
