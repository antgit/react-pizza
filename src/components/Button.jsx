import React from 'react';
import ClassNames from 'classnames';

function Button({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={ClassNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}

export default Button;
