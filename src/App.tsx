import './App.css'
import MainLayout from './components/templates/MainLayout'
import LoginTemplates from './components/templates/LoginTemplate';

function App() {
  return (
    <>
      <MainLayout children={ <LoginTemplates /> } />
    </>
  )
}

export default App
