import React from 'react'
import { useCart } from 'react-use-cart'
import "./Cart.css"
import { useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Cart() {

  const { bookid } = useParams();


  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  // payment gatway

  const [bpayment, setbpayment] = useState({
    price: { cartTotal }
  });

  // const booksbook = async() => {
  //   const userID = {id : localStorage.getItem("userID")}
  //   await axios.post(`https://busy-gray-dibbler-wear.cyclic.app/api/bookspurchase/${bookid}`,userID).then(function (response) {
  //   if (response.data) {
  //     console.log(response);
  //   }
  //   })
  // }


  const initPayment = (data) => {
    const options = {
      key: 'rzp_test_wozmO8VRB0IT0q',
      amount: Number(data.amount),
      currency: data.currency,
      name: 'MyGYMHub',
      description: "Pay to MyGYMHub",
      order_id: data.id,
      handler: async (response) => {
        // console.log(response,"5");
        // console.log(response.razorpay_payment_id);
        // console.log(response.razorpay_order_id);
        // console.log(response.razorpay_signature)
        try {
          const verifyUrl = "https://busy-gray-dibbler-wear.cyclic.app/api/Payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          Swal.fire({
            text: 'Your Booking has been Confirmed',
            imageUrl: 'https://cdn.dribbble.com/users/911154/screenshots/3332845/vfmov3.gif',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.setItem("razorpay_order_id", response.razorpay_order_id);
              localStorage.setItem("razorpay_payment_id", response.razorpay_payment_id);
              // localStorage.setItem("items",{items})
              emptyCart();

              // booksbook();

            }
          })
        } catch (error) {
          console.log(error);
        }
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };




  const paymentHandle = async (amount) => {

    try {
      const _data = { amount: amount }
      const orderUrl = "https://busy-gray-dibbler-wear.cyclic.app/api/payment/orders";
      const { data } = await axios.post(orderUrl, _data);
      console.log(data);
      initPayment(data.data);
    }
    catch (error) {
      console.log(error);
    }

  }

  // payment gatway


  return (

    <div className='container-cart'>
      <table>
        <tr>
          <th colSpan={6} className="main_th">Your Cart</th>
        </tr>
        <tr className='head'>
          <th>Trainer img</th>
          <th>Trainer Name</th>
          <th>Trainer price ₹</th>
          <th>Trainer Time</th>
          {/* <th>Total quantity</th> */}
          <th>Trainer remove</th>
        </tr>
        {
          items.map((item, id) => {
            return (
              <tr>
                <td className='td_img'><img src={item.trainersimg} alt="" /></td>
                <td>{item.trainersName}</td>
                <td>{item.price}</td>
                <td>{item.trainersTime}</td>
                {/* <td>
                  <button className='cart_btn' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>&nbsp;&nbsp;
                  <button className='cart_btn' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </button>
                  </td> */}
                <td><button className='cart_btn_remove' onClick={() => removeItem(item.id)}>&times;</button></td>
              </tr>
            )
          })
        }
      </table>
      {!isEmpty &&
        <div className='total-price'>

          <td><h4>Total price ₹ : {cartTotal}</h4></td>
          <td>
            <button className='cart_clr_btn' onClick={() => emptyCart()}>Clear cart</button>
            <button className='cart_payment_btn' onClick={() => paymentHandle(cartTotal)}>Done Payment</button>
          </td>
        </div>
      }

    </div>
  )
}

export default Cart
