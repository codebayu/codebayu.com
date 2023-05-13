import { Link } from 'react-scroll';
import { Text, HStack } from '@chakra-ui/react';
import DownloadCV from '../DownloadCV';
import { navbarStyles as sx } from './Navbar.styles';

export const Navbar = () => {
  return (
    <HStack data-testid='navbar' sx={sx.container}>
      <HStack sx={sx.wrap} spacing={{ base: '5', lg: '10' }}>
        <Link to='home' spy={true} smooth={true} offset={-50} duration={500}>
          <Text sx={sx.link}>Home</Text>
        </Link>
        <Link
          to='experience'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Text sx={sx.link}>Experience</Text>
        </Link>
        <Link to='mystack' spy={true} smooth={true} offset={-50} duration={500}>
          <Text sx={sx.link}>Tech Stack</Text>
        </Link>
      </HStack>

      <DownloadCV />
    </HStack>
  );
};
