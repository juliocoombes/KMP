import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState<string>('');

  // Anotamos e como evento de formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // lógica de suscripción...
    console.log('Suscribiendo:', email);
  };

  // Anotamos e como evento de input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-white py-8 text-center">
      <p className="mb-4">Suscribite a nuestro newsletter</p>
      <form onSubmit={handleSubmit} className="flex justify-center space-x-2">
        <input
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Suscribirse
        </button>
      </form>
    </div>
  );
}
