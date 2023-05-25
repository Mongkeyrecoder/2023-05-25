import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'



const Navbar = (props) => {
  
  const search=(event)=>{
   if(event.key=='Enter'){
    let keyword=event.target.value;

    navigate(`/?q=${keyword}`);
   }
  }
  const navigate=useNavigate();
  const goToLogin=()=>{
    navigate('/login');
  }
  const menuList=['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']
  return (
    <div>
      <div>
        <div className='login-button' onClick={()=>{
          goToLogin()
        }}>
          <FontAwesomeIcon icon={faUser} />
          <div className='login-button-login' onClick={(event)=>{
            if(props.authenticate==true){
              props.setAuthenticate(false)
            }
          }}>{props.authenticate==true?'로그아웃':'로그인'}</div>
        </div>
       
      </div>
      <div className='nav-section' onClick={()=>{
        navigate('/')
      }}>
        <img src="data:image/png;base64,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" width={100}/>
      </div>
      <div className='menu-area'>
        
          <ul className='menu-list'>
           {
            menuList.map((menu)=>{
              return <li key={menu}>{menu}</li>
            })
           }
          </ul>
        
        <div className='search-input-box'>
          <FontAwesomeIcon icon={faSearch} className='search'/>
          <input type="text" placeholder='제품검색' className='input' onKeyDown={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
