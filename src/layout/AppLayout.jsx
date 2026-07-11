import styles from './appLayout.module.css'
import Header from '@/components/header/Header';
import Content from '@/components/content/Content';

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