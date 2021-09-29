import React, { FC } from "react";

import Display from "./Display"

import { useFetchUserSearchBannerInfo } from "Api/UserSearchBanner"
import LoadingFullPage from "Components/LoadingFullPage";
import Error from "Pages/Error";

export const UserSearchPage: FC = () => {

  const response = useFetchUserSearchBannerInfo()

  if(response.isLoading) return <LoadingFullPage />
  if(response.error) return <Error errorMessage={response.error.message} errorStatus={response.error.response?.status} />

  return (
    <Display title={response.data.title} description={response.data.description}/>
  )
}

export default UserSearchPage;
