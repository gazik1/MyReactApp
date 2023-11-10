import classes from './MyInput.module.css';
import { forwardRef } from 'react';

type IProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const MyInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  return <input ref={ref} className={classes.myInput} {...props} />;
});
