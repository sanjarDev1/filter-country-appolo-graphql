import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useMainContext } from '../../context/Main';
import { GET_CONTINENTS } from '../../graphql/queryContinents';

const FilterCountry = () => {
  const [, dispatch] = useMainContext();
  const [getContinents, { loading, data }] = useLazyQuery(GET_CONTINENTS);

  useEffect(() => {
    dispatch({
      type: 'setData',
      payload: { loading, data: data?.continents[0] },
    });
  }, [data, loading]);

  const selectHandler = (e) => {
    const regionName = e.target.value;
    getContinents({ variables: { code: regionName?.toUpperCase() } });
  };
  return (
    <select onChange={selectHandler}>
      <option className='option'>Filter by Region</option>
      <option className='option' value='AF'>
        Africa
      </option>
      <option className='option' value='NA'>
        North America
      </option>
      <option className='option' value='SA'>
        South America
      </option>
      <option className='option' value='AS'>
        Asia
      </option>
      <option className='option' value='EU'>
        Europe
      </option>
      <option className='option' value='OC'>
        Oceania
      </option>
      <option className='option' value='AN'>
        Antarctica
      </option>
    </select>
  );
};

export default FilterCountry;
