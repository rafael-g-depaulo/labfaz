import React, { FC, useState, useEffect } from 'react'
import { strapi } from "Api"

import Loading from "Components/Loading"
import Display from "./Display"

export const Presentation: FC = () => {
  const[loading, setLoading] = useState(true)
  const[data, setData] = useState(
    {
      Title: "",
      SubTitle: "",
      Video: ""
    })
  const[error, setError] = useState()

  useEffect(() => {
    strapi
      .get(`/home-presentation-info`)
      .then(({ data }) => data)
      .then(({ Title, SubTitle, Video }) => {
        setData({ Title, SubTitle, Video })
        console.log(data)
        setLoading(false)
      })
      .catch((error) => setError(error.message))
  }, [data, loading])

  if (error) return <div>error: {error ?? ""} </div>
  if (loading) return <Loading />

  return <Display Video={data.Video} Title={data.Title} SubTitle={data.SubTitle}/>
}

export default Presentation
