export const fetchLatestNews = async (searchString = '') => {
  const data = await fetch(`http://hn.algolia.com/api/v1/search?query=${searchString}`).then((request) =>
    request.json()
  )
  return data
}

export const fetchPopularNews = async () => {
  const data = await fetch(`http://hn.algolia.com/api/v1/search?query=`).then((request) => request.json())
  return data
}
