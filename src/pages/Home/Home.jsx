// Core
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

// Styles
import {
  TitleWrapper,
  Icon,
  LinksWrapper,
  Desc,
  HomeLink,
} from './Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <main>
      <TitleWrapper>
        <Icon />
        <h1>Phone Book App</h1>
      </TitleWrapper>

      {!isLoggedIn && (
        <LinksWrapper>
          <Desc>To use this application, please</Desc>
          <HomeLink to="/login">Log in</HomeLink>
          <Desc> or</Desc>
          <HomeLink to="/register">Sign Up</HomeLink>
        </LinksWrapper>
      )}
    </main>
  );
}
