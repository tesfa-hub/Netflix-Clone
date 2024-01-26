import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Movies/requests'


const RowList = () => {
  return (
    <>
        <Row 
        title="NETFLIX ORIGIONALS"
        fetchUrl={requests.fetchNetflixOrigionals}
        />
        
    </>
  )
}

export default RowList