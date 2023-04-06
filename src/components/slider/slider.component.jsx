import { CategoriesContext } from '../../context/categories.context';
import './slider.styles.scss';
import { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderContainer () {
  const {categoriesMap} = useContext(CategoriesContext);
  const categoriesList = Object.keys(categoriesMap).slice(0, 5);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // sadece bir ürün göstermek
    slidesToScroll: 4, // sadece bir ürün kaydırmak
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className='slick-slider' {...settings}>
      {categoriesList.map((category) => (
        <div key={category}>
          <div className="category-items">
            {categoriesMap[category].slice(0,1).map((item) => ( 
              <div key={item.id} className='item-container'>                
                <img src={item.imageUrl} alt={item.name} className='image-styles' />
                <div className='name-price'> 
                  <span className='name'>{item.name}</span> 
                  <span className='price'>{item.price} $</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SliderContainer;
