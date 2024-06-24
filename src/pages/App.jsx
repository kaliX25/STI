import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import WetLaySystems from './WetLaySystems';
import PostCure from './PostCure';
import LeakArrestors from './Leak Arrestors';
import Revowrap225 from './Revowrap225';
import Revowrap185 from './Revowrap185';
import Revowrap110 from './Revowrap110';
import Revowrap80 from './Revowrap80';
import Revomat from './Revomat';
import SpitzeHpClamp from './SpitzeHpClamp';
import Revostrap from './Revostrap';
import Fluid from './Fluid';
import Primer_2_in_1 from './Primer21';
import Primer_Zinc from './Primerzinc';

export default function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/home');
  }, []);
  return (
    <Routes>
      <Route path={'/home'} element={<HomePage />} />
      <Route path={'/about'} element={<AboutPage />} />
      <Route path={'/contact'} element={<ContactPage />} />
      <Route path={'/wet_lay_systems'} element={<WetLaySystems />} />
      <Route path={'/post_cure'} element={<PostCure />} />
      <Route path={'/leak_arrestors'} element={<LeakArrestors />} />
      <Route path={'/revowrap-225'} element={<Revowrap225 />} />
      <Route path={'/revowrap-185'} element={<Revowrap185 />} />
      <Route path={'/revowrap-110'} element={<Revowrap110 />} />
      <Route path={'/revowrap-80'} element={<Revowrap80 />} />
      <Route path={'/revomat'} element={<Revomat />} />
      <Route path={'/spitze-hp-clamp'} element={<SpitzeHpClamp />} />
      <Route path={'/revostrap'} element={<Revostrap />} />
      <Route path={'/fluid'} element={<Fluid />} />
      <Route path={'/primer_2_in_1'} element={<Primer_2_in_1 />} />
      <Route path={'/primer_zinc'} element={<Primer_Zinc />} />
    </Routes>
  );
}
