import React, { useState } from 'react';


interface FormState {
  nombre: string;
  apellido: string;
  email: string;
  mensaje: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setMessage(null); 

   
    const formspreeUrl = "https://formspree.io/f/mdkpqydp"; 

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Importante para recibir respuestas JSON de Formspree
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        setForm({ 
          nombre: '',
          apellido: '',
          email: '',
          mensaje: '',
        });
      } else {
        const data = await response.json();
        setStatus('error');
       
        setMessage(data.errors ? data.errors.map((err: any) => err.message).join(', ') : 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
      setMessage('No se pudo conectar con el servidor. Por favor, revisa tu conexión a internet.');
    }
  };

  return (
    <section className="contact-form-section">
      <div className="form-wrapper">
        <h2>Escribinos</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            name="nombre"
            placeholder="Nombre"
            onChange={handleChange}
            value={form.nombre}
            required 
          />
          <input
            name="apellido"
            placeholder="Apellido"
            onChange={handleChange}
            value={form.apellido}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows={4}
            onChange={handleChange}
            value={form.mensaje}
            required
          />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando...' : 'Enviar'}
          </button>

          
          {message && (
            <p className={`form-status-message ${status}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}