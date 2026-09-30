import './App.css'
import github from './assets/code-github-hosting-svgrepo-com.svg'
import './App.scss'
import inst from './assets/instagram-2016-logo-svgrepo-com.svg'
import tele from './assets/telegram-svgrepo-com.svg'
import whats from './assets/whatsapp-color-svgrepo-com.svg'

function App() {

  return (
    <div>
      <nav className='
      flex
      h-[20%]
      w-full
      '>
        <div className='
        m-[10px]
        flex
        flex-row
        h-[20%]
        w-[50%]
        justify-start
        items-center
        gap-[5px]
        '>
            <img src={github} alt='github' className='
             h-[40px]
             w-[40px]
             '/>
             <strong>Ali Ashkestanpor</strong>
        </div>
        <div className='
        m-[10px]
        h-[20%]
        w-[50%]
        flex
        flex-row
        justify-end
        gap-[10px]
        '
        >
        <a href="#" className='no-underline font-bold'>Contact</a>
        <a href="#" className='no-underline font-bold'>About</a>
        </div>
      </nav>
      <div className='
      h-[80vh]
      w-[100vw]
      flex
      flex-row
      '>
      <div className='
      m-[10px]
      h-[80vh]
      w-[10vw]
      flex
      flex-col
      justify-center
      gap-[20px]
      '>
        <a href="https://www.instagram.com"><img src={inst} alt='instagram' className='h-[40px] w-[40px]'></img></a>
        <a href="https://www.telegram.com"><img src={tele} alt='telegram' className='h-[40px] w-[40px]'></img></a>
        <a href="https://www.whatsapp.com"><img src={whats} alt='whatsapp' className='h-[40px] w-[40px]'></img></a>
      </div>
      <div className='
      h-[80vh]
      w-[90vw]
      flex
      flex-col
      justify-start
      text-lg
      '>
        <h1>Front-End Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe nisi incidunt quis! Amet,<br/> atque? Aliquam esse ad reiciendis deleniti inventore eum earum voluptas, accusantium repudiandae<br/> eaque ipsum reprehenderit? Nisi sed repudiandae, labore, sequi inventore tenetur, reiciendis quos<br/> quibusdam saepe distinctio nobis quod dignissimos necessitatibus<br/> vel aliquam adipisci modi mollitia.</p>
      </div>
      </div>
    </div>
  )
}

export default App
