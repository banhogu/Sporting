import Introduce from '../components/introduce';
import CardComponent from './pages/CardComponent';
import Hero from './pages/Hero';
import ReviewSlider from '../components/comonent6';

function Landing() {
  return (
<>
    <Hero/>
    <ReviewSlider />
    <Introduce />
</>  
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
