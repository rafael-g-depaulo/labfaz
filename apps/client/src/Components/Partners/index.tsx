import React, {FC} from 'react'

import { useHomePartners } from 'Api/HomePartners'
import Loading from 'Components/Loading'
import Display from './Display'

export const Partners: FC = () => {
  const {data, error, isLoading} = useHomePartners()

  if (isLoading) return <Loading />

  if (error) return <div>error: { error?.message ?? "" }</div>

  return <Display data={data!}/>
}

export default Partners
