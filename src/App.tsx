import Header from './components/Header'
import styles from './App.module.css';
import Cta from './components/Cta';
import Skils from './components/Skils';
import SoftSkills from './components/SoftSkills/SoftSkills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {

  return (
    <main>
      <Header />
      <section className={styles.container}>
        <Cta />
        <Skils />
        <SoftSkills />
        <Projects />
        <Contacts />
        <Footer />
      </section>
    </main>
  )
}

export default App
