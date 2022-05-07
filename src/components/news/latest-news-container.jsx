import { useSelector } from 'react-redux'
import { News } from './news'

export const LatestNewsContainer = () => {
  const { news, isLoading, newsError } = useSelector((store) => store.newsReducer)

  if (isLoading) return <h2>Загрузка...</h2>

  return (
    <div>
      {newsError && <h3>{newsError}</h3>}
      {news.length > 0 && !newsError && <News news={news} title="Last News" />}
    </div>
  )
}
