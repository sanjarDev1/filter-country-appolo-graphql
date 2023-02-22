import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_COUNTRY } from '../../graphql/queryCountries';
import MediaCard from '../Card';
import { useMainContext } from '../../context/Main';

const AllCountries = () => {
  const [state, dispatch] = useMainContext();
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: state?.value.toUpperCase() },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(state?.value);
  return (
    <>
      {data?.countries?.map((item, index) => (
        <MediaCard key={index} item={{ ...item }} />
      ))}
    </>
  );
};

export default AllCountries;
