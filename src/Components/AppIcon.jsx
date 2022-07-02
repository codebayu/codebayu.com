import { IconButton, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const AppIcon = (props) => {
  const { link, icon, label } = props;
  return (
    <Link to={link}>
      <Tooltip hasArrow label={label} placement='top' bg="#ffd600" color="black">
        <IconButton
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
    </Link>
  );
};
