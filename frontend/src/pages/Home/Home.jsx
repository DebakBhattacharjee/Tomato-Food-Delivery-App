import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import ResForm from '../../components/ResForm/ResForm'
import Testimonials from '../../components/Testimonials/Testimonials'
import Benefits from '../../components/Benefits/Benefits'

const Home = () => {
const [category,setCategory] = useState("All")


  return (
    <div>
      <Header/>
      <ExploreMenu category = {category} setCategory = {setCategory}/>
      <FoodDisplay category={category}/>
      <div className='home_resform'><ResForm category = {category} setCategory= {setCategory}/></div>
      <div className="benefits-main">
        <Benefits/>
      </div>
      <div className='app-download-main'>
      <AppDownload/>
      </div>
      <div className="">
        <Testimonials/>
      </div>
      
    </div>
  )
}

export default Home
