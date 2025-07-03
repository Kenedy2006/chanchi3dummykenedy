import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4">Contáctanos</h1>
          
          {isSubmitted ? (
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">¡Mensaje enviado!</h4>
              <p>Gracias por contactarnos. Te responderemos pronto.</p>
            </div>
          ) : (
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Asunto</label>
                    
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
