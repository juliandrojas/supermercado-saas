import React from 'react';
import Gallery from '../components/Gallery';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';

function Index() {
  const navbarProps = {
    brandName: "Index",
    links: [
      { label: "Inicio", href: "#inicio", active: true },
      { label: "Productos", href: "#productos", active: false },
      { label: "Ofertas", href: "#ofertas", active: false },
      { label: "Contacto", href: "#contacto", active: false },
      { label: "Ingresar", href: "/login", active: false },
    ],
  };
  const jumbotronProps = {
    title: "Supermercado La Fruta Feliz",
    content: "Lema del supermercado",
    description: "Contáctanos",
    icon: "send"
  };
  const galleryProps = {
    sectionTitle: "Productos",
    urlImage:"vite.svg",
    cardTitle:"Hola Mundo", 
    cardContent:"Chao Mundo", 
    description:"Descripcion", 
    icon:"send"
  }
  return (
    <>
        <Navbar {...navbarProps} />
        <Jumbotron {...jumbotronProps} />
        <br />
        <section id="productos">
          <Gallery {...galleryProps} />
        </section>

    </>
  )
}

export default Index