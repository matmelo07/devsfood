import React from 'react';

import {Container,
    ProductPhotoAera,
    ProductInfoArea,
    ProductButtonArea,
    ProductPhoto,
    ProductName,
    ProductIngredients,
    ProductPrice,
    ProductButton

} from './styled';


export default ({data})=>{
    return(
        <Container>
          <ProductPhotoAera>
             <ProductPhoto src={data.image} />
          </ProductPhotoAera>
          <ProductInfoArea>
             <ProductName>{data.name}</ProductName>
             <ProductPrice>R$ 
                 {data.price}</ProductPrice>
             <ProductIngredients>{data.ingredients}</ProductIngredients>
          </ProductInfoArea>
          <ProductButtonArea>
           <ProductButton src="/assets/next.png" />
          </ProductButtonArea>
        </Container>
    )
}