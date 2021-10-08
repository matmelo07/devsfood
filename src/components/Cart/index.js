import React from 'react';
import {
    CartArea,
    CartBody,
    CartHeader,
    CartIcon,
    CartText

} from './styled';


export default()=>{
    return (
      <CartArea>
          <CartHeader>
             <CartIcon src='/assets/cart.png'/>
             <CartText>Meu Carrinho (x)</CartText>
          </CartHeader>
          <CartBody>

          </CartBody>
      </CartArea>
    );
}