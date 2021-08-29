import Link from 'next/link'
import { useRouter } from "next/router";

const Nav =(navProps)=>{
    const router = useRouter();
    return(
        <li><Link href={navProps.NavLink}><a>{navProps.NavTitle}</a></Link></li>
    )
}

export default Nav;