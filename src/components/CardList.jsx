import { useProductStore } from '../store/useProductStore';

const CardList = ({ data = [] }) => {
    const { favorites, toggleFavorite } = useProductStore();

    return (
        <div className="row">
            {data.map((product) => {
                const isFavorite = favorites.includes(product.id);

                return (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img 
                                src={product.thumbnail} 
                                className="card-img-top" 
                                alt={product.title} 
                                style={{ height: '200px', objectFit: 'cover' }} 
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text flex-grow-1">
                                    {product.description.length > 100 
                                        ? `${product.description.slice(0, 100)}...` 
                                        : product.description
                                    }
                                </p>
                                
                                <div className="d-flex justify-content-between">
                                    <span className="badge bg-secondary">{product.category}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardList;