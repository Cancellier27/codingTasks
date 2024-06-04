import {useState} from "react"
import "./ProductCard.css"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Dropdown from "react-bootstrap/Dropdown"

export default function ProductCard(props) {
  const [buttonColor, setButtonColor] = useState("text-white")

  function handleChangeColor(e) {
    setButtonColor(e.target.title)
  }

  function handleBuy() {
    props.setBought([
      ...props.bought,
      {
        id: Date.now(),
        title: props.title,
        price: props.price
      }
    ])
  }

  return (
    <Card style={{width: "18rem"}} className="product-card-component">
      <div className="card-img-container">
        <Card.Img variant="top" src={props.img} className="card-img" />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{`£${props.price}`}</Card.Text>
        <Button
          variant="primary"
          className="buy-btn"
          onClick={handleBuy}
        >
          Buy
        </Button>
        <Dropdown className="mt-2">
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className={buttonColor}
          >
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              className="text-danger"
              title="text-danger"
              onClick={handleChangeColor}
            >
              Red
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              className="text-warning"
              title="text-warning"
              onClick={handleChangeColor}
            >
              Yellow
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              className="text-dark"
              title="text-white"
              onClick={handleChangeColor}
            >
              White
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  )
}
