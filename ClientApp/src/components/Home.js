import React, { Component } from 'react';
import Product from './Product';
import ProductList from './ProductList';

export class Home extends Component {
  static displayName = Home.name;


  render () {
    return (
      <ProductList></ProductList>
    );
  }
}
