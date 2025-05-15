import { Button } from 'react-bootstrap';

function NotFound() {
  const contentStyle = {
    backgroundColor: 'white', // Fully solid white
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={contentStyle}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Button variant="primary" href="/">
        Back to Home
      </Button>
    </div>
  );
}

export default NotFound;