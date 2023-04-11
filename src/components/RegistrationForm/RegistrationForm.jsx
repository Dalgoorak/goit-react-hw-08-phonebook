import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/auth-operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };
  const handleInput = evt => {
    inputs[evt.target.name](evt.target.value.trim());
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const userInfo = {
      name,
      email,
      password,
    };
    dispatch(registration(userInfo));
  };

  return (
    <div className={css.block}>
      <h3 className={css.title}>Registration</h3>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            required
            onChange={handleInput}
            name="name"
            value={name}
          />
        </label>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            required
            onChange={handleInput}
            name="email"
            value={email}
            type="email"
          />
        </label>
        <label className={css.label}>
          Password
          <input
            minLength={7}
            className={css.input}
            required
            onChange={handleInput}
            name="password"
            value={password}
            type="password"
          />
        </label>
        <button type="submit" className={css.button}>
          Registration
        </button>
      </form>
    </div>
  );
}
