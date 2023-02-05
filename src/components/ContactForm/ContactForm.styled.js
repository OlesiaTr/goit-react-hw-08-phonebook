// Utils
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineNumber } from 'react-icons/ai';

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  font-weight: 700;
  letter-spacing: 0.06em;

  > svg {
    position: absolute;
    top: 35%;
    transform: translate(50%, 50%);

    width: 20px;
    height: 20px;

    color: #2b3a55;

    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & + & {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  padding-left: 40px;
  margin-top: 5px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus-within {
    outline: none;
    border-color: #fb6d3a;
  }
`;

export const User = styled(FaUserCircle)`
  Input:hover + &,
  Input:focus + & {
    color: #fb6d3a;
  }
`;

export const Number = styled(AiOutlineNumber)`
  Input:hover + &,
  Input:focus + & {
    color: #fb6d3a;
  }
`;
