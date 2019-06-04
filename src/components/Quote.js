import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = 'http://quotesondesign.com/wp-json/posts'

export default function GetInspired() {
  const [quote, getQuote] = useState('')

  useEffect(() => {
    axios.get(API_URL).then(resp => {
      console.log({ resp })
    })
  }, [])

  return (
    <section>
      <h1>{quote}</h1>
    </section>
  )
}
