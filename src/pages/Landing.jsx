import styled from 'styled-components';

function Landing() {
  return (
    <Container>
      <Header>
        <h1>Welcome to the Landing Page</h1>
        <p>This is a simple landing page component.</p>
      </Header>
      <Main>
        <Section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor purus et elit feugiat, eget tincidunt felis lacinia.
          </p>
        </Section>
        <Section>
          <h2>Our Services</h2>
          <p>
            Duis at nisl luctus, ultrices ante a, volutpat ligula. Curabitur
            pretium orci nec nisi consequat, at scelerisque odio consectetur.
          </p>
        </Section>
        <Section>
          <h2>Contact Us</h2>
          <p>
            Phasellus ac libero tincidunt, pharetra purus quis, hendrerit eros.
            Donec in justo sit amet nulla dictum consectetur.
          </p>
        </Section>
      </Main>
      <Footer>
        <p>&copy; 2024 Spoting. All rights reserved.</p>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  width: 100vw;
  height: 100vh; 
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Main = styled.main`
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

const Section = styled.section`
`;

const Footer = styled.footer`
  margin-top: 20px;
  font-size: 0.9em;
  color: #888;
`;

export default Landing;