import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina2(props) {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        
                <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/fundamentos">Página 1</Nav.Link>
                    <Nav.Link href="/clientes">Página 2</Nav.Link>
                    <Nav.Link href="/array">Array</Nav.Link>
                    <Nav.Link href="/carros">Carros</Nav.Link>
                </Nav>
            
        </Navbar>
      
        <div style={{ backgroundColor: '#e3e2e2', color: '#000', padding: '60px' }}>
    <Container>
        <h1 className="mt-4 mb-4">{props.titulo}</h1>
    </Container>
</div>

<Container>
    <div className="mt-4">
        {props.children}
    </div>
</Container>
    </>
    )
}