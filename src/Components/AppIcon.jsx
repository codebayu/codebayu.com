import { IconButton, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const AppIcon = (props) => {
  const navigate = useNavigate();
  const { link, icon, label } = props;
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
        onClick={() => {
          navigate(window.open(link));
        }}
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
