import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_COUNTRY } from '../../graphql/queryCountries';
import MediaCard from '../Card';
import { useMainContext } from '../../context/Main';

const AllCountries = () => {
  const [state, dispatch] = useMainContext();
  if (state?.loading) return <p>Loading...</p>;
  return (
    <>
      {state?.data?.countries?.map((item, index) => (
        <MediaCard key={index} item={{ ...item }} />
      ))}
    </>
  );
};

export default AllCountries;
