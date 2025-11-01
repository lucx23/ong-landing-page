import { dialog } from 'framer-motion/client'
import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ isOpen, isClose }) => {
    if (isOpen) {
        return (
            <motion.dialog open 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='fixed top-0 left-0 right-0 z-50 p-4 bg-black/40 w-full h-screen'>
                <div className='fixed top-[50%] left-[50%] w-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center px-4'>
                    <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center'>
                        <h2 className='text-2xl font-bold mb-4'>Obrigado pela sua Doação!</h2>
                        <p className='mb-6'>Sua contribuição faz uma grande diferença. Agradecemos seu apoio à nossa causa.</p>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all cursor-pointer' onClick={isClose}>Fechar</button>
                    </div>
                </div>
            </motion.dialog>
        )
    }

    return null;
}

export default Modal
