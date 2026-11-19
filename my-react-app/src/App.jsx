import Header from './components/header.jsx';
import Card from './components/card.jsx';
import danaImage from '../images/Dana.png';
import davidImage from '../images/David.png';
import galitImage from '../images/Galit.png';
import Footer from './components/footer.jsx';
import styles from './components/App.module.css';


function App() {

  function handleClick() {
    console.log('Profile clicked!');
  }

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.cards}>
        <Card
          name="Dana"
          description="Software Developer"
          avatar={danaImage}
          fn={handleClick}
          personType="Friend"
        />

        <Card
          name="David"
          description="English teacher"
          avatar={davidImage}
          fn={handleClick}
          personType="Teacher"
        />

        <Card
          name="Galit"
          description="Medical student"
          avatar={galitImage}
          fn={handleClick}
          personType="Student"
        />
      </div>
      <Footer />
    </div>
  );
}


export default App;