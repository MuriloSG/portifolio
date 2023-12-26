import styles from './Logo.module.css'
const Logo = () => {
  return (
    <span className={styles.Name}><span className={styles.SymbolOne}>{'<'}</span>{'Murilo.dev'}<span className={styles.SymbolTwo}>{'/>'}</span></span>
  )
}
export default Logo;
