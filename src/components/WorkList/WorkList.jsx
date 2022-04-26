import React from 'react'
import Button from '../UI/Button'
import s from './WorkLIst.module.sass'

export default function WorkList() {
    let Card = [
        {
            id: 1,
            msg: "Годовое ТО",
            fon: "#22356F" 
        },
        {
            id: 2,
            msg: "Выравнивание колес",
            fon: "#0052C1" 
        },
        {
            id: 3,
            msg: "Настройка переключателей",
            fon: "#76B58B" 
        }
    ];
    let children = "Подробнее";
  return (
    <div className={s.cards}>
    {Card.map((t) =>
        <div key={t.id} style={{backgroundColor: t.fon}}>
           <p>{t.msg}</p>
           <Button children={children} style={{padding: "10px 20px", borderRadius: "20px", width: "150px"}}/>
        </div>)
    }
    </div>
  )
}
