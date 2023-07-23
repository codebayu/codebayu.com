import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaBook,
  FaDiscord,
} from 'react-icons/fa';
import { Icon } from '../Icon';
import { bannerStyles as sx } from './Banner.styles';

const Banner = () => {
  const Contact = [
    {
      label: 'Github',
      link: 'https://github.com/Bayusetiawan45',
      icon: <FaGithub />,
    },
    {
      label: 'Instagram',
      link: 'https://www.instagram.com/bayustr__',
      icon: <FaInstagram />,
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/bayu-setiawan99/',
      icon: <FaLinkedinIn />,
    },
    {
      label: 'Email',
      link: 'mailto:bayusetiawanipb@gmail.com',
      icon: <FaEnvelope />,
    },
    {
      label: 'Whatsapp',
      link: 'https://wa.me/+6282385696549',
      icon: <FaWhatsapp />,
    },
    {
      label: 'Documentation',
      link: 'https://doc.codebayu.com/',
      icon: <FaBook />,
    },
    {
      label: 'Discord',
      link: 'https://discord.gg/76UFeGdXy6',
      icon: <FaDiscord />,
    },
  ];
  const bg = useColorModeValue('#eeeeee', 'gray.800');
  const bgBuble = useColorModeValue('gray.400', 'gray.700');
  const color = useColorModeValue('gray.800', 'gray.200');
  const bgGradient = useColorModeValue(
    'linear-gradient(120deg, gray.400 30%, gray.300 100%)',
    'linear-gradient(120deg, gray.700 30%, gray.800 100%)'
  );
  const filter = useColorModeValue(
    'grayscale(50%) drop-shadow(4px 4px 6px #fcfcfc)',
    'grayscale(50%) drop-shadow(4px 4px 6px #000)'
  );

  return (
    <Flex sx={sx.container} bg={bg} color={color} data-testid="banner">
      <Flex sx={sx.wrap}>
        <Heading sx={sx.greet} data-aos="fade-right">
          Hi! I am,
        </Heading>
        <Flex sx={sx.wrapBio} data-aos="zoom-in">
          <Heading sx={sx.name}>Bayu Setiawan</Heading>
          <Text sx={sx.job}>Frontend Developer</Text>
          <Text sx={sx.summary}>
            As a frontend developer, I specialize in building elegant and
            high-performing web applications using TypeScript and popular
            frameworks like Next JS and Nuxt JS. With my technical skills, I
            create solutions that are easy to maintain and scale, always
            striving to learn and implement new technologies. If you're looking
            for a developer who can bring your vision to life with style and
            precision, look no further!
          </Text>
        </Flex>
        <HStack sx={sx.wrapIcon} data-aos="fade-up">
          {Contact.map((item, idx) => (
            <Icon
              key={idx}
              icon={item.icon}
              link={item.link}
              label={item.label}
            />
          ))}
        </HStack>
      </Flex>
      <Box sx={sx.wrapImage} bgGradient={bgGradient}>
        <Box>
          <Image
            src="./bayu-no-bg.webp"
            width="100%"
            height="100%"
            alt="my image"
            filter={filter}
            loading="eager"
          />
        </Box>
        <Box sx={sx.buble} bg={bgBuble} />
      </Box>
    </Flex>
  );
};

export default Banner;
