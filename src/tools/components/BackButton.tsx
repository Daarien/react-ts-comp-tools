import { FunctionComponent } from 'react';
import { IButtonProps } from '../interfaces';
import { Button } from '.';

interface IBackButtonProps extends IButtonProps {
  to?: string;
}

const BackButton: FunctionComponent<IBackButtonProps> = ({ to, children, ...other }) => {
  function handleClick() {
    if (to) {
      window.history.pushState(null, '', to);
    } else {
      window.history.back();
    }
  }
  return (
    <Button onClick={handleClick} {...other}>
      <span>Arrow left</span>
      {children}
    </Button>
  );
};

BackButton.defaultProps = {
  title: 'Назад',
};

export default BackButton;
