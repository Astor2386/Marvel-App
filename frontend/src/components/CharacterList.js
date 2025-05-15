import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch characters from the Flask backend
    fetch('http://127.0.0.1:5000/characters')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        return response.json();
      })
      .then(data => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once 

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const contentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <Container>
      <div style={contentStyle}>
        <h2 className="my-4">Marvel Characters</h2>
        <Row>
          {characters.map(character => (
            <Col key={character.id} xs={12} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={character.image_url} alt={character.name} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>{character.alias}</Card.Text>
                  <Button as={Link} to={`/characters/${character.id}`} variant="primary">
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default CharacterList;