// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

// Components
import { Navigation } from 'components/Navigation';

// Styles
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </Header>
  );
};
