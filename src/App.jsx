import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
const Main = lazy(() => import('./home/mainPage'));
const About = lazy(() => import('./home/about'));
const Contact = lazy(() => import('./home/contactpage'));
const Service =lazy(()=> import('./home/Services'))
const PrivacyPolicy = lazy(() => import('./home/privacyPolicy'));
const TermsAndCondition = lazy(() => import('./home/termsAndCondition'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Main />} />
              {/* About */}
             <Route path="/about" element={<About />} />
              {/* Others */}
              <Route path="/contact" element={<Contact />} />
                 <Route path="/services" element={<Service />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/termsAndCondition" element={<TermsAndCondition />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;