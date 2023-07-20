import {
  HStack,
  useColorMode,
  Flex,
  useColorModeValue,
  IconButton,
  Box,
  Stack,
} from '@chakra-ui/react';
import DownloadCV from '../DownloadCV';
import { navbarStyles as sx } from './Navbar.styles';
import { useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const Navbar = ({ featureDarkModeValue, featureDownloadCvValue }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
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

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <>
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
        <Box
          cursor="pointer"
          onClick={() => setOpenDrawer(!openDrawer)}
          display={{ base: 'block', lg: 'none' }}
        >
          {openDrawer ? <IoMdClose /> : <GiHamburgerMenu />}
        </Box>
      </HStack>
      {openDrawer && (
        <Flex
          background={bg}
          position="sticky"
          shadow="md"
          p={4}
          roundedBottom="md"
          top={10}
          zIndex={20}
          display={{ base: 'flex', lg: 'none' }}
          mb={2}
        >
          <Stack w="full" textAlign="center">
            {navLink.map((link) => (
              <Link to={link.path} key={link.path}>
                {link.label}
              </Link>
            ))}
          </Stack>
        </Flex>
      )}
    </>
  );
};
