import React from 'react';
import classes from './MyButton.module.css';
export const MyButton = ({
  children,
  ...props
}: {
  children: string;
  disabled?: boolean;
  style?:React.CSSProperties;
  onClick: (event: React.MouseEvent) => void;
}) => {

  return (
    <button {...props} className={classes.mnBtn}>
      {children}
    </button>
  );
};
