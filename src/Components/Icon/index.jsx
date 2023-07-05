import { IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';
import { iconStyles as sx } from './Icon.styles';

export const Icon = (props) => {
  const navigate = useNavigate();
  const { link, icon, label } = props;
  const bg = useColorModeValue('#9087b7', 'purple.300');
  const color = useColorModeValue('#9087b7', 'purple.300');

  const onClickIcon = () => {
    ReactGA.event({
      category: 'My Contact',
      action: `Redirect to ${link}`,
      label: label,
      value: link,
    });
    navigate(window.open(link));
  };
  return (
    <Tooltip
      hasArrow
      label={label}
      sx={sx.container}
      placement='top'
      bg={bg}
    >
      <IconButton
        data-testid='icon'
        onClick={onClickIcon}
        sx={sx.icon}
        color={color}
        icon={icon}
        colorScheme='on-accent'
        aria-label='Button Label'
        _hover={{
          bg,
          color: 'white',
          transform: 'translateY(-3px)',
          transition: '0.3s',
          border: 'none',
        }}
      />
    </Tooltip>
  );
};
