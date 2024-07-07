"use server"
export async function getProduct(id) {
    const response = await fetch(`http://localhost:5000/api/product/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }
    return response.json();
}