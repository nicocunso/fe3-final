import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from "../Components/utils/global.Context";




const Detail = () => {

  const {state} = useContextGlobal()

  const [doctor, setDoctor] = useState({})
  const { id } = useParams()
  console.log(id)
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  useEffect(() => {
      axios(url)
      .then(res => setDoctor(res.data))
  },[])
  

  return (
    <div className={state.theme}>
      <h1>dentista seleccionado</h1>
      <div className='card-grid'>
        <div className='card'>
          <img src="/images/doctor.jpg" alt='doctor'/>
          <h4>{doctor.name}</h4>
          <p>📧{doctor.email}</p>
          <p>📱{doctor.phone}</p>
          <p>🌐{doctor.website}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail