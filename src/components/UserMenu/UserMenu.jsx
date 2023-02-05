// Core
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

// Styles
import { Container, Desc, Btn, Icon } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Desc>Welcome, {user.name}</Desc>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Sign out <Icon />
      </Btn>
    </Container>
  );
};
