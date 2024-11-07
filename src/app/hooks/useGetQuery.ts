import { Product } from "@/lib/types";
import { useEffect, useState } from "react";

const useGetQuery = (search: string, category: string) => {
    const [products, setProducts] = useState<Product[]>([]);
    const fetchProducts = async () => {
        const res = await fetch(
            `https://api.escuelajs.co/api/v1/products/?title=${search}&categoryId=${category}`
        );
        const data = await res.json();
        if (data) {
            setProducts(data);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [search, category]);

    return { products }
}

export default useGetQuery