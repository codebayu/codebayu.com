import { Flex } from '@chakra-ui/react';

export const Maps = () => {
  return (
    <Flex
      as='section'
      minHeight='100%'
      bg='gray.300'
      color='black'
      spacing={2}
      px={{ base: '1rem', lg: '10rem' }}
      py='3rem'
      id='maps'
    >
      <iframe
        data-testid="maps"
        title='Map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.7467205729434!2d106.73917463096281!3d-6.267180698978173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a2334ab5e3%3A0x5ac7356a9520994!2sAmi%20kost!5e0!3m2!1sen!2sid!4v1683368437546!5m2!1sen!2sid'
        width='100%'
        height='300'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </Flex>
  );
};
