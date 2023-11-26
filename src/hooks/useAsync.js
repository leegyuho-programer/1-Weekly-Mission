import { useState } from 'react';

function useAsync(fetchFunction) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = async (param) => {
    setLoading(true);
    try {
      const response = await fetchFunction(param);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return [isLoading, error, wrappedFunction];
}

export default useAsync;
