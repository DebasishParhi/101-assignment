import React from 'react'
import {Routes,Route} from "react-router-dom"
import { FavouriteFood } from './FavouriteFood'
import { FoodList } from './FoodList'
import { SingleItem } from './SingleItem'

export const Routess = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<FoodList/>}></Route>
        <Route path="/:code" element={<SingleItem/>}></Route>
        <Route path="/fav" element={<FavouriteFood/>}></Route>
    </Routes>
    </div>
  )
}
