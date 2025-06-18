import React, { useState } from 'react';
import { Star, MapPin, Clock, Award } from 'lucide-react';

const AnnonceCard = ({ id, title, location, price, image, rating, reviews, category, isNew, serviceProvider }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        {isNew && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
            NOUVEAU
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{rating}</span>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
        </div>
        
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 hover:text-teal-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-400 rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">{serviceProvider}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-500">Dispo 24h</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-800">{price} DH</span>
            <span className="text-sm text-gray-500 ml-1">/ service</span>
          </div>
          <button 
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isHovered 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg' 
                : 'bg-teal-600 text-white hover:bg-teal-700'
            }`}
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnonceCard;