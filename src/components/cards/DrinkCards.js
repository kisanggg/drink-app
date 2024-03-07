import React from 'react'

 function DrinkCards(props) {
  return (
    <div className='card-wrapper'>
      <img alt='' src={props?.drinks?.strDrinkThumb}></img>
      <span className='cardTitle'>{props?.drinks?.strDrink}</span>
      <span className='drinkId'>{props?.drinks?.idDrink}</span>
    </div>
  )
}
export default DrinkCards;