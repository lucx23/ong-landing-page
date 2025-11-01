import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return (
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='relative h-[70vh] bg-cover md:h-screen w-full overflow-hidden flex justify-center items-center'>
            <img src="https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg" alt="Imagem de voluntariado" className='h-full w-full inset-0 object-cover opacity-40' />
            <div className='absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/90 via-transparent to-black/90 flex flex-col items-center justify-center text-center text-white px-4'>
                <h2 className='text-2xl md:text-6xl font-bold mb-4'>Junte-se a Nós para Fazer a <span className='text-blue-500'>Diferença</span>!</h2>
                <p className='text-md md:text-2xl mb-6 max-w-3xl'>Sua contribuição pode transformar vidas. Doe, voluntarie-se e ajude-nos a construir um futuro melhor para todos.</p>
                <motion.a 
                animate={{scale: [1, 1.4, 1], rotate: [0, 5, -5, 0]}}
                transition={{duration: 1, repeat: Infinity, ease: "easeInOut"}}
                href="#doar" className='absolute bottom-20 bg-linear-to-br from-blue-500 to-purple-400 px-5 py-3 text-1xl md:text-3xl hover:shadow-lg hover:shadow-purple-600 transition-all hover:scale-105 duration-400 font-bold rounded-full'>Doar <FontAwesomeIcon icon={faHeart} /></motion.a>
            </div>
        </motion.div>
    )
}

export default Hero
