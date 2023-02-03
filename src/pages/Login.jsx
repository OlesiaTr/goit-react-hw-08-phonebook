// Core
import { Helmet } from 'react-helmet';

// Components
import { LoginForm } from 'components/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
