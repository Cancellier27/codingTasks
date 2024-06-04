import "./TotalPrice.css"

import Dropdown from "react-bootstrap/Dropdown"
import {Button, ButtonGroup} from "react-bootstrap"
import {useEffect, useState} from "react"

export default function TotalPrice({bought, setBought}) {
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let sum = 0
    bought.forEach((e) => {
      sum += Number(e.price)
    })
    setTotalPrice(sum)
  }, [bought])

  function handleRemove(id) {
    let newItemsArr = []
    bought.forEach((item) => {
      if (item.id !== id) {
        newItemsArr.push(item)
      }
    })

    setBought(newItemsArr)
  }

  return (
    <div className="total-price-container">
      <Dropdown as={ButtonGroup} autoClose="outside">
        <Button variant="success">Total Price</Button>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
        ></Dropdown.Toggle>

        <Dropdown.Menu>
          {bought.map((item) => {
            return (
              <Dropdown.Item
                key={item.id}
                className="d-flex justify-content-start align-items-center"
              >
                <p className="m-0">{`${item.title}: £${item.price}`}</p>
                <Button
                  className="mx-2"
                  variant="danger"
                  onClick={() => handleRemove(item.id)}
                >
                  X
                </Button>
              </Dropdown.Item>
            )
          })}
          <Dropdown.Divider />
          <Dropdown.Item className="total-total">
            <h2>Total: £{totalPrice}</h2>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
