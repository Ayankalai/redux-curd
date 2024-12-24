import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'; 
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error while fetching the data", error);
      }
    };
    fetchData();
  }, []);

  const HandleDelete = (id) => {
    console.log(id)
    const newproduct = products.filter(product => (
      product.id !== id
    ))
    console.log(newproduct)
    setProducts(newproduct)
  }

  return (
    <div>
      {!products.length ? (
        <div className='text-center'>Your products is empty</div>
      ) : (
        <Row className='m-2'>
          {products.map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12} className="p-2">
              <Card style={{ width: '100%' }}>
                
                <Card.Img variant="top" src={product.image} className='p-2' style={{ objectFit: 'contain', height: '200px', width: '100%' }} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    Category: {product.category}
                  </Card.Text>
                  <Card.Text>
                    Price: ${product.price}
                  </Card.Text>
                  <Card.Text>
                    {/* Description: {product.description} */}
                  </Card.Text>
                  <Card.Text>
                    Rating Count: {product.rating.count}<br />
                    Rating: {product.rating.rate}
                  </Card.Text>
                  <Button variant="danger w-100" onClick={()=> HandleDelete(product.id)}>Delete</Button>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
