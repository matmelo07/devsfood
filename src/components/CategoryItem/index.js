import React from 'react';
import {Container,CategoryImage}from './styled';


export default({data,activeCategorie,setActiveCategorie })=>{
  
  const handleActiveClick=()=>{
     setActiveCategorie(data.id)
  }


  return(
    <Container  active={activeCategorie} id={data.id} onClick={handleActiveClick} data-tip={data.name} data-for="tip-top" >
       <CategoryImage  src={data.image} />
    </Container>
  );

}