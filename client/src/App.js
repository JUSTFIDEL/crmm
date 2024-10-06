import './index.css'
import crm from './images/crm_img.png'

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <div>JF-CRM</div>
        <div>
          <button className='button'>Get Started</button>
        </div>
      </header>

      <main className='main'>
        <div className='main_cont'>
          <h1 className='main_title'>
            Meet JF-CRM – The World's Most Popular CRM
          </h1>
          <p className='main_desc'>
            Over 15,000,000 businesses registered with JF-CRM since the launch
            in 2022, making it one of the most widely used CRM solution in the
            world.
          </p>
        </div>
        <div className='centered'>
          <button className='button_01'>Get Started</button>
        </div>
        <img src={crm} alt='crm chat' className='crm_chat' />
      </main>
    </div>
  )
}

export default App
