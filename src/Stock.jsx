
import Amazon from './components/Amazon/Amazon';
import Applehome from './components/Apple/Applehome';
import Metahome from './components/META/Metahome';
import Microsoft from './components/Microsoft/Microsoft';
import Overview from './components/Overview/Overview';
import TeslaHome from './components/Tesla/TeslaHome';

const Stock = () => {
    return (
        <div className='min-h-fit py-5'>
            <div className=' mx-auto  '>
                <h1 className='uppercase font-bold text-3xl text-center'>Stock Market data</h1>
            </div>

            <div className='px-10'>
            <span className='uppercase font-semibold '>Overview</span>
                <Overview></Overview>
            </div>

            <div className='px-10 '>
                <span className='uppercase font-semibold '>Graph Analysis</span>
          
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2'>
                 <Applehome/>
           <Metahome/> 
     <TeslaHome></TeslaHome>
        <Microsoft></Microsoft>
            </div>
           <Amazon></Amazon>  </div>
        </div>
    );
};

export default Stock;