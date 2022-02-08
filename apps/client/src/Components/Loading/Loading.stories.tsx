import Loading from './'
import LoadingTest from './LoadingTest'

export default {
  title: 'Components/Loading',

  parameters: {
    component: Loading,
  },
}

export const loading = () => (
  <Loading />
)

export const loadingTest = () => (
  <LoadingTest />
)
