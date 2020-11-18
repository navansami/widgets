import React from 'react';

const Link = ({ className, href, children }) => {
  const onClicked = (event) => {
    event.preventDefault();
    window.history.pushState({},'', href);
  }

  return <a onClick={onClicked} href={ href } className={ className } > { children } </a>
}

export default Link;