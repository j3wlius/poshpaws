import React from 'react';
import Hero from './Hero';
import Category from './Category';
import Offers from './Offers';
import Product from './Product';
import Service from './Service';
import Cta from './Cta';
import Brand from './Brand';

export default function Main() {
  return (
    <article>
      <Hero />
      <Category/>
      <Offers />
      <Product />
      <Service />
      <Cta />
      <Brand />
    </article>
  );
}
