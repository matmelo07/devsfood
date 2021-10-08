import styled from 'styled-components';

export const Container = styled.div`
background-color:#136713;
height:100px;
border-radius:10px;
display:flex;
justify-content: space-between;
padding:10px;
align-items:center;

`;

export const Logo = styled.img`
width:auto;
height:70px;
`;

export const SearchInput = styled.input`
 height:50px;
 border:0;
 border-radius:25px;
 width:${props=>props.Active ? 300 : 0}px;
 background-color:white;
 outline:0;
 background-image:url('/assets/search.png') ;
 background-size:25px;
 background-repeat:no-repeat;
 background-position:10px center;
 cursor:pointer;
 padding-left:50px;
 transition: all ease 0.5s;
 font-size:15px;

 &:focus{
     cursor:text;
 }
 
`;


