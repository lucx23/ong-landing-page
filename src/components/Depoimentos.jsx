import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Depoimentos = () => {
    const depoimentos = [
        { name: 'João', text: 'Ótima ONG! Fiquei muito satisfeito com o trabalho realizado.' },
        { name: 'Maria', text: 'Fiz uma doação e me senti muito bem ajudando quem precisa.' },
        { name: 'Carlos', text: 'Equipe dedicada e transparente. Recomendo a todos!' },
        { name: 'Ana', text: 'Participei de um evento e foi uma experiência incrível!' },
    ]

    const [depoimento, setDepoimento] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDepoimento(prev => (prev + 1) % depoimentos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id='depoimentos' className='text-white max-w-3xl mx-auto mb-10 p-4'>
            <h2 className='text-3xl font-bold text-center mb-3'>Depoimentos</h2>
            <motion.div 
            initial={{ opacity: 0, y:-50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='bg-gray-800 relative rounded-2xl h-48 flex items-center justify-center overflow-hidden hover:shadow-lg shadow-blue-700/80 transition-all duration-300'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={depoimento}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className='absolute w-full p-4 text-center'>
                        <div className='flex items-center justify-center mb-2'>
                            <FontAwesomeIcon icon={faUser} className='text-3xl' />
                            <h3 className='font-semibold text-3xl'>{depoimentos[depoimento].name}</h3>
                        </div>
                        <p className='text-sky-300 italic text-sm md:text-md lg:text-lg'>"{depoimentos[depoimento].text}"</p>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
            <div className='flex justify-center mt-4 space-x-3'>
                {depoimentos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setDepoimento(i)}
                        className={`w-3 h-3 rounded-full transition-all ${i === depoimento ? 'bg-blue-600 scale-125' : 'bg-gray-500'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    )
}

export default Depoimentos
