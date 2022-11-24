import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.css'
function BasicExample({img,title,description }) {
  return (
    <>
   
    <Card style={{ width: '18rem',display:'inline-block',margin:'15px' }} >
      <Card.Img variant="top" src="https://th.bing.com/th/id/R.9274b1eda6850c79ee48a770e16d473d?rik=Nwv1GhoA0y7buQ&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2020%2f02%2fFree-Toyota-GR-Supra.jpg&ehk=vSIwlNBPKHUFllDSa8BKx%2bId6FQ4VbktfoHguF98ZEM%3d&risl=&pid=ImgRaw&r=0" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

 </>
    
    
  );
}

export default BasicExample;