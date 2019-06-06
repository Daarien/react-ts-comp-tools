import React from 'react';
import classnames from 'classnames';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

interface Props {
  page: string;
}

interface State {
  class: string;
}

export default class Link extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter = () => {
    this.setState({ class: STATUS.HOVERED });
  };

  _onMouseLeave = () => {
    this.setState({ class: STATUS.NORMAL });
  };

  render() {
    return (
      <a
        className={classnames(this.state.class, {
          ['active']: this.state.class === STATUS.HOVERED,
        })}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}
