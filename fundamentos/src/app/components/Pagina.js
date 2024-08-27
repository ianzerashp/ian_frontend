import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
        
        <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Página 1</Nav.Link>
            <Nav.Link href="#features">Página 2</Nav.Link>
            <Nav.Link href="#pricing">Array</Nav.Link>
            <Nav.Link href="#pricing">Carros</Nav.Link>
        </Nav>
    
</Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>

            <Container>
                {props.children}
            </Container>
        </>
    )
}