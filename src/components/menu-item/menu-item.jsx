import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';
const MenuItem = ({ id, title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="background-image" />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        {id === 1 ? (
          <span className="subtitle">SHOP NOW</span>
        ) : id === 2 ? (
          <span className="subtitle">VIEW NOW</span>
        ) : (
          <span className="subtitle">SIGN UP NOW</span>
        )}
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
