
import { Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import AuthCallBack from './pages/AuthCallBack'
import UserProfilePage from './pages/UserProfilePage'
import ProtectedRoute from './auth/ProtectedRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/auth-callback' element={<AuthCallBack/>} />
        <Route path="/" element={<Layout showHero><Home/></Layout>} />

        <Route path="*" element={<Navigate to="/" />} />
        <Route element={<ProtectedRoute/>}>
        <Route path='/user-profile' element={<Layout><UserProfilePage/></Layout>}/>
        </Route>
      

    </Routes>
  )
}

export default AppRoutes