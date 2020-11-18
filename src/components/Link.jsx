import React from 'react';

const Link = ({ className, href, children }) => {
  const onClicked = (event) => {
    if(event.metaKey || event.ctrlKey ) {
      return;
    }
    event.preventDefault();
    window.history.pushState({},'', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return <a onClick={onClicked} href={ href } className={ className } > { children } </a>
}

export default Link;