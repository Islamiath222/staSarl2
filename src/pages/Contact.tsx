import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useTranslation } from "../translations";



const Contact = () => {
  const { t, language } = useTranslation(); // use global translation context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return t.contact.form.nameRequired;
    if (!formData.email.trim()) return t.contact.form.emailRequired;
    if (!/\S+@\S+\.\S+/.test(formData.email)) return t.contact.form.emailInvalid;
    if (!formData.message.trim()) return t.contact.form.messageRequired;
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const error = validateForm();
  if (error) {
    alert(error);
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/mqaylzln", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // ✅ Reset success message after 4 seconds
      setTimeout(() => setIsSubmitted(false), 4000);
    } else {
      alert(language === "fr" ? "Erreur lors de l’envoi du message." : "Error sending message.");
    }
  } catch (error) {
    alert(language === "fr" ? "Problème de connexion." : "Network error.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t.contact.hero.title} - STA</title>
        <meta
          name="description"
          content="Contactez STA pour toutes vos questions sur nos produits de transformation alimentaire naturelle."
        />
      </Helmet>

      {/* Fixed Social Media Icons */}
<div className="
  fixed z-50 flex gap-3 md:gap-4
  md:flex-col
  md:left-4 md:top-1/2 md:-translate-y-1/2
  bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0
  bg-white/80 md:bg-transparent rounded-full md:rounded-none px-4 py-2 md:px-0 md:py-0 shadow-md md:shadow-none
">
  <a href="https://www.facebook.com/share/16krEbxqqn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
    className="bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg w-9 h-9 md:w-12 md:h-12">
    <FaFacebook className="text-base md:text-xl" />
  </a>
  <a href="https://www.instagram.com/peti_tplaisir1?igsh=bGpuNGFxMWRhdnlr&utm_source=qr" target="_blank" rel="noopener noreferrer"
    className="bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg w-9 h-9 md:w-12 md:h-12">
    <FaInstagram className="text-base md:text-xl" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
    className="bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg w-9 h-9 md:w-12 md:h-12">
    <FaLinkedin className="text-base md:text-xl" />
  </a>
  <a href="https://www.tiktok.com/@petit_plaisir1?_t=ZM-8xWsRsVPz4a&_r=1" target="_blank" rel="noopener noreferrer"
    className="bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg w-9 h-9 md:w-12 md:h-12">
    <FaTiktok className="text-base md:text-xl" />
  </a>
</div>

      
     {/* Hero Section */}
<section className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] overflow-hidden">
  <img
    src="/images/contactUs.png"
    alt="STA Contact Banner"
    className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
  />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
    <div className="bg-Green/20 backdrop-blur-md rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg border border-white/30 max-w-2xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black drop-shadow-lg mb-4">
        {language === "fr" ? "Contactez Nous" : "Contact Us"} <br />
      </h1>
      <p className="text-white text-base sm:text-lg md:text-xl font-medium drop-shadow">
        {language === "fr"
          ? "Nous sommes là pour vous aider ! N’hésitez pas à nous contacter pour toute question ou demande concernant nos produits de transformation alimentaire naturelle."
          : "We're here to help! Reach out with any questions or inquiries about our natural food processing products."}
      </p>
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
           <form onSubmit={handleSubmit} className="space-y-6">
  <div>
    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
      {t.contact.form.name}
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
      {t.contact.form.email}
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
      {t.contact.form.message}
    </label>
    <textarea
      id="message"
      name="message"
      rows={6}
      value={formData.message}
      onChange={handleInputChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-vertical"
      required
    ></textarea>
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300"
  >
    {isSubmitting ? (language === "fr" ? "Envoi..." : "Sending...") : t.contact.form.submit}
  </button>

  {/* ✅ Show success message below button */}
  {isSubmitted && (
    <p className="mt-4 text-green-600 text-center font-medium">
      ✅ {language === "fr" ? "Message envoyé avec succès !" : "Message sent successfully!"}
    </p>
  )}
</form>


            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {t.contact.info.title}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{t.contact.info.address}</h3>
                    <p className="text-gray-600">{t.contact.info.addressValue}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{t.contact.info.phone}</h3>
                    <p className="text-gray-600">{t.contact.info.phoneValue}</p>
                  </div>
                </div>

              

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">H</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{t.contact.info.hours}</h3>
                    <p className="text-gray-600">{t.contact.info.hoursValue}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
  <iframe
    title="STA Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23987.672804640883!2d2.6125079623675376!3d9.382845246299166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1032103c32408815%3A0xc8e0ed38829dad27!2sGanou%2C%20Parakou%2C%20Benin!5e1!3m2!1sen!2sgh!4v1757816570630!5m2!1sen!2sgh" 
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            {language === "fr" ? "Explorez nos produits" : "Explore our products"}
          </h2>
          <Link
            to="/brands"
            className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {language === "fr" ? "Découvrir nos marques" : "Discover our brands"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
