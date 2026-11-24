'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setFormSubmitted(true);
    reset();

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white rounded-lg p-6 md:p-8 border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-ink text-center">Bize Mesaj Gönderin</h2>

      {formSubmitted ? (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 mb-6 text-center">
          <p>Mesajınız için teşekkürler. En kısa sürede size dönüş yapacağız!</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
            Adınız
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 bg-white border ${
              errors.name ? 'border-red-500' : 'border-slate-300'
            } rounded-md text-ink focus:outline-none focus:ring-2 focus:ring-accent`}
            placeholder="Adınız Soyadınız"
            {...register('name', { required: 'Ad gerekli' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
            E-posta
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 bg-white border ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            } rounded-md text-ink focus:outline-none focus:ring-2 focus:ring-accent`}
            placeholder="ornek@email.com"
            {...register('email', {
              required: 'E-posta gerekli',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Geçerli bir e-posta girin',
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-muted mb-1">
            Konu
          </label>
          <input
            id="subject"
            type="text"
            className={`w-full px-4 py-2 bg-white border ${
              errors.subject ? 'border-red-500' : 'border-slate-300'
            } rounded-md text-ink focus:outline-none focus:ring-2 focus:ring-accent`}
            placeholder="Mesaj konusu"
            {...register('subject', { required: 'Konu gerekli' })}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">
            Mesaj
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-2 bg-white border ${
              errors.message ? 'border-red-500' : 'border-slate-300'
            } rounded-md text-ink focus:outline-none focus:ring-2 focus:ring-accent`}
            placeholder="Mesajınızı yazın..."
            {...register('message', { required: 'Mesaj gerekli' })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-accent hover:brightness-95 text-ink font-bold py-3 px-6 rounded-full transition-all shadow-md"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}
