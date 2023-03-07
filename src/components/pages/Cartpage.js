import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../../redux/actions/action';
import Cardsdata from '../Card1';
import Cardsdata2 from '../Card2';
import Cardsdata3 from '../product';
import { useParams } from 'react-router-dom';
function Cartpage() {
  const [data, setdata] = useState([]);
  // const [data2, setdata2] = useState('');
  const { id, type } = useParams();
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.cartreducer.CARTS);
  // console.log('datais:', getdata);
  const send = (item) => {
    dispatch(ADD(item));
    alert('ITEM ADD');
  };

  const compare = () => {
    if (type == 'Men') {
      let comparedata = Cardsdata.filter((item) => {
        return item.id == id;
      });
     
      setdata(comparedata);
    } else if (type === 'MIX') {
      let comparedata = Cardsdata3.filter((item) => {
        return item.id == id;
      });
      
      setdata(comparedata);
    } else {
      let comparedata = Cardsdata2.filter((item) => {
        return item.id == id;
      });
      setdata(comparedata);
    }
  };
  useEffect(() => {
    compare();
  }, [id]);
  return (
    <>
      <Header />
      <div
        className="container-fluid py-5 w-full"
        style={{ minHeight: '80vh' }}
      >
        <h2 className="text-center uppercase text-red-800 my-3">
          Iteams Details Page
        </h2>
        <div className="container pt-5">
          <div className="row ">
            {data.map((element, id) => {
              return (
                <>
                  <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 py-4 ">
                    <figure className="text-end">
                      <img
                        src={element.imgdata}
                        alt="not found"
                        className="img-fluid "
                      />
                    </figure>
                  </div>
                  <div className="col-md-6 col-10 mx-auto mb-md-0 mb-3 pt-5">
                    <h2>
                      <strong className="uppercase text-red-800">
                        {element.rname}
                      </strong>
                    </h2>
                    <p>
                      <strong className="text-red-800">
                        Price:RS{element.price}
                      </strong>
                    </p>

                    <p>
                      <strong className="text-red-800 me-1">Rating:</strong>
                      <span className="bg-red-800 text-white px-2  rounded-2xl">
                        {element.rating} ★
                      </span>
                    </p>
                    <p>
                      <strong className="text-red-800">Size:Medium</strong>
                    </p>
                    <p className="my-5">
                      <strong className="text-red-800">
                        Description:{element.somedata}
                      </strong>
                    </p>

                    <button
                      className="py-2 w-full bg-red-800 text-white"
                      onClick={() => send(element)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cartpage;
