// Core
import { Helmet } from 'react-helmet';

// Components
import { RegisterForm } from 'components/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
