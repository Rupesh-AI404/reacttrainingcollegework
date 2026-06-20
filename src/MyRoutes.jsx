import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout.jsx'
import First from './First.jsx'
import Second from './Second.jsx'
import Homepage from './pages/Homepage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import BlogsPage from './pages/BlogsPage.jsx'
import LetConstVar from './pages/LetConstVar.jsx'
import RevisionLayout from './components/layouts/RevisionLayout.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const MyRoutes = () => {
  return (
    <BrowserRouter> 
        <Routes>
          <Route element = {<Layout />} >
            {/* Define your routes here using <Route> components */}
            <Route index element={<Homepage />} />
             {/* Example: <Route path="/second" element={<Second />} /> */} 
             <Route path="/second" element={<Second />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/services" element={<ServicePage />} />
             <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blogs" element={<BlogsPage />} />

             <Route path="/revision" element={<RevisionLayout />} >
                    <Route path="topic1" element={<LetConstVar />} />
                    <Route index element={<First />} />
             </Route>

             <Route path = "/home" element={<Homepage />} />


            
             <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes