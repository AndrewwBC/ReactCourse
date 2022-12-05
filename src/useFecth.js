import React from 'react';

const useFecth = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError('erro');
    } finally {
      setLoading(false);
      setData(json);
      return { response, json };
    }
  }, []);

  return { data, error, loading, request };
};

export default useFecth;
