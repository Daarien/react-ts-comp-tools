import React from 'react';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faSyncAlt,
  faClock,
  faUser,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

library.add(faClock, faArrowLeft, faSyncAlt, faUser, faQuestionCircle);

export default function FaIcon(props: Props) {
  return <FontAwesomeIcon {...props} />;
}
