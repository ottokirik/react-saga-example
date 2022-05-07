import { useEffect } from 'react'
import { LatestNewsContainer } from '../components/news/latest-news-container'
import { useActions } from '../redux/use-actions'

export const LatestNewsPage = () => {
  const { getLatestNewsFetch } = useActions()

  useEffect(() => {
    getLatestNewsFetch()
  }, [getLatestNewsFetch])

  return <LatestNewsContainer />
}
