import React, { useState,useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

// import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";

const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [dishes, setDishes] = useState([]);
  const searchedProduct = dishes;
  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await fetch('/dishes'); // Assuming your API endpoint is '/api/dishes'
                if (!response.ok) {
                    throw new Error('Failed to fetch dishes');
                }
                const data = await response.json();
                setDishes(data);
            } catch (error) {
                console.error('Error fetching dishes:', error);
                // Handle error, e.g., set an error state
            }
        };

        fetchDishes();
      
    }, []); // Empty dependency array means this effect runs only once after the initial render






  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log("dishes",displayPage);

  return (
    <Helmet title="Food's Avoilable in your Location">
      <Container>
        <Row>
          {displayPage.map((item) => (
            <Col
              lg="3"
              md="4"
              sm="6"
              xs="6"
              key={item._id}
              className="mb-4 mt-4"
            >
              <ProductCard item={item} />
            </Col>
          ))}
          <div className="d-flex justify-content-center mt-8 mb-8">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Pizzas;

// ₹
