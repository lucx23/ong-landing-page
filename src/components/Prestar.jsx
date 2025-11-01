import React from 'react'

const Prestar = () => {
    const prestamos = [
        { name: 'Consultoria Educacional', description: 'Oferecemos orientação acadêmica e profissional para jovens em situação de vulnerabilidade.' },
        { name: 'Apoio Psicológico', description: 'Fornecemos suporte emocional e psicológico para indivíduos enfrentando desafios pessoais.' },
        {name: 'Distribuição de Alimentos', description: 'Organizamos campanhas para distribuir alimentos a famílias carentes em nossa comunidade.' },
        {name: 'Reabilitação de Espaços Públicos', description: 'Trabalhamos na revitalização de parques e áreas comunitárias para promover um ambiente saudável.' },
    ]

    return (
        <div className='text-white text-center mt-5 max-w-4xl mx-auto'>
            <h2 className='font-bold text-2xl md:text-4xl mb-4'>Nossos Serviços</h2>
            <ul className={`grid grid-cols-1 backdrop-blur-2xl md:grid-cols-2 p-3 gap-4`}>
                {prestamos.map(prestamo => (
                    <li key={prestamo.name} className=' bg-linear-to-br from-blue-500 to-purple-400 p-6 text-center rounded-lg shadow-md opacity-100 md:opacity-70 hover:opacity-100 hover:scale-105 hover:rotate-1 transition-all duration-300'>
                        <h3 className='font-semibold text-lg'>{prestamo.name}</h3>
                        <p>{prestamo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Prestar
