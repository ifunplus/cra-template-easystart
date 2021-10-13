import { useState, useEffect, useRef } from 'react';

export function useFetchMock(apiMock) {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    setLoading(true);
    function handleResponse(data) {
      setResponse(data);
      setLoading(false);
    }
    apiMock()
      .then((res) => {
        if (!mountedRef.current) return null;
        handleResponse(res.data);
      })
      .catch((error) => {
        console.log('error', error);
        setHasError(true);
        setLoading(false);
      });

    return () => {
      mountedRef.current = false;
      console.log('cleanup');
    };
  }, [apiMock]);

  return [response, loading, hasError];
}

export function useFetch1(url, opts) {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    setLoading(true);
    function handleResponse(data) {
      setResponse(data);
      setLoading(false);
    }
    fetch(url, opts)
      .then((res) => {
        if (!mountedRef.current) return null;
        handleResponse(res.data);
      })
      .catch((error) => {
        console.log('error', error);
        setHasError(true);
        setLoading(false);
      });

    return () => {
      mountedRef.current = false;
      console.log('cleanup');
    };
  }, [url]);

  return [response, loading, hasError];
}

export function useFetch(apiMock, params) {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    setLoading(true);
    function handleResponse() {
      setLoading(false);
    }
    apiMock(params)
      .then((res) => {
        if (!mountedRef.current) return null;
        handleResponse();
      })
      .catch((error) => {
        console.log('error', error);
        setHasError(true);
        setLoading(false);
      });

    return () => {
      mountedRef.current = false;
      console.log('cleanup');
    };
  }, [apiMock]);

  return [loading, hasError];
}
