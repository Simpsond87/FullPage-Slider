/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import Slider from 'components/Slider';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Slider" meta={[ { name: 'description', content: 'Full Page Slider' }]}/>

        <Slider/>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
