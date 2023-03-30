import './Home.css'
import {useState, useEffect} from 'react'
import Filter from '../components/Filter'
import loader from './loader.gif'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


function Home() {
  /*const allCategories = ['all', ...new Set(items.map((item) => {return item.category}))] */
  const { data, IsPending, error, filterCategory, allCategories, filterCountry} = useFetch('https://restcountries.com/v3.1/all');

  
  

  
  

  return (
    <div>
        <Filter allCategories={data && allCategories} filterCategory={filterCategory} filterCountry={filterCountry}></Filter>
        
        {IsPending ? <img src={loader} className='loader' /> :
        <div className="container home-container">
          <div className="cards-container">
          {data && data.map((country, i) => {
            const {name, flags, population, region, capital} = country
            return (
            <Link to={`/about/${name.common}`} className="card" key={i}>
            <img src={`${flags.png}`} className="card-img"/>
                <div className="card-body">
                    <h5 className="card-title">{name.common}</h5>
                    <p><b>Population: </b>  {population}</p>
                    <p><b>Region: </b>  {region}</p>
                    <p><b>Capital: </b>  {capital ? capital : "No capital"}</p>
                </div>
            </Link>)
          })}
          </div>
        </div>}
    </div>
  )
}

export default Home