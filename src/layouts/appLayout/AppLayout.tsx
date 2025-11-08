import Content from '@/components/navigation/content/Content';
import styles from './appLayout.module.css'
import Header from '@/components/navigation/header/Header';

const AppLayout = () => {
  return ( 
    <div className={styles.layout}>
      {/* header content footer */}
      <Header />
      <Content />
    </div>
   );
}
 
export default AppLayout;