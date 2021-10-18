import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PrivateRoute from './routes/PrivateRoute';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ViewPage from './pages/ViewPage';
import IconPage from './pages/IconPage';
import MockdataPage from './pages/MockdataPage';
import RegisterPage from './pages/RegisterPage';
import Result403 from './pages_sub/StatusPage/Result403';
import Result404 from './pages_sub/StatusPage/Result404';
import Result500 from './pages_sub/StatusPage/Result500';
import ResultEmpty from './pages_sub/StatusPage/ResultEmpty';
import { initLanguage } from './locales';
import AppContext from './context/AppContext';
import './App.less';

initLanguage();

function App(props) {
  const lang = Cookies.get('lang');
  const locale = lang === 'zh' ? zhCN : enUS;
  const appConfig = useMemo(() => props.appProps, []);

  useEffect(() => {
    document.title = lang === 'zh-cn' ? appConfig.docuTitle : appConfig.docuTitleEn;
    return;
  }, [lang]);

  return (
    <ConfigProvider locale={locale}>
      <DndProvider backend={HTML5Backend}>
        <AppContext.Provider value={appConfig}>
          <Router>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/403" component={Result403} />
              <Route path="/404" component={Result404} />
              <Route path="/500" component={Result500} />
              <Route path="/empty" component={ResultEmpty} />
              <PrivateRoute path="/main" component={MainPage} />
              <Route path="/view" component={ViewPage} />
              <Route path="/icon" component={IconPage} />
              <Route path="/mockdata" component={MockdataPage} />
              <Route component={Result404} />
            </Switch>
          </Router>
        </AppContext.Provider>
      </DndProvider>
    </ConfigProvider>
  );
}

App.propTypes = {
  appProps: PropTypes.object,
  lang: PropTypes.string
};

App.defaultProps = {
  appProps: {},
  lang: ''
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
