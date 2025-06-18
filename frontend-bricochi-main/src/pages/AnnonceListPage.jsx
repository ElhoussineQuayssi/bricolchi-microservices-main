import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnnonceCard from '../components/AnnonceCard'; // Import the separate card component

const AnnonceListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const annonces = [
    { 
      id: 1, 
      title: 'Plombier Professionnel - Réparation et Installation', 
      location: 'Casablanca', 
      price: 300,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 127,
      category: 'Plomberie',
      isNew: true,
      serviceProvider: 'Ahmed K.'
    },
    { 
      id: 2, 
      title: 'Électricien Certifié - Installation et Dépannage', 
      location: 'Rabat', 
      price: 400,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
      rating: 4.9,
      reviews: 89,
      category: 'Électricité',
      isNew: false,
      serviceProvider: 'Youssef M.'
    },
    { 
      id: 3, 
      title: 'Femme de Ménage - Service Complet', 
      location: 'Casablanca', 
      price: 250,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 203,
      category: 'Ménage',
      isNew: false,
      serviceProvider: 'Fatima Z.'
    },
    { 
      id: 4, 
      title: 'Jardinier Expert - Entretien et Aménagement', 
      location: 'Marrakech', 
      price: 350,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      rating: 4.6,
      reviews: 156,
      category: 'Jardinage',
      isNew: true,
      serviceProvider: 'Hassan B.'
    },
    { 
      id: 5, 
      title: 'Réparation Climatisation - Toutes Marques', 
      location: 'Fès', 
      price: 450,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 94,
      category: 'Climatisation',
      isNew: false,
      serviceProvider: 'Omar T.'
    },
    { 
      id: 6, 
      title: 'Peintre Décorateur - Intérieur et Extérieur', 
      location: 'Tanger', 
      price: 320,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop',
      rating: 4.9,
      reviews: 178,
      category: 'Peinture',
      isNew: true,
      serviceProvider: 'Khalid R.'
    }
  ];

  const categories = ['Tous', 'Plomberie', 'Électricité', 'Ménage', 'Jardinage', 'Climatisation', 'Peinture'];

  const filteredAnnonces = annonces.filter(annonce => {
    const matchesSearch = annonce.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         annonce.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || annonce.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <Navbar />
      
      {/* Section Hero */}
      <div className="bg-gradient-to-r from-teal-600 to-green-400 text-white py-16 ">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trouvez le Service Parfait
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Des professionnels qualifiés à votre service, partout au Maroc
            </p>
            
            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex bg-white rounded-full shadow-2xl overflow-hidden">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Rechercher un service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-800 focus:outline-none"
                  />
                </div>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Catégories:</span>
            </div>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grille des annonces */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredAnnonces.length} service{filteredAnnonces.length > 1 ? 's' : ''} disponible{filteredAnnonces.length > 1 ? 's' : ''}
          </h2>
          <div className="text-sm text-gray-600">
            Triés par pertinence
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredAnnonces.map((annonce) => (
            <AnnonceCard key={annonce.id} {...annonce} />
          ))}
        </div>

        {filteredAnnonces.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Aucun service trouvé</h3>
            <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>

      {/* Section CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Vous êtes un professionnel ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez notre plateforme et développez votre activité
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Devenir Prestataire
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AnnonceListPage;