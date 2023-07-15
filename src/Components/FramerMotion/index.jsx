import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { framerMotionStyes as sx } from "./FramerMotion.styles";

export default function FramerMotion() {
  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

  const animation = `${animationKeyframes} 2s ease-in-out infinite`;
  return (
    <Box
      sx={sx.container}
      animation={animation}
      as={motion.div}
      data-testid="framer-motion"
    />
  );
}
