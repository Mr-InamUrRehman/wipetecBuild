import Image from 'next/image'
import {SpaceBr, SpaceBrBr} from '../components/Space'
import styles from '../styles/Style.module.css'

const ValueContent =(props)=>{
    return(
        <li>
            <div className={styles.ValueBox}>
                <img src={[props.Img]} alt="" height="60px" width="60px"/>
                <SpaceBr/>
                <h3>{props.Title}</h3>
                <SpaceBr/>
                <p>{props.Para}</p>
            </div>
        </li>
    )
}
export default ValueContent;