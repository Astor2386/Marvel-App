import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Loading from './Loading';
import Error from './Error';

function CharacterForm({ mode }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    alias: '',
    alignment: 'hero',
    powers: '',
    image_url: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (mode === 'edit' && id) {
      setLoading(true);
      fetch(`http://127.0.0.1:5000/characters/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch character');
          }
          return response.json();
        })
        .then(data => {
          setFormData({
            name: data.name,
            alias: data.alias,
            alignment: data.alignment,
            powers: data.powers,
            image_url: data.image_url,
          });
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [mode, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const method = mode === 'create' ? 'POST' : 'PUT';
    const url = mode === 'create' ? 'http://127.0.0.1:5000/characters' : `http://127.0.0.1:5000/characters/${id}`;

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(mode === 'create' ? 'Failed to create character' : 'Failed to update character');
        }
        return response.json();
      })
      .then(data => {
        setSuccessMessage(mode === 'create' ? 'Character created successfully!' : 'Character updated successfully!');
        setLoading(false);
        setTimeout(() => {
          navigate('/characters');
        }, 2000);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const formContentStyle = {
    backgroundColor: 'white', // Fully solid white
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <Container className="my-4">
      <div style={formContentStyle}>
        <h2>{mode === 'create' ? 'Create Character' : 'Edit Character'}</h2>
        {successMessage && (
          <Alert variant="success" className="mt-3">
            {successMessage}{' '}
            <Link to="/characters">Go to Characters List</Link>
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              isInvalid={!formData.name && mode === 'create'}
            />
            <Form.Control.Feedback type="invalid">
              Name is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAlias">
            <Form.Label>Alias</Form.Label>
            <Form.Control
              type="text"
              name="alias"
              value={formData.alias}
              onChange={handleChange}
              required
              isInvalid={!formData.alias && mode === 'create'}
            />
            <Form.Control.Feedback type="invalid">
              Alias is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAlignment">
            <Form.Label>Alignment</Form.Label>
            <Form.Select
              name="alignment"
              value={formData.alignment}
              onChange={handleChange}
              required
            >
              <option value="hero">Hero</option>
              <option value="villain">Villain</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPowers">
            <Form.Label>Powers</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="powers"
              value={formData.powers}
              onChange={handleChange}
              required
              isInvalid={!formData.powers && mode === 'create'}
            />
            <Form.Control.Feedback type="invalid">
              Powers are required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImageUrl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              required
              isInvalid={!formData.image_url && mode === 'create'}
            />
            <Form.Control.Feedback type="invalid">
              Image URL is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            {mode === 'create' ? 'Create Character' : 'Update Character'}
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default CharacterForm;