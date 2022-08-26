import React from 'react'
import {Routes,Route} from "react-router-dom"
import { MenuList } from './MenuList'
import { Item } from './Item'

export const Routess = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<MenuList/>}></Route>
        <Route path="/:Id" element={<Item/>}></Route>
    </Routes>
    </div>
  )
}
