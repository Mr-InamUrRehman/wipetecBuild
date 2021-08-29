import Image from 'next/image'
const Loader =()=>{
    return(
        <>
         <div className="LoaderSec">
            <Image src="/loader.gif" alt="Loader" width={240} height={240}/>
         </div>
        </>
    )
}
export default Loader;