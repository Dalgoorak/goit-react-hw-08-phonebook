import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import css from './Authorization.module.css';

export const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const input = {
    email: setEmail,
    password: setPassword,
  };
  const onInput = evt => {
    input[evt.target.name](evt.target.value.trim());
  };
  const onSubmit = evt => {
    evt.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div className={css.block}>
      <h3 className={css.title}>Authorization</h3>
      <form onSubmit={onSubmit} className={css.form}>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            required
            onChange={onInput}
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
            onChange={onInput}
            name="password"
            value={password}
            type="password"
          />
        </label>
        <button type="submit" className={css.button}>
          Login
        </button>
      </form>
    </div>
  );
};
