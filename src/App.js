import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Destination } from './pages/Destination'
import { Crew } from './pages/Crew'
import { Technology } from './pages/Technology'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations/:id" element={<Destination />} />
      <Route path="/crew/:id" element={<Crew />} />
      <Route path="/technology/:id" element={<Technology />} />
    </Routes>
  )
}
