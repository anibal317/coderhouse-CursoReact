import { Navbar, Container, Nav } from "react-bootstrap";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

function NavBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand><img className="mx-1" src={require('./src/img/clothes-rack-64.png')}/><Link to="/">Mi Tienda</Link></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/">Home</Link>
						<div className="p-3"> </div>
						{/**
						 * className={({isActive})=>isActive?'classActive':'classNoActive'}
						*/}
						<Link to="/accesorios">Accesorios</Link>
						<div className="p-3"> </div>
						<Link to="/remeras">Remeras</Link>
						{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
				</Navbar.Collapse>
               <Link to="/cart"> <CartWidget /></Link>
			</Container>
		</Navbar>
	);
}

export default NavBar;
