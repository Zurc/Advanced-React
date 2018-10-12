import React, { Component } from 'react'
import  Header from './Header';
import  Meta from './Meta';

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {/* this will render anything that we pass */}
        {this.props.children}
      </div>
    )
  }
}

export default Page;
