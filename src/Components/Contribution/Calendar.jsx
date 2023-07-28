import {
  Box,
  Flex,
  HStack,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const Calendar = ({ data }) => {
  const [selectContribution, setSelectContribution] = useState({
    count: null,
    date: null,
  });
  const bg = useColorModeValue('gray.200', 'gray.700');

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month) => {
      const filterContributionDay = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
        )
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  const contributionColors = data?.colors ?? [];

  function calculateWidth(week) {
    return `${week * 20.25}px`;
  }
  return (
    <Flex flexDir="column" data-aos="fade-up" overflowX="auto" pt={5}>
      <List display="flex" justifyContent="start" gap="3px" fontSize="sm">
        {months?.map((month) => (
          <ListItem
            key={month.firstDay}
            visibility={month.totalWeeks < 2 ? 'hidden' : 'unset'}
            minWidth={calculateWidth(month.totalWeeks)}
          >
            {month.name}
          </ListItem>
        ))}
      </List>
      <Flex justifyContent="start" gap="3px" data-testid="contribution">
        {weeks?.map((week) => (
          <Box key={week.firstDay}>
            {week.contributionDays?.map((contribution) => {
              const backgroundColor =
                contribution.contributionCount > 0 && contribution.color;
              return (
                <Box
                  as="span"
                  key={contribution.date}
                  my="2px"
                  display="block"
                  h="18px"
                  w="18px"
                  borderRadius="sm"
                  bg={bg}
                  style={backgroundColor ? { backgroundColor } : undefined}
                  onMouseEnter={() =>
                    setSelectContribution({
                      count: contribution.contributionCount,
                      date: contribution.date,
                    })
                  }
                  onMouseLeave={() =>
                    setSelectContribution({ count: null, date: null })
                  }
                />
              );
            })}
          </Box>
        ))}
      </Flex>
      <HStack data-testid="less-more" justifyContent="space-between" mt={2}>
        <Flex flexWrap="wrap" alignItems="center" gap={2} fontSize="sm">
          <Text data-testid="less">Less</Text>
          <Flex gap={1}>
            {contributionColors?.map((item) => (
              <Box key={item} h={4} w={4} background={item} borderRadius="sm" />
            ))}
          </Flex>
          <Text data-testid="more">More</Text>
        </Flex>
        <Box opacity={selectContribution?.date ? '100' : '0'}>
          {selectContribution?.count} contributions on{' '}
          {selectContribution?.date}
        </Box>
      </HStack>
    </Flex>
  );
};
