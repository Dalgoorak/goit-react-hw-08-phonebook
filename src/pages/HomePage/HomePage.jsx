/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.box}>
      <div className={css.home}>Hello! This is your new phone book!</div>
      <div className={css.photoBox}>
        {/* <img
          className={css.photo}
          src="https://drasler.ru/wp-content/uploads/2019/05/Скачать-gif-на-телефон-бесплатно-2.gif"
          alt="photo"
        /> */}
      </div>
    </div>
  );
}
