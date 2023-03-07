import React, { useEffect, useState } from 'react';
import '../components/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import cart from '../assests/2762885.png';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { ADD } from '../redux/actions/action';
import { DLT, DLTONE, Search } from '../redux/actions/action';
import { useForm } from 'react-hook-form';
function Header() {
  const histroy = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [Price, setPrice] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const getdata = useSelector((state) => state.cartreducer.CARTS);
  // total price calculate
  const Total = () => {
    let price = 0;
    getdata.map((item, id) => {
      price = item.price * item.qnty + price;
    });
    setPrice(price);
  };
  useEffect(() => {
    Total();
  }, [Total]);
  const send = (item) => {
    dispatch(ADD(item));
  };
  // delete carts
  const Delete = (id) => {
    dispatch(DLT(id));
  };
  const DeleteOne = (item) => {
    dispatch(DLTONE(item));
  };
  useEffect(() => {
    return () => {
      dispatch(Search(''));
    };
  }, []);
  return (
    <>
      <p className="text-center bg-red-800 text-white">
        Free Delivery on all Orders above Rs. 2,000. You may Contact Us:
        042-35880175.
      </p>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-center ">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0371/5416/0772/files/Ndure_130x30_ec41a742-1e80-42c6-a33a-d6cb11d17137.png?v=1636539714"
                alt="not found"
                srcset=""
              />
            </figure>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="text-decoration-none">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="/Menpage" className="text-decoration-none">
                <Nav.Link href="#link">Men</Nav.Link>
              </Link>
              <Link to="/Womenpage" className="text-decoration-none">
                <Nav.Link href="#home">Women</Nav.Link>
              </Link>
              <Link to="/Login" className="text-decoration-none">
                <Nav.Link href="#home">Login</Nav.Link>
              </Link>
              <Link to="/Register" className="text-decoration-none">
                <Nav.Link href="#home">Register</Nav.Link>
              </Link>
            </Nav>
            <form
              onSubmit={handleSubmit((data) => {
                if (data) {
                  dispatch(Search(data.search));
                  // console.log(data.search);
                }
              })}
              className="search-box bg-red-800 me-md-3 flex justify-between items-center"
            >
              <input
                type="text"
                {...register('search', { required: true })}
                id="text-box"
                className="text-white ps-3"
                placeholder="Enter Product Name ....."
              />
              <button className="search-btn bg-gray-800 px-3 py-2 ">
                <i className="fa-solid fa-magnifying-glass py-2 "></i>
              </button>
            </form>
            <div>
              <Badge badgeContent={getdata.length} color="success">
                <i
                  className="fa-solid fa-cart-shopping text-red-800 cursor-pointer"
                  style={{ fontSize: '25px' }}
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                ></i>
              </Badge>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                className="px-5"
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {getdata.length ? (
                  <div className="">
                    <Table>
                      <thead>
                        <tr>
                          <th>PHOTO</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getdata.map((item, id) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  <img
                                    src={item.imgdata}
                                    alt="not found"
                                    className="w-20 "
                                  />
                                </td>
                                <td>
                                  <p>{item.rname}</p>
                                  <p>RS{item.price}</p>
                                  <p>Quanity:{item.qnty}</p>
                                  <p style={{ color: 'red' }}>
                                    <i
                                      className="fas fa-trash cursor-pointer  "
                                      onClick={() => Delete(item.id)}
                                    ></i>
                                  </p>
                                  <div className="flex bg-red-800 justify-around items-center text-white">
                                    <span
                                      className="cursor-pointer"
                                      onClick={() => DeleteOne(item)}
                                    >
                                      -
                                    </span>
                                    <span className="cursor-pointer">
                                      {item.qnty}
                                    </span>
                                    <span
                                      className="cursor-pointer"
                                      onClick={() => send(item)}
                                    >
                                      +
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                        <p>Total:RS{Price}</p>
                      </tbody>
                    </Table>
                    <div className="w-full text-center">
                      <Link
                        to={`/Order/${Price}`}
                        className="text-white bg-red-800 text-decoration-none py-2 px-2  "
                      >
                        CHECK OUT
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex justify-around items-center"
                    style={{ width: '20rem' }}
                  >
                    <h6 className="text-center uppercase text-red-800">
                      Your cart is Empty
                    </h6>
                    <figure>
                      <img src={cart} alt="not found" className="w-10 h-10" />
                    </figure>
                  </div>
                )}
              </Menu>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
