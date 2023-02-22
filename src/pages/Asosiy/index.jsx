import React, { useState } from 'react';

import SearchInput from '../../components/Search';
import FilterCountry from '../../components/FilterInput';
import AllCountry from '../../components/AllCountry';
const AllCountries = () => {
  return (
    <div className='all__country__wrapper'>
      <div className='country__top'>
        <div className='search'>
          <SearchInput />
        </div>
        <div className='filter'>
          <FilterCountry />
        </div>
      </div>
      <div className='country__bottom'>
        <AllCountry />
      </div>
    </div>
  );
};

export default AllCountries;
