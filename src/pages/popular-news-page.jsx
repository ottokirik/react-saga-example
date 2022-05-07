import { useEffect } from 'react'
import { PopularNewsContainer } from '../components/news/popular-news-container'
import { useActions } from '../redux/use-actions'

export const PopularNewsPage = () => {
  const { getPopularNewsFetch } = useActions()

  useEffect(() => {
    getPopularNewsFetch()
  }, [getPopularNewsFetch])

  return <PopularNewsContainer />
}
