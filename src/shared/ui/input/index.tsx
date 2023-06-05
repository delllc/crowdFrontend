import classNames from 'classnames';
import {InputHTMLAttributes} from 'react';

import cls from './index.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
  center?: boolean;
}

export const Input = (props: InputProps) => {
  const {className, disabled, isInvalid, center, type = 'text', ...otherProps} = props;

  const mods = {
    [cls.disabled]: disabled,
    [cls.invalid]: isInvalid,
    [cls.center]: center,
  };

  return (
    <input
      className={classNames(cls.input, mods, className)}
      disabled={disabled}
      type={type}
      {...otherProps}
    />
  );
};
