import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Movies/requests'


const RowList = () => {
  return (
    <>
        <Row title="Trending" fetchUrl={requests.fetchTrending}/>
        <Row title="NETFLIX ORIGIONALS" fetchUrl={requests.fetchNetflixOrigionals}/>
        <Row title="TopRatedMovies" fetchUrl={requests.fetchTopRatedMovies}/>
        <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        {/* <Row title="TvShow" fetchUrl={requests.fetchTvShow}/> */}
        
       
        
    </>
  )
}
export default RowList;

