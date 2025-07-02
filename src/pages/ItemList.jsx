import { useState, useEffect } from 'react';
import { getProducts } from '../services/dummyAPI';
import CardList from '../components/CardList';

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Catálogo </h1>
      
      
      {loading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}

      
      {!loading && <CardList data={products} />}
      
      
      {!loading && products.length === 0 && (
        <div className="text-center mt-4">
          <p className="lead">No se encontraron productos</p>
        </div>
      )}
    </div>
  );
};

export default ItemList;
