import styles from './btn.module.css'
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <div className={styles.containerBtn}>
      <Link  to='/adicionar'><button className={styles.btnAdicionar}>Adicionar</button></Link>
    </div>
    
  )
};

export default Button;
