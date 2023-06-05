import classNames from 'classnames';
import {ButtonHTMLAttributes, ReactNode} from 'react';

import cls from './index.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {children, type = 'button', className, disabled, ...otherProps} = props;

  const mods = {
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.button, mods, className)}
      disabled={disabled}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
