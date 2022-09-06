import './assets/css/global.css'
import { Routes, Route } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { ToyApp } from './views/toy-app'
import { ToyEdit } from './views/toy-edit'
import { ToyDetails } from './views/toy-details'

function App() {
  return (
    <div className="main-app">
      <AppHeader/>
      <main className='container'>
        <Routes>
          <Route path='toy/edit/:id' element={<ToyEdit/>} />
          <Route path='toy/edit' element={<ToyEdit/>} />
          <Route path='toy/:id' element={<ToyDetails/>} />
          {/* <Route path='about' element={<About />} >
            <Route path='team' element={<Team />} />
            <Route path='vision' element={<Vision />} />
          </Route> */}
          <Route path='' element={<ToyApp/>} />
        </Routes>
      </main>

      <footer>
        <section className='container'>
          toysRights 2022 &copy;
        </section>
      </footer>

    </div>
  );
}


export default App;
