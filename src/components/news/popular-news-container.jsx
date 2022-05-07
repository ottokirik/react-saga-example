import { useSelector } from 'react-redux'
import { News } from './news'

export const PopularNewsContainer = () => {
  const { popularNews, isLoading, popularNewsError } = useSelector((store) => store.newsReducer)

  if (isLoading) return <h2>Загрузка...</h2>

  return (
    <div>
      {popularNewsError && <h3>{popularNewsError}</h3>}
      {popularNews.length > 0 && !popularNewsError && <News news={popularNews} title="Popular News" />}
    </div>
  )
}
