import React, { useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { Context} from '../Context'
function Image({ className, photo }) {
  const [ishovered, setIsHovered] = useState(false);
  const { toggleFavorite ,addToCart , cartItems , removeFromCard } = useContext( Context);

  function heartIcon() {
    if(photo.isFavorite) {
      return (<i className="ri-heart-fill favorite" onClick={() => toggleFavorite(photo.id)}></i>);
    }
    else if (ishovered) {
      return (
        <i  className={`ri-heart-line favorite`} onClick={() => toggleFavorite(photo.id) }></i>
      )
    }
  }
  const CartIcon = () => {
    const AlreadInCart = cartItems.some(cart => cart.id === photo.id)
     if(AlreadInCart) {
       return (
        <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCard(photo.id) }></i>
       )
     }else if (ishovered) {
         return  <i className="ri-add-circle-line cart" onClick ={() => addToCart(photo)}></i>;
       }
     }
  

  


  return (
    <div className={`${className} image-container`}
      onMouseEnter={() => {setIsHovered(true) }}
      onMouseLeave={() => {setIsHovered(false) }}>
      {heartIcon()}
      {CartIcon()}
      <img src={photo.url} className="image-grid"/>
    </div>
  )
}

Image.propTypes = {
   className : PropTypes.string,
   img : PropTypes.shape ({
     id: PropTypes.string.isRequired,
     url : PropTypes.string.isRequired,
     isFavorite : PropTypes.bool
   })

};

export default Image;