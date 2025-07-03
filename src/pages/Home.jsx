import { useEffect } from 'react';
import { useProductStore } from '../store/useProductStore';

const Home = () => {
  const { products, loading, fetchProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  const featuredProducts = products.slice(0, 6);

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
