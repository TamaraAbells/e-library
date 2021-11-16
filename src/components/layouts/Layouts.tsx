import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import Sidebar from './Sidebar';

export const FrontendLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
export const SearchLayout = () => (
  <>
    <Header />
    <Sidebar>
      <Outlet />
    </Sidebar>
    <Footer />
  </>
);
