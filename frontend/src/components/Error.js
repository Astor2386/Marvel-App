import { Alert } from 'react-bootstrap';

function Error({ message }) {
  return (
    <Alert variant="danger" className="my-4">
      <Alert.Heading>Error</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
}

export default Error;