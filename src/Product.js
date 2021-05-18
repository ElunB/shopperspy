import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function Product() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/dress.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content
                    Some quick example text to build on the card title and make up the bulk of
    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
export default Product;