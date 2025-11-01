import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="text-center bg-linear-to-b from-blue-600/90 to-purple-600/90 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Nossa ONG</h2>
          <p className="text-sm text-center text-gray-200">
            Trabalhamos para promover o bem-estar da comunidade, fortalecendo a cidadania e apoiando quem mais precisa.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Navegação</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#inicio" className="hover:text-white hover:text-xl transition-all">Início</a></li>
            <li><a href="#sobre" className="hover:text-white hover:text-xl transition-all">Sobre</a></li>
            <li><a href="#depoimentos" className="hover:text-white hover:text-xl transition-all">Depoimentos</a></li>
            <li><a href="#doar" className="hover:text-white hover:text-xl transition-all">Doar</a></li>
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h3 className="text-lg font-semibold mb-3">Redes Sociais</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className='hover:bg-blue-600 transition-all duration-300 p-2 rounded-full'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className='hover:bg-sky-600 transition-all duration-300 p-2 rounded-full'><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className='hover:bg-pink-500 transition-all duration-300 p-2 rounded-full'><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-300 mt-8 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Nossa ONG — Todos os direitos reservados.
      </div>

    </footer>
  )
}

export default Footer
