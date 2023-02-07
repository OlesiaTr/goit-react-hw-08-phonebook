// Core
import { toast } from 'react-hot-toast';
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
    )
      .unwrap()
      .then(() => toast.success('Registration was successful'))
      .catch(() =>
        toast.error('Registration failed. Perhaps such user already exists')
      );

    form.reset();
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <User />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
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
        <Btn type="submit">Register</Btn>

        <RedirectWrapper>
          or <RedirectLink to="/login">Log in</RedirectLink>
        </RedirectWrapper>
      </Form>
    </Main>
  );
};
