import React from 'react';

import HeaderLink from '../../atoms/HeaderLink/HeaderLink';

import './HeaderLinkList.scss'

const HeaderLinkList = ({ className, list }) => {
  let renderLink = list && Array.isArray(list) ? list.map((item, index) => 
    <HeaderLink key={index} {...item} />
  ) : null;

  return (
    <div className={`header-link-list ${className}`}>
      {renderLink}
    </div>
  )
}

export default HeaderLinkList
