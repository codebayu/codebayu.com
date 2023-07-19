import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Highlight = ({ label }) => {
  const highlight = useColorModeValue('#000', 'gold');
  return <strong style={{ color: highlight }}>{label}</strong>;
};

export const Info = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.800', 'gray.200');

  return (
    <Flex
      as="section"
      bg={bg}
      color={color}
      id="maps"
      minH="100%"
      px={{ base: '1rem', lg: '10rem' }}
      py={{ base: '2rem', lg: '7rem' }}
      flexDir="column"
      gap={5}
    >
      <Heading fontSize={{ base: 20, lg: 45 }} fontWeight="semibold">
        How i built this website?
      </Heading>
      <Text data-testid="info-description" fontSize={{ base: 12, lg: 18 }}>
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
