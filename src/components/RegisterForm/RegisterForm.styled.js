// Utils
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdEmail, MdPassword } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';

export const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 320px;

  margin-top: 50px;
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  font-weight: 700;
  letter-spacing: 0.06em;

  > svg {
    position: absolute;
    top: 38%;
    transform: translate(50%, 50%);

    width: 20px;
    height: 20px;

    color: #2b3a55;

    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  padding-left: 42px;
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

export const User = styled(FaUserEdit)`
  Input:hover + &,
  Input:focus + & {
    color: #fb6d3a;
  }
`;

export const Email = styled(MdEmail)`
  Input:hover + &,
  Input:focus + & {
    color: #fb6d3a;
  }
`;

export const Password = styled(MdPassword)`
  Input:hover + &,
  Input:focus + & {
    color: #fb6d3a;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  padding: 10px 55px 10px 56px;
  margin: 0 auto;

  letter-spacing: 0.06em;

  color: #e5e5e5;
  background-color: #2b3a55;

  border-color: rgba(0, 0, 0, 0);
  border-radius: 4px;

  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #1e2939;
    box-shadow: inset 0 4px 4px rgb(0 0 0 / 15%);
  }
`;

export const RedirectWrapper = styled.p`
  text-align: center;
  font-weight: 500;

  margin-top: 20px;
`;

export const RedirectLink = styled(Link)`
  text-decoration: underline;
  color: #2b3a55;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fb6d3a;
  }
`;
