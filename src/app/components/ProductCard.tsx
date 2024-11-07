import { Product } from '@/lib/types';
import Image from 'next/image';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-md w-[250px] h-[400px] bg-white">
      <h1 className="text-2xl mx-5 my-3 text-center">
        {product.id}. {product.title}
      </h1>
      <img
        src={product.images[1]}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto"
      />
      <div className="line-clamp-3 mx-3 text-center">{product.description}</div>
    </div>
  );
};

export default ProductCard;
