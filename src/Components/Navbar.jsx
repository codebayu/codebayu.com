import { Link } from 'react-scroll';
import { Text, HStack } from '@chakra-ui/react';
import DownloadCV from './DownloadCV';

export const Navbar = () => {
  return (
    <HStack position="relative" justifyContent="space-between" display={{ base: 'none', lg: 'flex' }}>
      <HStack
        fontWeight="bold"
        fontSize={{ base: 12, lg: 16 }}
        color="gray.800"
        p={5}
        spacing={{ base: '5', lg: '10' }}
      >
        <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
          <Text _hover={{ color: '#3f4479' }} cursor="pointer">
            Home
          </Text>
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Text _hover={{ color: '#3f4479' }} cursor="pointer">
            Experience
          </Text>
        </Link>
        <Link to="mystack" spy={true} smooth={true} offset={-50} duration={500}>
          <Text _hover={{ color: '#3f4479' }} cursor="pointer">
            Tech Stack
          </Text>
        </Link>
      </HStack>

      <DownloadCV />
    </HStack>
  );
};
