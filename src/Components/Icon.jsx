import { IconButton, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga';

export const Icon = (props) => {
  const navigate = useNavigate();
  const { link, icon, label } = props;
  const onClickIcon = () => {
    ReactGA.event({
      category: 'My Contact',
      action: `Redirect to ${link}`,
      label: label,
      value: link
    })
    navigate(window.open(link));
  }
  return (
    <Tooltip
      hasArrow
      label={label}
      mb={1}
      placement="top"
      bg="#9087b7"
      color="white"
      transition="0.3s"
    >
      <IconButton
        data-testid="icon"
        onClick={onClickIcon}
        colorScheme="on-accent"
        color="#9087b7"
        border="1px"
        rounded="50%"
        icon={icon}
        _hover={{
          bg: "#9087b7",
          color: "white",
          transform: "translateY(-3px)",
          transition: '0.3s',
          border: "none"
        }}
      />
    </Tooltip>
  );
};
