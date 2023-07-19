import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { popupStyles as sx } from './Popup.styles';

export const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState({
    color: '',
    message: '',
  });

  const handleMessage = () => {
    const entryDate = new Date();
    const currentHour = entryDate.getHours();

    if (currentHour < 12) {
      setMessage({
        color: '#959ff4',
        message: 'Good morning!',
      });
    } else if (currentHour < 18) {
      setMessage({
        color: 'orange',
        message: 'Good afternoon!',
      });
    } else {
      setMessage({
        color: '#053752',
        message: 'Good evening!',
      });
    }
  };

  useEffect(() => {
    setIsOpen(true);
    handleMessage();
    const onClose = setTimeout(() => {
      setIsOpen(false);
    }, 3000);
    return () => {
      clearTimeout(onClose);
    };
  }, []);

  return (
    <Flex
      data-aos="zoom-in-down"
      display={isOpen ? 'flex' : 'none'}
      background={message.color}
      data-testid="popup"
      sx={sx.container}
    >
      <Avatar
        data-testid="avatar"
        src="/bayu-no-bg.webp"
        name="avatar"
        fontWeight="semibold"
      />
      <Box data-testid="message">
        <Text>{message.message}</Text>
        <Text>Welcome to my website.</Text>
      </Box>
    </Flex>
  );
};
