import React from 'react';
import { Phone, Mail, Shield, Car, Home, Heart, Plane, Building, Users, Wrench, Clock, MessageSquare } from 'lucide-react';
import { trackPhoneClick, trackEmailClick, trackWhatsAppClick, trackQuoteRequest } from './components/Analytics';
import './App.css';

// Import des images
import logoNallias from './assets/logo.jpeg';
import autoAssurance from './assets/auto_assurance.jpg';
import habitationAssurance from './assets/habitation_assurance.jpg';
import maladieAssurance from './assets/maladie_assurance.jpg';
import voyageAssurance from './assets/voyage_assurance.jpg';
import multirisquePro from './assets/multirisque_pro.jpg';
import rcPro from './assets/rc_pro.png';
import chantierAssurance from './assets/chantier_assurance.jpg';
import mamadouDiakitePhoto from './assets/mamadou_diakite.jpeg';
import nalliasLogoNew from './assets/nallias_logo_new.jpeg';

const ContactButton = ({ children, href, className = "", onClick }) => (
  <a 
    href={href}
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold ${className}`}
  >
    {children}
  </a>
);

const ProductCard = ({ title, description, features, image, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4 bg-blue-600 p-2 rounded-full">
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-3">
        <ContactButton 
          href="tel:+22375170048" 
          className="flex-1 justify-center"
          onClick={trackPhoneClick}
        >
          <Phone className="w-4 h-4" />
          Appeler
        </ContactButton>
        <ContactButton 
          href="mailto:nalliasagenceexpress@gmail.com" 
          className="flex-1 justify-center bg-gray-600 hover:bg-gray-700"
          onClick={trackEmailClick}
        >
          <Mail className="w-4 h-4" />
          Email
        </ContactButton>
      </div>
    </div>
  </div>
);

function App() {
  const products = [
    {
      title: "Assurance Automobile",
      description: "Protégez votre véhicule, votre responsabilité et vos passagers. Nous vous proposons plusieurs formules adaptées à vos besoins : Tiers simple | Tiers étendu | Tous risques.",
      features: [
        "Prise en charge rapide en cas d'accident",
        "Couverture complète selon votre budget",
        "Garantie responsabilité civile incluse"
      ],
      image: autoAssurance,
      icon: Car
    },
    {
      title: "Assurance Habitation",
      description: "Protégez votre maison contre les imprévus. Incendie, vol, dégâts des eaux… soyez prêt !",
      features: [
        "Couverture des bâtiments et contenus",
        "Assistance 24h/24 en cas de sinistre",
        "Idéale pour locataires et propriétaires"
      ],
      image: habitationAssurance,
      icon: Home
    },
    {
      title: "Assurance Maladie",
      description: "Une santé assurée, une vie tranquille. Que vous soyez salarié, indépendant ou chef d'entreprise :",
      features: [
        "Prise en charge des soins médicaux, hospitalisation, examens",
        "Remboursements rapides",
        "Réseau de soins agréés"
      ],
      image: maladieAssurance,
      icon: Heart
    },
    {
      title: "Assurance Voyage",
      description: "Voyagez en toute sérénité dans le monde entier. Schengen, Afrique, Asie, Amériques : nous couvrons vos déplacements.",
      features: [
        "Assistance médicale à l'étranger",
        "Perte de bagages, annulation, responsabilité civile",
        "Attestation conforme visa Schengen"
      ],
      image: voyageAssurance,
      icon: Plane
    },
    {
      title: "Multirisque Professionnelle",
      description: "Sécurisez vos locaux et votre activité. Incendie, vol, dégâts des eaux, interruption d'activité…",
      features: [
        "Couverture des biens, matériels et stocks",
        "Garantie pertes d'exploitation",
        "Formule adaptée aux TPE, PME, professions libérales"
      ],
      image: multirisquePro,
      icon: Building
    },
    {
      title: "Responsabilité Civile Professionnelle",
      description: "Protégez-vous contre les erreurs, fautes ou omissions. Indispensable pour les professionnels qui conseillent, installent, fabriquent ou gèrent.",
      features: [
        "Prise en charge des dommages causés à des tiers",
        "Défense juridique incluse",
        "Conforme aux exigences réglementaires"
      ],
      image: rcPro,
      icon: Users
    },
    {
      title: "Assurance Tous Risques Chantiers",
      description: "Protégez vos travaux dès le premier coup de pelle. Conçue pour les promoteurs, entreprises de BTP et maîtres d'ouvrage.",
      features: [
        "Dommages sur chantier (effondrement, malfaçons…)",
        "Couverture des équipements et matériaux",
        "Couverture pendant toute la durée des travaux"
      ],
      image: chantierAssurance,
      icon: Wrench
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logoNallias} alt="NALLIAS AGENCE EXPRESS" className="h-16 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-blue-800">NALLIAS AGENCE EXPRESS</h1>
                <p className="text-sm text-gray-600">Votre partenaire de confiance en assurance au Mali</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <ContactButton href="tel:+22375170048">
                <Phone className="w-4 h-4" />
                +223 75170048
              </ContactButton>
              <ContactButton href="mailto:nalliasagenceexpress@gmail.com" className="bg-gray-600 hover:bg-gray-700">
                <Mail className="w-4 h-4" />
                Contact
              </ContactButton>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenue chez Nallias Agence Express
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Vous cherchez une assurance fiable, simple et rapide ? Découvrez nos solutions sur mesure pour protéger ce qui compte le plus pour vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton href="tel:+22375170048" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5" />
              Appelez maintenant
            </ContactButton>
            <ContactButton href="mailto:nalliasagenceexpress@gmail.com" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5" />
              Demandez un devis
            </ContactButton>
          </div>
        </div>
      </section>

      {/* About Mamadou DIAKITÉ Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            À propos de Mamadou DIAKITÉ
          </h2>
          <div className="flex flex-col md:flex-row items-center md:text-left">
            <img src={mamadouDiakitePhoto} alt="Mamadou DIAKITÉ" className="w-48 h-48 rounded-full object-cover mb-8 md:mb-0 md:mr-8" />
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Fondateur de NALLIAS AGENCE EXPRESS, je mets plus de 10 ans d’expertise en assurance dommages au service des particuliers et des entreprises. Mon engagement ? Vous offrir des solutions fiables, humaines et accessibles pour mieux vous protéger au quotidien. À l’écoute, réactif et passionné par mon métier, je vous accompagne avec rigueur et proximité dans toutes vos démarches d’assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About NALLIAS AGENCE EXPRESS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            À propos de NALLIAS AGENCE EXPRESS
          </h2>
          <div className="flex flex-col md:flex-row items-center md:text-left">
            <img src={nalliasLogoNew} alt="NALLIAS AGENCE EXPRESS Logo" className="h-32 w-auto mb-8 md:mb-0 md:mr-8" />
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Créée en février 2011, NALLIAS AGENCE EXPRESS est une agence d’assurance spécialisée dans les produits automobile, habitation, santé, multirisque professionnelle et entreprise. Fondée avec une vision claire : rapprocher l’assurance des réalités maliennes, en alliant proximité, rapidité et transparence.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                👉 Depuis plus de 13 ans, nous aidons nos clients à protéger ce qui compte pour eux, avec des conseils personnalisés et une assistance de confiance.
              </p>
              <p className="text-lg text-gray-700">
                🔒 Notre mission : vous simplifier l’assurance, tout en vous garantissant une couverture solide face aux aléas de la vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos produits d'assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins d'assurance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Horaires d'ouverture
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md inline-block text-left">
            <ul className="text-lg text-gray-700 space-y-2">
              <li><span className="font-semibold">Lundi :</span> 8h à 17h</li>
              <li><span className="font-semibold">Mardi :</span> 8h à 17h</li>
              <li><span className="font-semibold">Mercredi :</span> 8h à 17h</li>
              <li><span className="font-semibold">Jeudi :</span> 8h à 17h</li>
              <li><span className="font-semibold">Vendredi :</span> 8h à 17h</li>
              <li><span className="font-semibold">Samedi :</span> 8h à 12h</li>
              <li><span className="font-semibold">Dimanche :</span> Fermée</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous avez une question ? Un besoin urgent ?
          </h2>
          <p className="text-xl mb-8">
            Parlons-en dès maintenant via appel, WhatsApp ou par email
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ContactButton href="tel:+22375170048" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-6 h-6" />
              +223 75170048
            </ContactButton>
            <ContactButton href="https://wa.me/22369524616" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4">
              <MessageSquare className="w-6 h-6" />
              WhatsApp
            </ContactButton>
            <ContactButton href="mailto:nalliasagenceexpress@gmail.com" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              <Mail className="w-6 h-6" />
              nalliasagenceexpress@gmail.com
            </ContactButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Abdoulaye Fadiga</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Bonjour c'est Abdoulaye un de vos clients fidèles juste pour parler de la fiabilité, l'efficacité, la ponctualité et surtout l'accueille que possède la compagnie NALLIAS AGENCE EXPRESS envers ses aimables clientèle vis à vis dans la commune et avec l'assurance dans la conduite. Vraiment on prie Dieu pour la bonne marche de la compagnie."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Lutan Diakité</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Nallias agence express est une assurance de qualité fiable et réactive je me suis toujours sentie en confiance avec nallias surtout avec Mamadou Diakité qui fait preuve de professionnalisme il est toujours à l'écoute de ces assuré et prêt a les satisfaires"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Gaoussou Diallo</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Je suis pleinement satisfait des services de NALIANCE Assurance, et tout particulièrement de l'accompagnement de Mamadou Diakité, qui fait preuve d'un professionnalisme exemplaire. L'équipe est disponible, réactive et toujours à l'écoute, avec un accueil chaleureux et efficace. Une vraie tranquillité d'esprit au quotidien !"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Ben chaabene Farah</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "L'équipe est professionnelle et à l'écoute, ce qui facilite grandement les démarches. Je recommande vivement !"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  W
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Walet</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Ça fait des années que tous les véhicules de moi et de ma famille sont assurés par cette agence et grâce au professionnalisme de Mr Diakité on a jamais eu de déception de sa part. Je l'encourage dans son travail et le félicite pour sa disponibilité"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Salifou Diarra</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(3)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Cela fait maintenant plus d'une décennie que je suis assuré chez NALLIAS. J'avoue que j'ai trouvé un grand plaisir à cela. En effet, la compagnie est prompt à me rappeler quelques jours à l'avance l'expiration de mon assurance, ce qui me permet d'éviter bien de désagréments."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Pourquoi choisir Nallias Agence Express ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">+10 ans d'expérience</h3>
              <p className="text-gray-600">dans le domaine de l'assurance au Mali</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accompagnement personnalisé</h3>
              <p className="text-gray-600">et humain</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Réactivité, clarté</h3>
              <p className="text-gray-600">et transparence</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Produits solides</h3>
              <p className="text-gray-600">et certifiés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <img src={logoNallias} alt="NALLIAS AGENCE EXPRESS" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold">NALLIAS AGENCE EXPRESS</h3>
                <p className="text-gray-400">Nouvelle Alliance d'Assurances</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactButton 
                href="tel:+22375170048" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={trackPhoneClick}
              >
                <Phone className="w-4 h-4" />
                +223 75170048
              </ContactButton>
              <ContactButton 
                href="https://wa.me/22369524616" 
                className="bg-green-500 hover:bg-green-600"
                onClick={trackWhatsAppClick}
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </ContactButton>
              <ContactButton 
                href="mailto:nalliasagenceexpress@gmail.com" 
                className="bg-gray-600 hover:bg-gray-700"
                onClick={trackEmailClick}
              >
                <Mail className="w-4 h-4" />
                nalliasagenceexpress@gmail.com
              </ContactButton>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NALLIAS AGENCE EXPRESS. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

