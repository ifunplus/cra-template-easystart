import React from 'react';
import ViewPage from '../../pages_sub/ViewPage';
import Result404 from '../../pages_sub/StatusPage/Result404';
import ResultEmpty from '../../pages_sub/StatusPage/ResultEmpty';
import Result500 from '../../pages_sub/StatusPage/Result500';
import Result403 from '../../pages_sub/StatusPage/Result403';
export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <ViewPage />
  },
  {
    path: '/view',
    exact: true,
    main: () => <ViewPage />
  },
  {
    path: '/notfound',
    main: () => <Result404 />
  },
  {
    path: '/serverwrong',
    main: () => <Result500 />
  },
  {
    path: '/forbidden',
    main: () => <Result403 />
  },
  {
    path: '/empty',
    main: () => <ResultEmpty />
  },
  {
    path: '',
    main: () => <Result404 />
  }
];
