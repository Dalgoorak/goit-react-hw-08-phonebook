import Footer from 'components/Footer/Footer';
import { Header } from 'components/Header';

import React from 'react';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={css.main}>{children}</main>
      <Footer />
    </>
  );
}
