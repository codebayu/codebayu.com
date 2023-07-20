import {
  HStack,
  useColorMode,
  Flex,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import DownloadCV from '../DownloadCV';
import { navbarStyles as sx } from './Navbar.styles';
import { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Navbar = ({ featureDarkModeValue, featureDownloadCvValue }) => {
  const [isScroll, setIsScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'gray.100');

  const navLink = [
    { label: 'Home', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Tech Stack', path: '/stacks' },
    { label: 'Info', path: '/info' },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <HStack
      data-testid="navbar"
      sx={sx.container}
      color={color}
      background={isScroll ? bg : 'transparent'}
    >
      <HStack sx={sx.wrap} spacing={{ base: '5', lg: '10' }}>
        {navLink.map((link) => (
          <Link to={link.path} key={link.path}>
            {link.label}
          </Link>
        ))}
      </HStack>

      <Flex alignItems="center">
        {featureDownloadCvValue && <DownloadCV />}
        {featureDarkModeValue && (
          <IconButton
            data-testid="toggle-mode"
            onClick={toggleColorMode}
            bg="transparent"
            aria-label="dark-mode"
          >
            {colorMode === 'light' ? (
              <MdOutlineDarkMode data-testid="light" />
            ) : (
              <MdOutlineLightMode data-testid="dark" />
            )}
          </IconButton>
        )}
      </Flex>
    </HStack>
  );
};
