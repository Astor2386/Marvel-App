import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import Loading from './Loading';
import Error from './Error';

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    // Fetch character details from the Flask backend
    fetch(`http://127.0.0.1:5000/characters/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch character');
        }
        return response.json();
      })
      .then(data => {
        setCharacter(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]); // Re-fetch if id changes

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this character?')) {
      setLoading(true);
      setDeleteError(null);

      fetch(`http://127.0.0.1:5000/characters/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete character');
          }
          setLoading(false);
          navigate('/characters'); // Redirect to character list after deletion
        })
        .catch(err => {
          setDeleteError(err.message);
          setLoading(false);
        });
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!character) return <Error message="Character not found" />;

  const contentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  };

  const imageStyle = {
    maxHeight: '300px', // Limit the height
    maxWidth: '100%', // Ensure it fits within the card width
    objectFit: 'contain', // Scale the image proportionally without cropping
    display: 'block', // Ensure proper centering
    margin: '0 auto', // Center the image horizontally
  };

  return (
    <Container className="my-4">
      <div style={contentStyle}>
        {deleteError && (
          <Alert variant="danger" className="mb-3">
            {deleteError}
          </Alert>
        )}
        <Card>
          <Card.Img variant="top" src={character.image_url} alt={character.name} style={imageStyle} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text><strong>Alias:</strong> {character.alias}</Card.Text>
            <Card.Text><strong>Alignment:</strong> {character.alignment}</Card.Text>
            <Card.Text><strong>Powers:</strong> {character.powers}</Card.Text>
            <Button as={Link} to={`/characters/${id}/edit`} variant="primary" className="me-2">
              Edit Character
            </Button>
            <Button variant="danger" onClick={handleDelete} className="me-2">
              Delete Character
            </Button>
            <Button as={Link} to="/characters" variant="secondary">
              Back to List
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default CharacterDetail;