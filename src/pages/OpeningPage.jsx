

// this is our logo png file
import img from '../assets/img/logo.png';
// our style file
import '../style/GeneralStyle.css'

const OpeningPage = () => {
    return ( 
        <>
        <img className='main_icon' src={img} />
        </>
     );
}
 
export default OpeningPage;