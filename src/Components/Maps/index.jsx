import { Flex } from '@chakra-ui/react';
import { mapsStyles as sx } from './Maps.styles';

export const Maps = () => {
  return (
    <Flex as='section' sx={sx.container} id='maps'>
      <iframe
        data-testid="maps"
        title='Map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.403373269095!2d106.79317587346752!3d-6.210410160829265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6b7be190bc3%3A0x80f0b0cd90b60b7!2sMenara%20Kompas!5e0!3m2!1sen!2sid!4v1685102147789!5m2!1sen!2sid~'
        width='100%'
        height='300'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </Flex>
  );
};
