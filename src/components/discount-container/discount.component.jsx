import React from 'react';
import { Link } from 'react-router-dom';
import './discount.styles.scss';


function DiscountContainer () {


  const discountItems = [
    {title: 'Nike', imageUrl: 'https://i.ibb.co/ggzZ5dW/nike-ayakkabi-indirimleri.png', targetUrl: '/shop/nike'},
    {title: 'Adidas', imageUrl: 'https://i.ibb.co/tJhjW9J/adidas-discount.png', targetUrl: '/shop/adidas'},
    {title: 'Puma', imageUrl: 'https://i.ibb.co/GPtLb8G/puma-discount.jpg', targetUrl: '/shop/puma'},
    {title: 'Womens', imageUrl: 'https://i.ibb.co/t3Tf42p/womens-discount.png', targetUrl: '/shop/womens'},
    {title: 'Mens', imageUrl: 'https://i.ibb.co/nBP8Rmv/men.jpg', targetUrl: '/shop/mens'},
  ];

  return (
    <div className='discount-container'>
      <div className='discount-wrapper'>
        {discountItems.map((item, index) => (
          <div key={index} className='discount-item'>
            <Link to={item.targetUrl}>
              <div className='discount-image'>
                <img src={item.imageUrl} alt={item.title} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiscountContainer;
