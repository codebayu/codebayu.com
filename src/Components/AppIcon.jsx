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
      bg="#ffd600"
      color="black"
    >
      <IconButton
        onClick={() => {
          navigate(window.open(link));
        }}
        colorScheme="on-accent"
        color="#ffd600"
        border="1px"
        rounded="50%"
        icon={icon}
        _hover={{
          bg: "#ffd600",
          color: "black",
          transform: "translateY(-3px)",
        }}
      />
    </Tooltip>
  );
};
