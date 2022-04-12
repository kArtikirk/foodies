import React from 'react'
import Carrousal from '../../Components/Home/Carrousal'
import Discounts from '../../Components/Home/Discounts'
import FoodCardDescription from '../../Components/Home/FoodCardDescription'
import FoodCards from '../../Components/Home/FoodCards'

function Home() {
  return (
    <div>
        <h4>Home</h4>
        <Carrousal/>
        <Discounts/>
        <FoodCards/>
        <FoodCardDescription/>
    </div>
  )
}

export default Home