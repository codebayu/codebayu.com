import { Link } from 'react-scroll';
import { Text, HStack } from '@chakra-ui/react';
import DownloadCV from '../DownloadCV';
import { navbarStyles as sx } from './Navbar.styles';
import { useState } from 'react';

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  const onLinkClicked = () => {
    const audio = new Audio('/audio/click.wav');
    audio.play();
  };
  return (
    <HStack data-testid='navbar' sx={sx.container} background={isScroll ? 'white' : 'transparent'}>
      <HStack sx={sx.wrap} spacing={{ base: '5', lg: '10' }}>
        <Link
          onClick={onLinkClicked}
          href='/'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Text sx={sx.link}>Home</Text>
        </Link>
        <Link
          onClick={onLinkClicked}
          to='experience'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href='/'
        >
          <Text sx={sx.link}>Experience</Text>
        </Link>
        <Link
          onClick={onLinkClicked}
          href='/'
          to='mystack'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Text sx={sx.link}>Tech Stack</Text>
        </Link>
        <Link
          onClick={onLinkClicked}
          href='/'
          to='projects'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Text sx={sx.link}>Projects</Text>
        </Link>
      </HStack>

      <DownloadCV />
    </HStack>
  );
};
