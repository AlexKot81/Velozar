import React from 'react';
import s from './MainMenu.module.sass';
import logo from './logo.png'
import Button from '../UI/Button';

export default function MainMenu() {
  return (
    <div className={s.menu_box}>
        <img src={logo} alt=""/>
        <div>
            <a href='#'>О нас</a>
            <a href='#'>Услуги</a>
            <a href='#'>Аренда</a>
        </div>
        <Button style={{borderRadius:"20px", padding: "10px 30px"}}/>
    </div>
  )
}
