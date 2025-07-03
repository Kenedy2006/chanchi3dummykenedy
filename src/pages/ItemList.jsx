import { useEffect } from 'react';
import { useProductStore } from '../store/useProductStore';
import CardList from '../components/CardList';

const ItemList = () => {
  const { products, loading, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Catálogo </h1>

      
      {!loading && <CardList data={products} />}
    </div>
  );
};

export default ItemList;
