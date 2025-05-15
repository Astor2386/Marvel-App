import { Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <div className="text-center my-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;