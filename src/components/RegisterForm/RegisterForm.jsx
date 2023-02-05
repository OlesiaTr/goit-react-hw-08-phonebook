// Core
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

// Styles
import {
  Main,
  Form,
  Label,
  Input,
  User,
  Email,
  Password,
  Btn,
  RedirectWrapper,
  RedirectLink,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          Username
          <Input type="text" name="name" />
          <User />
        </Label>
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
        <Btn type="submit">Register</Btn>
        <RedirectWrapper>
          or <RedirectLink to="/login">Log in</RedirectLink>
        </RedirectWrapper>
      </Form>
    </Main>
  );
};
