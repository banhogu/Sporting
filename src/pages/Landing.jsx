import Introduce from '../components/introduce';
import CardComponent from './pages/CardComponent';
import Hero from './pages/Hero';

function Landing() {
  return (
    <Hero/>
    <Introduce />
  );
}

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Footer = styled.footer`
  margin-top: 20px;
  font-size: 0.9em;
  color: #888;
`;

export default Landing;
