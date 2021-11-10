import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

export const FrontendLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
  );
