// Styles
import { TitleWrapper, Icon, LinksWrapper, HomeLink } from './Home.styled';

export default function Home() {
  return (
    <>
      <TitleWrapper>
        <Icon />
        <h1>Phone Book App</h1>
      </TitleWrapper>
      <LinksWrapper>
        <p>To use this application, please</p>
        <HomeLink to="/login">Log in</HomeLink>
        <p> or</p>
        <HomeLink to="/register">Sign Up</HomeLink>
      </LinksWrapper>
    </>
  );
}
