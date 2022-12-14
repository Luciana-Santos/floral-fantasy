import { ButtonStyled } from '../UI/Button.styled';
import { HeroStyled } from './Hero.styled';

const Hero = () => {
  return (
    <HeroStyled>
      <h2>
        Grow your health,
        <br /> Grow a garden
      </h2>

      <ButtonStyled
        background={({ theme }) => theme.colors.dkTurquoise}
        as="a"
        href="#main"
      >
        Shop
      </ButtonStyled>
    </HeroStyled>
  );
};
export default Hero;
