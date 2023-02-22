import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_COUNTRY } from '../../graphql/queryCountries';
import MediaCard from '../Card';

const AllCountries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: 'UZ' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.countries?.map((item) => (
        <MediaCard item={{ ...item }} />
      ))}
    </>
  );
};

export default AllCountries;
