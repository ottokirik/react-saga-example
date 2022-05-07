import classNames from './news.module.css'

export const News = ({ news = [], title = '' }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul className={classNames.news}>
        {news.map(({ title, author, url }) => (
          <li key={`${title}-${author}`} className={classNames['news__item']}>
            <h4>{title}</h4>
            <div>
              Author: {author} <a href={url}>read</a>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
