import {
  Flex,
  HStack,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const Highlight = ({ label }) => {
  const highlight = useColorModeValue('#000', 'gold');
  return <strong style={{ color: highlight }}>{label}</strong>;
};

export const Info = () => {
  return (
    <Flex
      as="section"
      id="maps"
      minH="100vh"
      px={{ base: '1rem', lg: '10rem' }}
      py={{ base: '3rem', lg: '7rem' }}
      flexDir="column"
      gap={5}
    >
      <HStack data-aos="fade-down">
        <FaInfoCircle size={30} />
        <Heading fontSize={{ base: 20, lg: 30 }}>Information</Heading>
      </HStack>
      <Text data-aos="fade-down">How i built this website?</Text>
      <Text
        data-aos="fade-up"
        data-testid="info-description"
        fontSize={{ base: 12, lg: 18 }}
      >
        Welcome to my portfolio website, a digital masterpiece meticulously
        crafted using cutting-edge technologies and a passion for innovation.
        Built on the foundation of <Highlight label="React.js" /> and powered by
        the elegant <Highlight label="Chakra UI" />, this website delivers a
        seamless and visually captivating user experience. With a keen eye for
        detail, I have implemented thorough unit testing using{' '}
        <Highlight label="React Testing Library" /> and harnessed the power of{' '}
        <Highlight label="Vite" /> for lightning-fast development and testing
        workflows. Leveraging the collaborative capabilities of{' '}
        <Highlight label="Github" />, I ensure the codebase remains robust and
        scalable. For deployment, I have chosen <Highlight label="Vercel" />,
        guaranteeing efficient and reliable delivery to users worldwide.
        Embracing the power of feature management, I integrated{' '}
        <Highlight label="ConfigCat" /> to enable controlled rollouts and
        dynamic feature flagging. The result is a website that not only
        showcases my skills and creativity but also provides visitors with an
        immersive, intuitive, and bug-free journey. Welcome to a world where
        technology meets artistry.
      </Text>
    </Flex>
  );
};
