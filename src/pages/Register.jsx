// Core
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

// Components
import { RegisterForm } from 'components/RegisterForm';
import { Loader } from 'components/Loader';

export default function Register() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </>
  );
}
