import Link from 'next/link'
import styles from '../styles/Style.module.css'
const Button =(props)=>{
    return (
        <Link href={props.Url}><a className={styles.btnTheme}>{props.Title}</a></Link>
    )
}
export default Button;