
import { Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import AuthCallBack from './pages/AuthCallBack'
import UserProfilePage from './pages/UserProfilePage'
import ProtectedRoute from './auth/ProtectedRoute'
import ManageRestaurantPage from './pages/ManageRestaurantPage'
import SearchPage from './pages/SearchPage'
import RestaurantDetailsPages from './pages/RestaurantDetailsPages'
import OrderStatusPage from './pages/OrderStatusPage'
import Contact from './pages/Contact'
import About from './pages/About'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/auth-callback' element={<AuthCallBack/>} />
      <Route path='/search/:city' element={<Layout showHero={false}><SearchPage/></Layout>} />
      <Route path='/contact' element={<Layout showHero={false}><Contact/></Layout>} />
      <Route path='/about' element={<Layout showHero={false}><About/></Layout>} />
      <Route path='/detail/:restaurantId' element={<Layout showHero={false}><RestaurantDetailsPages/></Layout>} />
        <Route path="/" element={<Layout showHero><Home/></Layout>} />

        <Route path="*" element={<Navigate to="/" />} />
        <Route element={<ProtectedRoute/>}>
        <Route path='/order-status' element={<Layout><OrderStatusPage/></Layout>}/>
        <Route path='/user-profile' element={<Layout><UserProfilePage/></Layout>}/>
        <Route path='/manage-restaurant' element={<Layout><ManageRestaurantPage/></Layout>}/>
        </Route>
      

    </Routes>
  )
}

export default AppRoutes