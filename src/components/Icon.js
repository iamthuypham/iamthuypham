import React, { Component } from 'react';
import classNames from 'classnames';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGooglePlusSquare
} from '@fortawesome/fontawesome-free-brands';
import { faCaretSquareDown }
from '@fortawesome/fontawesome-free-regular';

const FaIcon = (props) => {
    const { name } = props;
    switch(name) {
        case 'faGithub':
            return <FontAwesomeIcon icon={faGithub} size='lg' style={{color: '#333'}} />
        case 'faLinkedin':
            return <FontAwesomeIcon icon={faLinkedin} size='lg' style={{color: '#0077b5'}} />
        case 'faGooglePlusSquare':
            return <FontAwesomeIcon icon={faGooglePlusSquare} size='lg' style={{color: '#dd4b39'}} />
        case 'faCaretSquareDown':
            return <FontAwesomeIcon icon={faCaretSquareDown} size='sm' style={{color: '#333'}} />
        default:
            return ''
    }
}

const Icon = (props) => {
  const { name, children, classes, className, onClick } = props;
  return (
    <div className={classNames(
        className,
      )}
      onClick={onClick}
    >
      {children}
        <FaIcon name={name}/>
    </div>
  );
}

export default Icon;