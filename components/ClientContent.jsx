import Link from 'next/link'
import Image from 'next/image'

const ClientContent =(props)=>{
    return(
        <li><Link href={props.Url}><a><Image src={props.ImgSrc} alt="" height={45} width={100} /></a></Link></li>
    )    
}
export default ClientContent;