import './App.css'
import MainLayout from './components/templates/MainLayout'
import LoginTemplates from './components/templates/LoginTemplates';

function App() {
  return (
    <>
      <MainLayout children={ <LoginTemplates /> } />
    </>
  )
}

export default App
