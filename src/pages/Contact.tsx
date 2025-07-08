
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { Helmet } from 'react-helmet';


const Contact = () => {
  const [language, setLanguage] = useState('fr');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        brands: 'Nos Marques',
        about: 'À Propos',
        contact: 'Contact',
        back: 'Retour à l\'accueil'
      },
      hero: {
        title: 'Contactez-nous',
        subtitle: 'Nous sommes là pour répondre à toutes vos questions'
      },
      form: {
        title: 'Envoyez-nous un message',
        name: 'Nom complet',
        email: 'Adresse e-mail',
        message: 'Votre message',
        submit: 'Envoyer le message',
        submitting: 'Envoi en cours...',
        success: 'Message envoyé avec succès!',
        nameRequired: 'Le nom est requis',
        emailRequired: 'L\'email est requis',
        emailInvalid: 'Adresse email invalide',
        messageRequired: 'Le message est requis'
      },
      info: {
        title: 'Informations de contact',
        address: 'Adresse',
        addressValue: 'Qtier Ganou, Parakou - Bénin',
        phone: 'Téléphone',
        phoneValue: '+229 01 97 79 46 25',
        email: 'E-mail',
        emailValue: 'sta.petitplaisir@gmail.com',
        hours: 'Heures d\'ouverture',
        hoursValue: 'Lun - Ven: 8h00 - 18h00'
      }
    },
    en: {
      nav: {
        home: 'Home',
        brands: 'Our Brands',
        about: 'About Us',
        contact: 'Contact',
        back: 'Back to home'
      },
      hero: {
        title: 'Contact Us',
        subtitle: 'We are here to answer all your questions'
      },
      form: {
        title: 'Send us a message',
        name: 'Full name',
        email: 'Email address',
        message: 'Your message',
        submit: 'Send message',
        submitting: 'Sending...',
        success: 'Message sent successfully!',
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email address',
        messageRequired: 'Message is required'
      },
      info: {
        title: 'Contact Information',
        address: 'Address',
        addressValue: 'Qtier Ganou, Parakou - Bénin',
        phone: 'Phone',
        phoneValue: '+229 01 97 79 46 25',
        email: 'Email',
        emailValue: 'sta.petitplaisir@gmail.com',
        hours: 'Business Hours',
        hoursValue: 'Mon - Fri: 8:00 AM - 6:00 PM'
      }
    }
  };

  const t = translations[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return t.form.nameRequired;
    if (!formData.email.trim()) return t.form.emailRequired;
    if (!/\S+@\S+\.\S+/.test(formData.email)) return t.form.emailInvalid;
    if (!formData.message.trim()) return t.form.messageRequired;
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
   <div className="min-h-screen bg-white">
     <Helmet>
      <title>{language === 'fr' ? 'À Propos - STA' : 'About Us - STA'}</title>
      <meta name="description" content="Découvrez l’histoire, la mission, et les valeurs de STA, votre expert en transformation alimentaire naturelle." />
    </Helmet>
     {/* Fixed Social Media Icons */}
     <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
       <a 
         href="https://www.facebook.com/share/16krEbxqqn/?mibextid=wwXIfr" 
         target="_blank" 
         rel="noopener noreferrer"
         className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
       >
         <FaFacebook size={20} />
       </a>
       <a 
         href="https://instagram.com" 
         target="_blank" 
         rel="noopener noreferrer"
         className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
       >
         <FaInstagram size={20} />
       </a>
       <a 
         href="https://linkedin.com" 
         target="_blank" 
         rel="noopener noreferrer"
         className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
       >
         <FaLinkedin size={20} />
       </a>
       <a 
         href="https://www.tiktok.com/@petit_plaisir1?_t=ZM-8xWsRsVPz4a&_r=1" 
         target="_blank" 
         rel="noopener noreferrer"
         className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
       >
         <FaTiktok size={20} />
       </a>
      </div>
<a 
  href="https://www.tiktok.com/@yourusername" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-orange-400 transition-colors"
>
  <FaTiktok size={24} />
</a>


      {/* Header */}
     <header className="bg-white shadow-md fixed w-full top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
         <div className="h-full flex items-center mr-4">
  <img
    src="/images/Logo.png"
    alt="STA Logo"
    className="h-full max-h-14 w-auto object-contain"
  />
</div>


          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.home}
            </Link>
            <Link to="/brands" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.brands}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.about}
            </Link>
            <Link to="/contact" className="text-orange-600 font-medium">
              {t.nav.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded ${language === 'fr' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded ${language === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-32 mt-20">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            {t.nav.back}
          </Link>
          <h1 className="text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl opacity-90">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{t.form.title}</h2>
              
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {t.form.success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-vertical"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300"
                >
                  {isSubmitting ? t.form.submitting : t.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">{t.info.title}</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{t.info.address}</h3>
                    <p className="text-gray-600">{t.info.addressValue}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{t.info.phone}</h3>
                    <p className="text-gray-600">{t.info.phoneValue}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{t.info.email}</h3>
                    <p className="text-gray-600">{t.info.emailValue}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">H</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{t.info.hours}</h3>
                    <p className="text-gray-600">{t.info.hoursValue}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-gray-500" size={48} />
                  <p className="text-gray-600 font-medium">
                    {language === 'fr' ? 'Carte Google Maps' : 'Google Maps'}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {language === 'fr' ? 'Localisation de notre entreprise' : 'Our company location'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            {language === 'fr' ? 'Explorez nos produits' : 'Explore our products'}
          </h2>
          <Link
            to="/brands"
            className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {language === 'fr' ? 'Découvrir nos marques' : 'Discover our brands'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
