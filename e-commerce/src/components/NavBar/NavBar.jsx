import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";
import React from 'react'
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">Mi Tienda</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink href="/">Home</NavLink>
						{/**
						 * className={({isActive})=>isActive?'classActive':'classNoActive'}
						*/}
						<NavLink href="detalle">Librería</NavLink>
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
                <CartWidget />
			</Container>
		</Navbar>
	);
}

export default NavBar;
