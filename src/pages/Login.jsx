// Core
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

// Components
import { LoginForm } from 'components/LoginForm';
import { Loader } from 'components/Loader';

export default function Login() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
}
