import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Input from '../common/Input';
import Button from '../common/Button';
import Loading from '../common/Loading';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.625rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.625rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  min-height: 150px;
  resize: vertical;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

function CollectionForm({ collection = null }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: collection?.title || '',
    description: collection?.description || '',
    category: collection?.category || 'antiques',
    thumbnail: collection?.thumbnail || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to the collection details page
      navigate(`/collection/${collection?.id || 'new-id'}`);
    } catch (error) {
      console.error('Error saving collection:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading fullPage text="Saving collection..." />;
  }

  return (
    <Container>
      <Header>
        <Title>{collection ? 'Edit Collection' : 'Create New Collection'}</Title>
        <Description>
          {collection 
            ? 'Update your collection details below.'
            : 'Fill in the details below to create your new collection.'}
        </Description>
      </Header>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter collection title"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Describe your collection"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="category">Category</Label>
          <Select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="antiques">Antiques</option>
            <option value="art">Art</option>
            <option value="books">Books</option>
            <option value="coins">Coins</option>
            <option value="comics">Comics</option>
            <option value="stamps">Stamps</option>
            <option value="toys">Toys</option>
            <option value="other">Other</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="thumbnail">Thumbnail URL</Label>
          <Input
            id="thumbnail"
            name="thumbnail"
            type="url"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </FormGroup>

        <ButtonGroup>
          <Button type="submit">
            {collection ? 'Save Changes' : 'Create Collection'}
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default CollectionForm; 