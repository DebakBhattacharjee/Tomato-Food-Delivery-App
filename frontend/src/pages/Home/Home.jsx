import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import ResForm from '../../components/ResForm/ResForm'

const Home = () => {
const [category,setCategory] = useState("All")


  return (
    <div>
      <Header/>
      <ExploreMenu category = {category} setCategory = {setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
      <ResForm></ResForm>
    </div>
  )
}

export default Home
