import Introduce from '../components/introduce';
import Hero from '../components/Hero';
import CardComponent from '../components/CardComponent';
import ReviewSlider from '../components/comonent6';
import styled from "styled-components";

function Landing() {
  return (
<>
    <Hero/>
    <CardComponent/>
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
