import React from 'react';
import { IProduct } from '../../types';

const Product:React.FC<IProduct> = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <section>
        <p>{props.description}</p>
        <img src={props.image}/>
      </section>
    </article>
  )
}

export default Product
