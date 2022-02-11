export const getData = async ( url, changeState ) => {
    const res = await fetch( url )
    const data = await res.json()
    changeState( data.results )    
}