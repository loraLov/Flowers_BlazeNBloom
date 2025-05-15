import './WorkingProcess.css';
import image1 from './working1.jpeg';
import image2 from './working2.jpeg';



function WorkingProcess(){
   return(
    <div>
        <div className='headerWorking'>
           <h2 className='textWorking'>Behind the Blooms</h2>
        </div>

        <div className='working_container'>
            <div className='image-layout'>
                <img className='img1' src = {image1} width = '500px' alt = 'working'/>
                <img className='img2' src = {image2} width = '300px' alt = 'working'/>
            </div>

            <div className='txtWorking'>
                <h6 className='working'>Step into the heart of Blaze n’ Bloom. This is where petals meet passion, where every bouquet starts with a story. From early morning flower runs to late-night ribbon ties, we share the quiet beauty of our daily rhythm — the hands, tools, and moments behind each bloom. Come behind the scenes and see how your flowers come to life.</h6>
                 <h6 className='working'>Here, we share our creative rituals, little discoveries, and the quiet joy of building something beautiful by hand.</h6>
                 <h6 className='working'>Here, every stem has a purpose, every bloom a mood. It’s not just floristry — it’s storytelling through petals, captured in the rhythm of our days.</h6>
            </div>

        </div>

        
    </div>
   )
}
export default WorkingProcess;