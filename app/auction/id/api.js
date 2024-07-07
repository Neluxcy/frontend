"use server"
export async function getProduct(id) {
    const response = await fetch(`http://localhost:5000/api/product/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }
    return response.json();
}

export async function getUser(userId) {
    const response = await fetch(`http://localhost:5000/api/user/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch address');
    }
    return response.json().address;
}

export async function startAuction(auction){
    const response = await fetch(`http://localhost:5000/api/auction`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(auction)
    });
    if (!response.ok) {
        throw new Error('Failed to start auction');
    }
    return response.json();
}