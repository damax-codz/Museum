import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import "./shop.css";
import Carousel from "react-bootstrap/Carousel";
import watch from "./../images/Rectangle 8.png";
import shirt from "./../images/shirt.jpg"
import chain from "./../images/chain.jpg"
import Button from "../button/Button";


const Shop = () => {
    const [ watchNum,setWatchNum ]  = useState(0)
    const [ shirtNum,setShirtNum ]  = useState(0)
    const [ chainNum,setChainNum ]  = useState(0)
    
    function IncreaseWatch(){
        setWatchNum(watchNum + 1)
    }
    function DecreaseWatch(){
        setWatchNum(watchNum - 1)
    }
    function IncreaseShirt(){
        setShirtNum(shirtNum + 1)
    }
    function DecreaseShirt(){
        setShirtNum(shirtNum - 1)
    }
    function IncreaseChain(){
        setChainNum(chainNum + 1)
    }
    function DecreaseChain(){
        setChainNum(chainNum - 1)
    }


   return (
    <>
      <Nav />

      <div className="shop">
        <section className="imageslide">
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <img className="d-block w-100" src={watch} alt="First slide" />
              <h3>Braun Classic Watch</h3>
              <p>
                This Braun Classic Watch This Braun watch is a reissue of the
                original 1970's design from renowned design team Dietrich Lubs
                and Dieter Rams, both of whom have work featured in the Museum’s
                collection. 
              </p>
              <div className="price">
                <span className="prc">
                  <h4>$160.00</h4>
                  <h4>$140 Member Price</h4>
                </span>
                <div>
                  <span onClick={DecreaseWatch}>-</span>
                  <span>{watchNum}</span>
                  <span onClick={IncreaseWatch}>+</span>
                </div>
              </div>
              <div className="shopbut">
                <Button name="Add to Cart"   />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={shirt}  alt="First slide" />
              <h3>The Badagry Art </h3>
              <p>
                This Braun Classic Watch This Braun watch is a reissue of the
                original 1970's design from renowned design team Dietrich Lubs
                and Dieter Rams, both of whom have work featured in the Museum’s
                collection. 
              </p>
              <div className="price">
                <span className="prc">
                  <h4>$150.00</h4>
                  <h4>$110 Member Price</h4>
                </span>
                <div>
                  <span onClick={DecreaseShirt}>-</span>
                  <span>{shirtNum}</span>
                  <span onClick={IncreaseShirt}>+</span>
                </div>
              </div>
              <div className="shopbut">
                <Button name="Add to Cart" />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={chain}  alt="First slide" />
              <h3>Queen Victoria Bracelet </h3>
              <p>
                 ThisQueen Victoria Bracelet is a reissue of the
                original 1970's design from renowned design team Dietrich Lubs
                and Dieter Rams, both of whom have work featured in the Museum’s
                collection. 
              </p>
              <div className="price">
                <span className="prc">
                  <h4>$230.00</h4>
                  <h4>$100 Member Price</h4>
                </span>
                <div>
                  <span onClick={DecreaseChain}>-</span>
                  <span>{chainNum}</span>
                  <span onClick={IncreaseChain}>+</span>
                </div>
              </div>
              <div className="shopbut">
                <Button name="Add to Cart" />
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </>
  );
};

export default Shop;
