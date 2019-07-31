import React from 'react';
import T from 'prop-types';
import s from './Header.module.css';

const Header = ({
  value,
  onClick,
  onChangeText,
  inputRef,
}) => (
    <div className={s.container}>
      <input placeholder={'+new ToDo'}
        value={value}
        ref={inputRef}
        onChange={evt => onChangeText(evt.target.value)}
      />
      <button onClick={onClick}>+ToDo</button>
    </div>
  );
Header.propTypes = {
  value: T.string,
  onClick: T.func,
  onChangeText: T.func,
};

export default Header;
