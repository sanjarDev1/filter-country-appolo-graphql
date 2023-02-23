import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useMainContext } from '../../context/Main';
import { GET_COUNTRY } from '../../graphql/queryCountries';
import { GET_COUNTRY_ALL } from '../../graphql/queryAllCountries';

const SearchInput = () => {
  const [input, setInput] = useState('');
  const [state, setstate] = useState([]);
  const [, dispatch] = useMainContext();

  const [getCountry, { loading, data }] = useLazyQuery(GET_COUNTRY);
  const [getCountryAll, { loading: allLoading, data: allData }] =
    useLazyQuery(GET_COUNTRY_ALL);

  useEffect(() => {
    dispatch({
      type: 'setData',
      payload: { loading, data },
    });
  }, [data, loading]);

  useEffect(() => {
    if (!input) {
      dispatch({
        type: 'setData',
        payload: { loading: allLoading, data: allData },
      });
      setstate(allData);
    }
  }, [allLoading, allData]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      getCountry({ variables: { code: e.target[0].value?.toUpperCase() } });
    } else {
      dispatch({
        type: 'setData',
        payload: { loading: allLoading, data: state },
      });
    }
  };

  useEffect(() => {
    getCountryAll({ variables: { code: '' } });
  }, []);
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Search a country......'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={{ marginLeft: '10px' }}>Search</button>
      </form>
    </>
  );
};

export default SearchInput;
