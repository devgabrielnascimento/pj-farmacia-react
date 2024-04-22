import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()

  function logout() {
    alert('Usuário deslogado com sucesso')
    navigate('/login')
}
  return (
    <>
     <div className='w-full bg-orange-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>

            <div className='flex gap-4'>
              <Link to="/produtos" className='hover:underline'>Produtos</Link>
              <Link to="/categorias" className='hover:underline'>Categorias</Link>
              <Link to="/cadastroCategoria" className='hover:underline'>Cadastrar Categoria</Link>
              <Link to='' onClick={logout} className='hover:no-underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar