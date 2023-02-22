import React from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_COUNTRY } from './graphql/queryCountries/queryCountries';
const App = () => {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: 'UZ' },
  });
  console.log(data);
  return <div>Hello World</div>;
};

export default App;
