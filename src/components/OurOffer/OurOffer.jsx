import React from 'react'
import s from './OurOffer.module.sass'

export default function OurOffer() {
  return (
    <div className={s.offer}>
        <div className={s.offer_text}>
            <h1>Что мы предлагаем</h1>
            <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
        </div> 
        <div className={s.img_offer}></div>
    </div>
  )
}
