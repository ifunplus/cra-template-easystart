import React from 'react';
import UserPage from '../../pages_sub/UserPage';
import TestPage from '../../pages_sub/TestPage';
import IconPage from '../../pages/IconPage';
import BasecomponentPage from '../../pages/BasecomponentPage';
import MockdataPage from '../../pages/MockdataPage';
import Result404 from '../../pages_sub/StatusPage/Result404';
import ResultEmpty from '../../pages_sub/StatusPage/ResultEmpty';
import Result500 from '../../pages_sub/StatusPage/Result500';
import Result403 from '../../pages_sub/StatusPage/Result403';
export const routes = [
  {
    path: '/main',
    exact: true,
    main: () => <UserPage />
  },
  {
    path: '/main/icon',
    main: () => <IconPage />
  },
  {
    path: '/main/basecomponent',
    main: () => <BasecomponentPage />
  },
  {
    path: '/main/mockdata',
    main: () => <MockdataPage />
  },
  {
    path: '/main/user',
    main: () => <UserPage />
  },
    {
    path: '/main/test',
    main: () => <TestPage />
  },
  {
    path: '/main/notfound',
    main: () => <Result404 />
  },
  {
    path: '/main/serverwrong',
    main: () => <Result500 />
  },
  {
    path: '/main/forbidden',
    main: () => <Result403 />
  },
  {
    path: '/main/empty',
    main: () => <ResultEmpty />
  },
  {
    path: '',
    main: () => <Result404 />
  }
];
