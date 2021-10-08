import React from 'react';
import {LinkArea,LinkIcon} from './styled';
import {useHistory,useLocation} from 'react-router-dom';






export default ({link,icon,title})=>{
  const history = useHistory();
  const Location = useLocation();

  let isActive = Location.pathname == link;

  const handleLinkClick=(e)=>{
    e.preventDefault()
    history.push(link)
  }
  

    return(
    <LinkArea data-tip={title} data-for="tip-right" active={isActive}  href={link} onClick={handleLinkClick} >
      <LinkIcon src={icon}/>
    </LinkArea>
    );
}