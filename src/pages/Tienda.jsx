import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Producto from "../components/Tienda/Producto";
import ProductoModal from "../components/Tienda/ProductoModal";
import proteinaPolvo from "../img/proteinaPolvo.png"
import barraProteina from "../img/barraProteina.png"
import { useState, useEffect } from "react";
import LoginRequiredModal from "../components/LoginRequiredModal";
import axios from "axios";

function Tienda() {

  const [ModalAbierto, setModalAbierto] = useState(false);
  const [ProductoSeleccionado, setProductoSeleccionado] = useState(null);
  const [refreshsession, setRefreshSession] = useState(false);
  const [ShowLoginRequiredModal, setShowLoginRequiredModal] = useState(false); 

  const AbrirModal = (product) => {
    setProductoSeleccionado(product);
    setModalAbierto(true);
  };

  const CerrarModal = () => {
    setProductoSeleccionado(null);
    setModalAbierto(false);
  };

  const CerrarModalEsc = (event) => {
    if (event.key === "Escape") {
      CerrarModal();
    }
  };
  useEffect(() => {
    if (ModalAbierto) {
      // Si el modal está abierto, añadir el event listener al montar el componente
      document.addEventListener("keydown", CerrarModalEsc);
    }
    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener("keydown", CerrarModalEsc);
    };
  }, [ModalAbierto]);

  const addToCart = ({ nombre, precio, img }) => {
    //==========GEEEEEYSON=========
    //if (!session ) --> setShowLoginRequiredModal(true); return
    //==========GEEEEEYSON=========

      axios.post("https://serverc-4y5e.onrender.com/addToCart", {
        producto: {
        id: nombre,
        name: nombre,
        quantity: 1 ,
        price: precio ,
        imageSrc: img ,
        }
      }, {
        withCredentials: true
      }).then((res) => {
        console.log(res.data);
        setRefreshSession(!refreshsession);
      }).catch((error) => {
        console.error(error);
      });
    };

  return (
    <>

    {ShowLoginRequiredModal &&  <LoginRequiredModal href={"#"} close={true} setShowLoginRequiredModal={setShowLoginRequiredModal} />}
   
      <div className="tw-min-h-screen tw-pt-[4.87rem] tw-bg-gradient-to-b tw-from-[#292929] tw-to-[#0d0d0d] tw-to-60%" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>
        <Navbar linkHome={"/"} refreshsession={refreshsession} />

        <div className="tw-p-2 tw-mb-8 tw-flex tw-flex-wrap tw-gap-4 tw-mt-1 tw-justify-center sm:tw-mx-4"> {/* tw-grid md:tw-grid-cols-3 xl:tw-grid-cols-4*/}

          <Producto img={'https://controlz.onrender.com/assets/proteinaPolvo-CgX7OS6x.png'} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate!",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
          addToCart={addToCart} setShowLoginRequiredModal={setShowLoginRequiredModal} nombre={"Proteina en polvo"} descripcion={"¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate!"} precio={20} precioScam={"25€"} descuento={"20%"}

          />
          <Producto img={"https://controlz.onrender.com/assets/barraProteina-DJXUMzq4.png"} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra.",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
          addToCart={addToCart}  setrefreshsession={setRefreshSession} refreshsession={refreshsession} nombre={"Barrita de Proteina"} descripcion={"Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra."} precio={20} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={'https://controlz.onrender.com/assets/proteinaPolvo-CgX7OS6x.png'} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate! ",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
          addToCart={addToCart} setrefreshsession={setRefreshSession} refreshsession={refreshsession}  nombre={"Proteina en polvo"} descripcion={"¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate!"} precio={20} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={"https://controlz.onrender.com/assets/barraProteina-DJXUMzq4.png"} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra.",
            precio: "20",
            precioScam: "25",
            descuento: "20%",
            img: barraProteina

          })}
          addToCart={addToCart} setrefreshsession={setRefreshSession} refreshsession={refreshsession}  nombre={"Barrita de Proteina"} descripcion={"Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra."} precio={20} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={"https://controlz.onrender.com/assets/barraProteina-DJXUMzq4.png"} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra.",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
          addToCart={addToCart} setrefreshsession={setRefreshSession} refreshsession={refreshsession}  nombre={"Barrita de Proteina"} descripcion={"Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra."} precio={20} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={'https://controlz.onrender.com/assets/proteinaPolvo-CgX7OS6x.png'} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate!. ",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
          setrefreshsession={setRefreshSession} refreshsession={refreshsession}  nombre={"Proteina en polvo"} descripcion={"¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate! "} precio={20} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={"https://controlz.onrender.com/assets/barraProteina-DJXUMzq4.png"} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra. ",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
          addToCart={addToCart} setrefreshsession={setRefreshSession} refreshsession={refreshsession}  nombre={"Barrita de Proteina"} descripcion={"Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra. "} precio={20} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={'https://controlz.onrender.com/assets/proteinaPolvo-CgX7OS6x.png'} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate! ",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
          addToCart={addToCart} setrefreshsession={setRefreshSession} refreshsession={refreshsession}  nombre={"Proteina en polvo"} descripcion={"¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate!"} precio={20} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={"https://controlz.onrender.com/assets/barraProteina-DJXUMzq4.png"} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra. ",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
          addToCart={addToCart} setrefreshsession={setRefreshSession} refreshsession={refreshsession}  nombre={"Barrita de Proteina"} descripcion={"Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra. "} precio={20} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={'https://controlz.onrender.com/assets/proteinaPolvo-CgX7OS6x.png'} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate!  ",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
          setrefreshsession={setRefreshSession} refreshsession={refreshsession}  nombre={"Proteina en polvo"} descripcion={"¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate! "} precio={20} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={"https://controlz.onrender.com/assets/barraProteina-DJXUMzq4.png"} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra. ",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
          addToCart={addToCart} setrefreshsession={setRefreshSession} refreshsession={refreshsession}  nombre={"Barrita de Proteina"} descripcion={"Descubre la combinación perfecta de sabor y nutrición con la Barra de Proteína FitBar sabor Vainilla y Almendra. "} precio={20} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={'https://controlz.onrender.com/assets/proteinaPolvo-CgX7OS6x.png'} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate! ",
            precio: 20,
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
          addToCart={addToCart} setrefreshsession={setRefreshSession} refreshsession={refreshsession}  nombre={"Proteina en polvo"} descripcion={"¡Lleva tu nutrición al siguiente nivel con la Proteína en Polvo Whey Pro sabor Chocolate! "} precio={20} precioScam={"25€"} descuento={"20%"}
          />


        </div>
        {/* Renderizar el modal */}
        {ModalAbierto && (
          <ProductoModal
            product={ProductoSeleccionado}
            closeModal={CerrarModal}
          />
        )}



        <Footer />
      </div>


    </>
  )
}
export default Tienda;
