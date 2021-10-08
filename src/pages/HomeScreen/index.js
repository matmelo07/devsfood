import React , {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {Container,
        CategoryArea,
        CategoryList,
        ProductsArea,
        ProductsList,
        ProductsPaginationArea,
        ProductsPaginationItem
     
        
        
        } from './styled';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ReactTooltip from 'react-tooltip';




import api from '../../api';

import ProductsItem from '../../components/ProductsItem';


let searchTimer = null;


export default () => {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  

  
  

  const [activeCategorie, setActiveCategorie] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeSearch, setActiveSearch] = useState('');
  
  
    
  const getProducts = async ()=>{
     const prods = await api.getProducts(activeCategorie, activePage, activeSearch);
     if(prods.error == ''){
       setProducts(prods.result.data);
       setTotalPages(prods.result.pages);
       setActivePage(prods.result.page);
       
       
     }

     
  }
  useEffect(()=>{
    clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
          setActiveSearch(headerSearch)
      }, 2000);
  },[headerSearch])
 
  

  useEffect(()=>{
     const getCategories = async () =>{
        const cat = await api.getCategories();
        if(cat.error == ''){
          setCategories(cat.result)
        }
        ReactTooltip.rebuild();
     };
     getCategories();
    },[]);
         
    
  useEffect(()=>{
    setProducts([]);
    getProducts();
       
  },[activeCategorie, activePage,activeSearch])
  
  
    
    

    return (
        <Container>
          <Header search={headerSearch} onSearch={setHeaderSearch} />
           
           {categories.length > 0 &&
            
            <CategoryArea>
               Selecione uma categoria
               <CategoryList>
                 <CategoryItem 
                 data={{id:0,
                        title:'Todas as categorias',
                        image:'/assets/food-and-restaurant.png'
                      }}
                     activeCategorie = {activeCategorie}
                     setActiveCategorie = {setActiveCategorie}
                                  
                  />   
                {categories.map((item, index)=>(
                  <CategoryItem key={index}
                                data={item}
                                activeCategorie={activeCategorie}
                                setActiveCategorie = {setActiveCategorie}
                               
                                
                                 />
                ))}
             </CategoryList>
            </CategoryArea>
           
           }
           {products.length > 0 &&
           <ProductsArea>
             <ProductsList>
               {products.map((item, index)=>(
                 <ProductsItem
                  key={index}
                  data={item}
                 />
               ))}
             </ProductsList>
           </ProductsArea>
           }
           {totalPages > 0 &&
            
            <ProductsPaginationArea>
               {Array(totalPages).fill(0).map((item, index)=>(

                  <ProductsPaginationItem 
                      key={index}
                      active={activePage}
                      current={index + 1}
                      onClick={()=>setActivePage(index+1)}
                  
                  >
                    {index+1}
                  </ProductsPaginationItem>
               ))}
            </ProductsPaginationArea>
           
           }
           
             
           
        </Container>
    );
}