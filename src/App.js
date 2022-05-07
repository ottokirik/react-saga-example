import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/header'
import { HomePage } from './pages/home-page'
import { LatestNewsPage } from './pages/latest-news-page'
import { PopularNewsPage } from './pages/popular-news-page'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/latest-news" element={<LatestNewsPage />} />
        <Route path="/popular-news" element={<PopularNewsPage />} />
      </Routes>
    </div>
  )
}

export default App
