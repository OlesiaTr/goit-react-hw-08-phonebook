// Core
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { toast } from 'react-hot-toast';

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
    )
      .unwrap()
      .then(() => toast.success('You logged in successfully'))
      .catch(() =>
        toast.error('Something went wrong. Check your login and password')
      );
    form.reset();
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input
            type="email"
            name="email"
            pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"
            title="A valid email address consists of three parts: an individual part, the at-sign @, and a domain name part."
            required
          />
          <Email />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" minLength={7} required />
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
