import homeLogo from '../../assets/capsule.png'
import './Home.css';
function Home() {
    return (
        <>
        <div className="bg-orange-700 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Confira nossos produtos e promoções!</p>
  
            <div className="flex justify-around gap-4">
              <button className='rounded bg-white text-orange-700 py-2 px-4'>Ver produtos</button>
            </div>
            </div>
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;