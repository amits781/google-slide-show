import React from 'react';

class LoadingScreen extends React.Component {

  render() {
    const myElement =
      <div className='loaderContent'>
        <img alt='logo' src={"./loading.gif"} />
      </div>
      ;
    return myElement;
  }
}

export default LoadingScreen;
