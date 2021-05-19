import './styles_components/Header.css'
import car from './static_files/car.png'

const Header = (props) =>{
    return(
        <div className = 'Header_div'>
            <img className ='Header_img' src ={car}/>
            <div className='Header_temp'>
                <h1 className='h_header'>Simferopol</h1>
                <h1 className='h_header'>{props.temp}&deg;</h1>
                
            </div>
        </div>
    )
}
export default Header