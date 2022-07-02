import { Box, Container, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function FramerMotion() {
  return (
      <Box
        as={motion.div}
        animation={animation}
        padding="2"
        bgGradient="linear(to-l, #ffd600, #FF0080)"
        width="4"
        height="4"
        display="flex"
      />
  );
}
