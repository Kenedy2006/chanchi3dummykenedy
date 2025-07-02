import { useState, useEffect } from 'react';
import { getProducts } from '../services/dummyAPI';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const products = await getProducts();
        
        setFeaturedProducts(products.slice(0, 6));
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      
      <div className="jumbotron bg-light p-5 rounded mb-4">
        <h1 className="display-4">¡Bienvenido a nuestra Tienda!</h1>
        <p className="lead">Descubre los mejores productos con ofertas increíbles</p>
        <a className="btn btn-primary btn-lg" href="/list" role="button">
          Ver Catálogo
        </a>
      </div>

      
      
    </div>
  );
};

export default Home;
