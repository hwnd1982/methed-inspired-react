import Cart from "./Cart/Cart";
import Order from "./Order/Order";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";
import { fetchGoodsAll } from "../../../features/goodsSlice";

export const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, countItems } = useSelector(state => state.cart);
  const { list: goodsList } = useSelector(state => state.goods);
  const [count, setCount] = useState(0);
  const list = cartItems.map(item => {
    const {title = '', price = 0, pic = ''} = goodsList.find(({id}) => item.id === id) || {};

    return {...item, title, price, pic};
  });

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchGoodsAll({list: cartItems.map(item => item.id)}));
      setCount(countItems);
    }

  }, [dispatch, cartItems, countItems, count]);

  return (
      <>
        <Cart list={list} />
        <Order list={list}/>
      </>
  )
}
