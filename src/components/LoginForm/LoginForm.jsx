// Core
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

// Styles
import {
  Main,
  Form,
  Label,
  Input,
  Email,
  Password,
  Btn,
  RedirectWrapper,
  RedirectLink,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
          <Email />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
          <Password />
        </Label>
        <Btn type="submit">Log In</Btn>
        <RedirectWrapper>
          or <RedirectLink to="/register">Sign Up</RedirectLink>
        </RedirectWrapper>
      </Form>
    </Main>
  );
};
