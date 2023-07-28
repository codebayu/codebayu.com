import { BsGithub } from 'react-icons/bs';

import React from 'react';
import { HStack, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { GITHUB_ACCOUNTS } from '../../Constant/github';
import { Overview } from './Overview';
import { Calendar } from './Calendar';

export const GithubContribution = ({ data }) => {
  const totalContributions = data?.totalContributions || 0;
  const weeks = data?.weeks || [];

  const totalThisWeekContribution =
    weeks[weeks.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ) || 0;
  const totalContributionList = weeks
    .map((week) =>
      week.contributionDays.map(
        (contributionDay) => contributionDay.contributionCount
      )
    )
    .flat();

  const bestContribution = Math.max(...totalContributionList) || 0;
  const averageContribution =
    parseFloat(
      (totalContributions / totalContributionList.length).toFixed(1)
    ) || 0;
  return (
    <Stack as="section" mt="5rem" spacing={3}>
      <HStack data-aos="fade-up" data-testid="header">
        <BsGithub size={30} />
        <Heading fontSize={{ base: 20, lg: 30 }}>Github Contributions</Heading>
      </HStack>
      <HStack justifyContent="space-between" data-aos="fade-up">
        <Text>My contributions from last year on github.</Text>
        <Link
          to={`https://github.com/${GITHUB_ACCOUNTS.username}`}
          target="_blank"
        >
          <Text color="gray.500">@{GITHUB_ACCOUNTS.username}</Text>
        </Link>
      </HStack>
      <SimpleGrid columns={[1, null, 4]} spacing="20px">
        <Overview label="total" value={totalContributions} />
        <Overview label="this week" value={totalThisWeekContribution} />
        <Overview label="best day" value={bestContribution} />
        <Overview label="average" value={averageContribution} unit="/ day" />
      </SimpleGrid>
      <Calendar data={data} />
    </Stack>
  );
};
