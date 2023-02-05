// Utils
import styled from 'styled-components';
import { HiOutlineTrash } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;

  margin-bottom: 5px;
`;

export const Number = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgb(136 136 136);
`;

export const Icon = styled(HiOutlineTrash)`
  display: inline-flex;
  width: 16px;
  height: 16px;
`;

export const Phone = styled(BsTelephoneFill)`
  display: inline-flex;
  width: 10px;
  height: 10px;

  margin-right: 5px;
`;
