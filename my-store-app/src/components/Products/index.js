import "./Products.css"

import {useEffect, useState} from "react"
import ProductCard from "./ProductCard"
import TotalPrice from "./TotalPrice"

import mouseImg from "./productImages/mouse.jpg"
import extenderImg from "./productImages/extender.jpg"
import flashdriveImg from "./productImages/flashdrive.jpg"
import hardriveImg from "./productImages/hardrive.jpg"
import inkImg from "./productImages/ink.jpg"
import keyboardImg from "./productImages/keyboard.jpg"
import plugImg from "./productImages/plug.jpg"
import printerImg from "./productImages/printer.jpg"
import sdcardImg from "./productImages/sdcard.jpg"
import wireImg from "./productImages/wire.jpg"

export default function Products({setBought, bought, online}) {
  const [wasBought, setWasBought] = useState(false)
  const [itemsArray, setItemsArray] = useState([
    {
      title: "Mouse",
      description: "Black color, wireless, 5000dpi mouse, 4 buttons",
      price: "25.00",
      img: mouseImg
    },
    {
      title: "Wifi Extender",
      description:
        "Tp-link wifi extender, great to bring internet to distant spots",
      price: "22.50",
      img: extenderImg
    },
    {
      title: "Flash Drive",
      description:
        "SanDisk 64gb flash drive, with a max transference data of 1gb/s",
      price: "18.50",
      img: flashdriveImg
    },
    {
      title: "External Drive",
      description: "Seagate 1tb external drive, safety store all your document",
      price: "35.00",
      img: hardriveImg
    },
    {
      title: "Printer Ink",
      description:
        "Colored and black pak of printer ink, compatible with HP printers",
      price: "15.99",
      img: inkImg
    },
    {
      title: "Keyborad & Mouse",
      description: "Simple keyboard and mouse perfect for use in office",
      price: "19.99",
      img: keyboardImg
    },
    {
      title: "Apple adapter",
      description: "Apple plug adapter with cables, comes with two packs",
      price: "40.50",
      img: plugImg
    },
    {
      title: "HP Printer",
      description: "HP Deskjet printer, white color. Ideal for home office",
      price: "75.00",
      img: printerImg
    },
    {
      title: "SD card 256",
      description: "256gb SD card SanDisk. Card class 10.",
      price: "40.50",
      img: sdcardImg
    },
    {
      title: "USb-C to USb",
      description: "USB to USB-C cable adapter, 3m long",
      price: "8.50",
      img: wireImg
    }
  ])
  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {
    setIsOnline(online ? true : false)
  }, [online])

  useEffect(() => {
    setWasBought(bought.length > 0 ? true : false)
  }, [bought])

  return (
    <div className="products-container">
      
      {!online && <h2>You need to be logged in to view this page! Please return to Home page and log in.</h2>}

      {online && (
        <>
          {wasBought && <TotalPrice bought={bought} setBought={setBought} />}
          <div className="products-title">
            <h2>Products</h2>
            <hr></hr>
          </div>
          <div className="product-items-container">
            {itemsArray.map((product) => {
              return (
                <ProductCard
                  bought={bought}
                  setBought={setBought}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  img={product.img}
                  key={product.title}
                />
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
