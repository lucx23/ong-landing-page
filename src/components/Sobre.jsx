import React from 'react'
import Prestar from './Prestar.jsx'

const Sobre = () => {
  return (
    <div id='sobre' className='text-white text-center mt-5 max-w-2xl md:max-w-5xl mx-auto bg-gray-800 rounded-xl p-5 mb-10'>
      <h2 className='font-bold text-2xl md:text-4xl mb-4'>Sobre Nós</h2>
      <p className='text-md md:text-lg mb-6'>Somos uma organização sem fins lucrativos dedicada a ajudar nossa comunidade. Nossos programas incluem apoio educacional, assistência social e projetos de revitalização urbana.</p>
      <img src="https://www.nishantratnakar.com/wp-content/uploads/2016/07/NGO-Non-profit-Photographer-India-Bangalore-Cover-0001.jpg" alt="Imagem de exemplo" className='mt-4 rounded-lg shadow-lg border-2 border-purple-500' />
      <label className='text-xs md:text-lg'>📷Foto de Nishan Trataknar</label>



      <Prestar />
    </div>
  )
}

export default Sobre
