import { IconButton, Tooltip } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';
import { iconStyles as sx } from './Icon.styles';

export const Icon = (props) => {
  const navigate = useNavigate();
  const { link, icon, label } = props;
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
      bg='#9087b7'
    >
      <IconButton
        data-testid='icon'
        onClick={onClickIcon}
        sx={sx.icon}
        icon={icon}
        colorScheme='on-accent'
        aria-label="Button Label"
      />
    </Tooltip>
  );
};
