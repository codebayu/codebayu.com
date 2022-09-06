import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import AppSlider from './AppSlider'

export default function AppProject({project}) {
  return (
    <Flex flexDir={{base:"column", lg:"row"}} alignItems={{base: "center", lg:"start"}} justifyContent="space-between" width="100%" bg="white" rounded="xl" padding="1rem" shadow="dark-lg">
      <Flex rounded="xl" mb={{base:8, lg:0}}>
        <AppSlider image={project.preview_image}/>
      </Flex>
      <Flex textAlign="start" flexDir="column">
            <Heading size="md" color="gray.800" fontWeight="bold" mb={8}>
              {project.title}
            </Heading>
            <Box color="gray.700" mb={4}>
              <Heading size="sm" fontWeight="bold">
                Description
              </Heading>
              <Text  >
                {project.description}
              </Text>
            </Box>
            <Box color="gray.700" mb={4}>
              <Heading size="sm" fontWeight="bold">
                Technology Used
              </Heading>
              <Text  >
                {project.technology_used}
              </Text>
            </Box>
            <Box color="gray.700" mb={4}>
              <Heading size="sm" fontWeight="bold">
                Repository
              </Heading>
              <Text  >
              {project.repository}
              </Text>
            </Box>
            
          </Flex>
        </Flex>
  )
}
