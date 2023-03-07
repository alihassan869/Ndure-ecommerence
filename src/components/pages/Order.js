import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
function Order() {
  const history = useNavigate();
  const { register, handleSubmit } = useForm();
  const { Price } = useParams();
  const CARTS = useSelector((state) => state.cartreducer.CARTS);

  const Total = {
    Price: Price,
    Delivery: 200,
  };
  return (
    <div className="container py-5 mt-5">
      <Accordion defaultActiveKey={['0']} alwaysOpen className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>ORDER SUMMARY</Accordion.Header>
          <Accordion.Body>
            {CARTS.length ? (
              <div
                className="itemsDetails flex w-full justify-center items-center px-10"
                style={{ width: '100%', padding: 10 }}
              >
                <Table className="w-100">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Product Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CARTS.map((item) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <figure>
                                <img
                                  src={item.imgdata}
                                  alt="not found"
                                  className="img-fluid h-8 w-8"
                                />
                              </figure>
                            </td>
                            <td>
                              <p>Name:{item.rname} </p>
                              <p>Price:Rs{item.price}</p>
                              <p>Quanity:{item.qnty}</p>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <p>Total:Rs{Price}</p>
                  </tbody>
                </Table>
              </div>
            ) : (
              <div
                className="itemsDetails flex w-full justify-center items-center px-10"
                style={{ width: '100%', padding: 10 }}
              >
                <p className="font-bold">Your cart is empty</p>
              </div>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Form
        onSubmit={handleSubmit((User) => {
          if (User) {
            axios
              .post('http://localhost:250/Order', { User, CARTS, Total })
              .then((res) => {
                // alert(res.data.message);
                history('/OrderSuccces');
              });
          }
        })}
      >
        <Form.Select
          aria-label="Default select example"
          className="mb-3"
          {...register('Country', { required: 'This is required' })}
        >
          <option value="Pakistan">Pakistan</option>
        </Form.Select>
        <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter a First name...."
              {...register('Fname', { required: 'This is required' })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter a Last name...."
              {...register('Lname', { required: true })}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="number"
              placeholder="+92..."
              {...register('Phone', { required: true })}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Address..."
            {...register('Address', { required: true })}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control {...register('City', { required: true })} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              {...register('State', { required: true })}
            >
              <option>Choose...</option>
              <option>Punjab</option>
              <option>Islamabad</option>
              <option>Kararchi</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Postal code"
              {...register('Code', { required: true })}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Save for next time"
            {...register('Checkbox', { required: true })}
          />
        </Form.Group>

        <button type="submit" className="w-100 py-2 bg-red-800 text-white">
          Order Now
        </button>
      </Form>
    </div>
  );
}

export default Order;
