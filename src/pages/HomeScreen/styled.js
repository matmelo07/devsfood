import styled from 'styled-components';

export const Container = styled.div`
  
  width:100%;
  padding:15px;
  
  
  
`;

export const Titulo = styled.h1``;

export const CategoryArea = styled.div`
  color:white;
 

`;

export const CategoryList = styled.div`
 
 display:flex;
 align-items:space-between;


`;

export const ProductsArea = styled.div`
margin-top:20px;
margin-bottom:20px;

`;

export const ProductsList = styled.div`
 display:grid;
 grid-template-columns:repeat(3, 1fr);
 grid-gap:15px;
 

`;

export const ProductsPaginationArea = styled.div`
display:flex;
flex-wrap:wrap;

`;

export const ProductsPaginationItem = styled.div`
background-color:${props=>props.active == props.current ? "#ccc" : "white"};
padding:5px 10px;
border-radius:5px;
box-shadow: 0px 3px 6px rgba(0, 0 , 0, 0.16);
margin:10px;
cursor:pointer;

`;