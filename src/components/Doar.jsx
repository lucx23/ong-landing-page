import React from 'react'
import Modal from './Modal.jsx'
import { useState } from 'react'

const Doar = () => {
    const activeModal = (e) => {
        e.preventDefault()
        const nome = document.getElementById('inputNome').value;
        const email = document.querySelector('input[type="email"]').value;
        const valor = document.querySelector('input[type="number"]').value;
        const metodo = document.querySelector('select').value;
        if (!nome || !email || !valor || !metodo) {
            alert('Por favor, preencha todos os campos antes de doar.');
            return;
        }

        if (valor < 2) {
            alert('O valor mínimo para doação é R$2,00.');
            return;
        }

        setOpenModal(true)
        nome.value = '';
        email.value = '';
        valor.value = '';
    }

    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-4 gap-2 text-white max-w-3xl md:max-w-7xl mx-auto mb-10' id='doar'>
            <div className='bg-linear-to-br from-blue-500 rounded-r-4xl rounded-tl-3xl to-purple-400 p-6'>
                <h3 className='font-bold text-2xl md:text-3xl'>Sua Doação Faz a Diferença</h3>
                <p className='mb-4'>Ao contribuir com nossa ONG, você está ajudando a transformar vidas e construir um futuro melhor para aqueles que mais precisam. Cada doação, grande ou pequena, tem um impacto significativo em nossos projetos e iniciativas.</p>
                <img src="https://regenbrampton.com/wp-content/uploads/2023/08/How-Does-Volunteering-Help-the-Community_-Hero.jpg" alt="Voluntariado" className='rounded-md' />
            </div>

            <div>
                <form className='flex flex-col gap-4 p-6 bg-gray-100 rounded-l-4xl rounded-tr-4xl h-full justify-center text-black'>
                    <h3 className='text-2xl text-blue-600 font-bold text-center'>Formulário de Doação</h3>
                    <input type="text" placeholder='Nome Completo' className='p-2 border border-gray-300 rounded outline-0 focus:ring-2 ring-blue-400 transition-all duration-300' id='inputNome' />
                    <input type="email" placeholder='Email' className='p-2 border border-gray-300 rounded outline-0 focus:ring-2 ring-blue-400 transition-all duration-300' />
                    <div className='relative'>
                        <input type="number" placeholder='Valor da Doação (R$)' className='w-full py-2 px-7 border border-gray-300 rounded outline-0 focus:ring-2 ring-blue-400 transition-all duration-300' />
                        <p className='absolute top-2 left-2'>R$</p>
                    </div>
                    <select className='p-2 border border-gray-300 rounded outline-0 focus:ring-2 ring-blue-400 transition-all duration-300' >
                        <option value="">Método de Pagamento</option>
                        <option value="cartao">Cartão de Crédito</option>
                        <option value="boleto">Boleto Bancário</option>
                        <option value="pix">PIX</option>
                    </select>
                    <button type="submit" className='bg-blue-500 text-white py-4 w-full md:w-xs mx-auto cursor-pointer rounded-lg hover:scale-105 transition-all duration-300' onClick={(e) => activeModal(e)}>Doar Agora</button>
                </form>
                <Modal isOpen={openModal} isClose={() => setOpenModal(false)} />
            </div>
        </div>
    )
}

export default Doar
