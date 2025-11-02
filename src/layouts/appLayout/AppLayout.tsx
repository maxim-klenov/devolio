import Content from '@/components/content/Content';
import styles from './appLayout.module.css'

const AppLayout = () => {
  return ( 
    <div className={styles.layout}>
      {/* header content footer */}
      <Content />
    </div>
   );
}
 
export default AppLayout;