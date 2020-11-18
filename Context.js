
import React, { useEffect, useState } from 'react';
const Context = React.createContext();
function ContextProvider (props) {
  const [ allPhotos , setPAllPhotos] = useState([]);
  const [cartItems , setCartItems] = useState([]);
  const URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
  useEffect(() => {
    fetch(URL) 
    .then(res => res.json()
     .then(data => setPAllPhotos(data))
    )
  }, []);

  function toggleFavorite(id){
    //if it is the one , let's return an update object
    const newPhotosArray = allPhotos.map(photo => {
      if(photo.id === id) {
        //update element
         return{
           ...photo ,
           isFavorite : !photo.isFavorite,
         }
      };
      //it is m=not one I am looking for , therefore , I will not change it
      return photo
    })
   setPAllPhotos(newPhotosArray)
  }
  

  function addToCart (img) {
// how to add an element in array , in an immutable way ,
  // to push is mutable(array.push(newstuff));
  // add an element in array mutable 
  //map is immutable (let newArr = array.map())
    // const newCartArray = [...cartItems , img];
    // setCartItems(newCartArray);
    setCartItems (prevItem => [...cartItems , img])
  }
  function removeFromCard (imgId) {
    setCartItems(preveItems => preveItems.filter(item => item.id !== imgId))
  }

  console.log(cartItems);
  return (
  <Context.Provider value={{allPhotos , toggleFavorite , addToCart , cartItems , removeFromCard}}>
    {props.children}
  </Context.Provider>
  )
}

export {ContextProvider , Context}