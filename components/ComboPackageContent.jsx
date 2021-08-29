const ComboPackageContentTitle =(props)=>{
    return(
        <h6>{props.Title}</h6>
    )
}

const ComboPackageContentList =(props)=>{
    
    return(
        <li>{props.List}</li>
    )
}

export {ComboPackageContentTitle, ComboPackageContentList};