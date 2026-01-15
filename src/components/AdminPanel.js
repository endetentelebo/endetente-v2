import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
    imagePreview: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Créer une URL de prévisualisation
      const imageUrl = URL.createObjectURL(file);
      
      setProduct(prev => ({
        ...prev,
        image: file,
        imagePreview: imageUrl
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ici vous pouvez ajouter la logique pour sauvegarder le produit
    // Par exemple, upload vers Supabase ou votre base de données
    console.log('Produit à publier:', {
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image
    });
    
    alert('Produit publié avec succès !');
    
    // Réinitialiser le formulaire
    setProduct({
      name: '',
      description: '',
      price: '',
      image: null,
      imagePreview: null
    });
  };

  const removeImage = () => {
    if (product.imagePreview) {
      URL.revokeObjectURL(product.imagePreview);
    }
    setProduct(prev => ({
      ...prev,
      image: null,
      imagePreview: null
    }));
  };

  return (
    <div className="admin-panel">
      <h2>🛍️ Panneau Admin - Publier un Produit</h2>
      
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">Nom du produit :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
            placeholder="Ex: T-shirt Max en détente"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
            placeholder="Décrivez votre produit..."
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Prix (€) :</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
            placeholder="29.99"
            step="0.01"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image du produit :</label>
          <div className="image-upload-container">
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
            />
            <label htmlFor="image" className="file-input-label">
              📁 Choisir une image depuis votre PC
            </label>
          </div>
          
          {product.imagePreview && (
            <div className="image-preview">
              <img 
                src={product.imagePreview} 
                alt="Aperçu du produit" 
                className="preview-image"
              />
              <button 
                type="button" 
                onClick={removeImage}
                className="remove-image-btn"
              >
                ❌ Supprimer l'image
              </button>
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn" disabled={!product.image}>
          🚀 Publier le Produit
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;