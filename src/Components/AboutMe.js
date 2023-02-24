import '../App.css';
import { ONE, MyPhoto } from './Images';

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className='AboutMeText'>
        <h1>About me</h1>
        <p>I’m software developer and this is my portfolio.
            I’m software developer and this is my portfolio. I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.</p>
        <div className='AboutMeLINE'>
            <div className='AboutMeL'>
                <div className='AboutMeLine'>
                    <img className='number' src={ONE}/><p>Lorem Ipsum Description Text</p>
                </div>
                <div className='AboutMeLine'>
                    <img className='number' src={ONE}/><p>Lorem Ipsum Description Text</p>
                </div>   
            </div>
            <div className='AboutMeL'>
                <div className='AboutMeLine'>
                    <img className='number' src={ONE}/><p>Lorem Ipsum Description Text</p>
                </div>
                <div className='AboutMeLine'>
                    <img className='number' src={ONE}/><p>Lorem Ipsum Description Text</p>
                </div>   
            </div>

        </div>
      </div>
      <div className='Photo'>
      <img className='Photo' src={MyPhoto}/>
      </div>      
    </div>
  );
}
export default AboutMe;