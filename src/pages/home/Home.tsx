import styles from './Home.module.css'
import Button from '../../components/Button/Button';
import Search from '../../components/Search/Search';
import Veiculo from '../../components/Veiculos/Veiculos';

const Home = () => {

  return (
    <div>
      <main className={styles.containerMain}>
        <Search/>
        <Button/>
        <Veiculo/>
      </main> 
    </div>
  );
};

export default Home;
