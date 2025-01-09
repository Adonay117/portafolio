import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('service_rgn91og', 'template_zewic57', e.target, '7h9XZVRLe6GL1qLr1')
            .then((result) => {
                setMessage('Mensaje enviado exitosamente');
            }, (error) => {
                setMessage('Error al enviar el mensaje, por favor intente nuevamente');
            });
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contacto" className="flex justify-center items-center flex-col px-5 py-2">
            <h1 className="text-[45px] sm:text-[50px] font-semibold text-center my-[40px] sm:pt-5 text-white">
                Contáctame
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[400px] w-full">
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-2 border bg-background border-gray-100/30 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-2 border bg-background border-gray-100/30 rounded"
                />
                <textarea
                    name="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-2 border bg-background border-gray-100/30 rounded"
                />
                <button type="submit" className="p-2 bg-primary text-white rounded">Enviar</button>
            </form>
            {message && <p className=' text-white'>{message}</p>}
        </section>
    );
};

export default Contact;
