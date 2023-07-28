import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import { GithubContribution } from '../Components/Contribution';
import {
  GITHUB_ACCOUNTS,
  GITHUB_API_BASE_URL,
  GITHUB_USER_QUERY,
} from '../Constant/github';
import axios from 'axios';

export const Home = () => {
  const [data, setData] = useState();

  async function getGithubData() {
    const response = await axios.post(
      GITHUB_API_BASE_URL,
      {
        query: GITHUB_USER_QUERY,
        variables: {
          username: GITHUB_ACCOUNTS.username,
        },
      },
      {
        headers: {
          Authorization: `bearer ${GITHUB_ACCOUNTS.token}`,
        },
      }
    );
    setData(
      response.data?.data.user.contributionsCollection.contributionCalendar
    );
  }

  useEffect(() => {
    getGithubData();
  }, []);

  return (
    <Box
      as="section"
      minH={{ base: '100%', lg: '100vh' }}
      px={{ base: '1rem', lg: '10rem' }}
      id="home"
      py={{ base: '3rem', lg: '5rem' }}
    >
      <Banner />
      <GithubContribution data={data} />
    </Box>
  );
};
