import React, { FunctionComponent } from 'react';
import Router from 'next/router';
import { IButtonProps } from 'interfaces';
import { Button, FaIcon } from '../components';

interface IBackButtonProps extends IButtonProps {
  to?: string;
}

const BackButton: FunctionComponent<IBackButtonProps> = ({ to, children, ...other }) => {
  function handleClick() {
    if (to) {
      Router.push(to);
    } else {
      Router.back();
    }
  }
  return (
    <Button onClick={handleClick} {...other}>
      <FaIcon icon="arrow-left" className="mr-2" />
      {children}
    </Button>
  );
};

BackButton.defaultProps = {
  title: 'Назад',
};

export default BackButton;
