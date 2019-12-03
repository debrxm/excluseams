import React from 'react';
import './homepage.scss';
import Directory from '../../components/directory/directory';
const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <div className="brand">
          <h1>EXCLU-SEAMS</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repudiandae quisquam distinctio esse animi corrupti consequatur fuga
            voluptas iusto qui perferendis.
          </span>
        </div>
      </header>
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};

export default Homepage;
