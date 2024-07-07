export default async function handler(req, res) {
  try {
    const response = await fetch("http://localhost:5000/api/products");
    if (!response.ok) {
      console.error("Failed to fetch product count:", response.statusText);
      throw new Error("Failed to fetch product count");
    }
    const products = await response.json();
    const productCount = products.length;

    res.status(200).json({ count: productCount });
  } catch (error) {
    console.error("Error in productCount API:", error);
    res.status(500).json({ error: 'Failed to fetch product count' });
  }
}
