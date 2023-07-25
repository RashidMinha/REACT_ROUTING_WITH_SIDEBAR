import React from 'react';
import { IntlProvider } from 'react-intl';
import en from './Languages/en'; /*en languages */
import HomePage from './Pages/Home';
import {Routes,Route, useLocation } from 'react-router-dom';
import Profile from './Pages/Profile';
import Links from './Components/Routes';
import DataContext from './Helpers/Api';

const App = () => {   
  const location = useLocation()
  const locale = 'en';
  return (
    <DataContext.Provider>
    <IntlProvider locale={locale} messages={en}>
           <Routes location={location}>
             <Route exact path={Links.Home.home} element={<HomePage />} />
             <Route path={Links.Profile.profile} element={<Profile />} />
             <Route path="/sidebar/*" element={<HomePage />} />
           </Routes>
    </IntlProvider>
    </DataContext.Provider>
  );
};

export default App;
