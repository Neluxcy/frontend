"use client";
// import Carousel from '@/components/Carousel';
import { useEffect, useState } from 'react';
import { getCategories, getBrands, getTrendingProducts } from './api';

export default function Home() {
  const [categories, setCategories] = useState([
    { name: 'Smartphone and Tabs', image: '/iphone.jpg' },
    { name: 'Audio Devices', image: '/audio devices.jpg' },
    { name: 'Laptops', image: '/laptops.jpg' },
    { name: 'Wearable Devices', image: '/wearable devices.jpg' } // Corrected path
  ]);

  const [brands, setBrands] = useState([
    { name: 'Apple', image: '/apple.jpg' },
    { name: 'Samsung', image: '/samsung.webp' },
    { name: 'Sony', image: '/sony.jpg' }
  ]);

  const [trendingProducts, setTrendingProducts] = useState([
    { name: 'Product 1', image: '/iphone15.webp' },
    { name: 'Product 2', image: '/samsungs24.webp' },
    { name: 'Product 3', image: '/sony1vi.webp' }
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        setCategories(await getCategories());
        setBrands(await getBrands());
        setTrendingProducts(await getTrendingProducts());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // fetchData();
  }, []);
    

  const renderSection = (title, items, itemClass, scroll=false, imageClass="rounded") => (
    <section className="my-5">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className={`flex gap-6 ${scroll ? 'overflow-x-auto' : 'flex-wrap'}`}>	
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <div className={`${itemClass} w-52`}>
              <img className={`w-full h-48 object-cover ${imageClass}`} src={item.image} alt={item.name} />
              <h4 className="mt-2 text-lg font-semibold">{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="container mx-auto p-4">
      {/* Uncomment to include About Us section
      <section id="about-us" className="my-5">
        <h2>About Us</h2>
        <p>We are a diverse e-commerce platform offering a wide range of products including toys, electronics, fashion, and more.</p>
      </section>
      */}

      <section id="portfolio-carousel" className="my-5">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Portfolio</h2>
          {/* <Carousel images={['/images/portfolio1.webp', '/images/portfolio2.jpg', '/images/portfolio1.webp']} /> */}
      </section>

      {renderSection('Explore Categories', categories, 'category-item', true, 'rounded-full')}
      {renderSection('Brands', brands, 'brand-item')}
      {renderSection('Trending Products', trendingProducts, 'product-item')}
    </div>
  );
}
