import { Box, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaBook,
} from 'react-icons/fa';
import { Icon } from '../Icon';
import { bannerStyles as sx} from './Banner.styles';

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
  ];
  return (
    <Flex sx={sx.container} data-aos='zoom-in' data-testid="banner">
      <Flex sx={sx.wrap}>
        <Heading sx={sx.greet}>Hi! I am,</Heading>
        <Flex sx={sx.wrapBio}>
          <Heading sx={sx.name}>Bayu Setiawan</Heading>
          <Text sx={sx.job}>Frontend Developer</Text>
          <Text sx={sx.summary}>
            As a front-end developer, I specialize in building elegant and
            high-performing web applications using TypeScript and popular
            frameworks like Next JS and Nuxt JS. With my
            technical skills, I create solutions that are easy to maintain and
            scale, always striving to learn and implement new technologies. If
            you're looking for a developer who can bring your vision to life
            with style and precision, look no further!
          </Text>
        </Flex>
        <HStack sx={sx.wrapIcon} data-aos='fade-up'>
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
      <Box sx={sx.wrapImage}>
        <Image
          src='./bayu-no-bg.webp'
          width='100%'
          alt='my image'
          filter='grayscale(50%) drop-shadow(4px 4px 6px #fcfcfc)'
          loading='lazy'
        />
        <Box sx={sx.buble} />
      </Box>
    </Flex>
  );
};

export default Banner;
