import React, { Component } from 'react';
import Productbep from './productbep';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class listbepgas extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
            <ProductConsumer className="aaahahhh">
                {(value) => {
                  return value.databepgas.map(product => {
                    return <Productbep key={product.id } product={product}/>;
                  }) 
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
