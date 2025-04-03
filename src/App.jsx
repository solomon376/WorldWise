import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Pricing from './Pages/pricing';
import Products from './Pages/products';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';
import AppLayout from './Pages/AppLayout';
import Citylist from './Componenets/CityList';
import CountryList from './Componenets/CountryList';
import Form from './Componenets/Form';
import City from './Componenets/City';
const JSON_SERVER = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {  // Fixed typo here from 'fetchCitites' to 'fetchCities'
      try {
        setIsLoading(true);
        const resp = await fetch(`${JSON_SERVER}/cities`); // Fixed the fetch URL format
        const data = await resp.json();
        setCities(data);
      } catch {
        alert("Error loading data from server");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login />} />

          <Route path="app" element={<AppLayout />}>
            <Route index element={<Citylist cities={cities} isLoading={isLoading} />} />
            <Route path="cities" element={<Citylist cities={cities} isLoading={isLoading} />} />
            <Route path="cities/:id" element={<City cities={cities}/>} />
            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
            <Route path="Form" element={<Form />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="form" element={<p>map form</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
