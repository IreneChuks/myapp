import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SubscriptionForm = () => {
  const btn = {
    backgroundColor: 'brown'
  }
    return ( 
        <Form>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='text-light'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-light">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Button type="submit" style={btn}>
        Submit
      </Button>
    </Form>
     );
}
 
export default SubscriptionForm;