import Resource from "./Resource"

const ShowCat = () => {

    const webURL = `https://api.thecatapi.com/v1/images/search?limit=50`
    
    const render = ( data ) => {

        if (data.loading === true) return null;
        
        console.log('got the data', data);
    }

    return(
        <div className="">
            <h1>in ShowCat</h1>

            <Resource path={webURL} render={ render } />
        </div>
    )
}


export default ShowCat