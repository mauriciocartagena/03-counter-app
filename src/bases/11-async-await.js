

// const getImagenPromesa = () => new Promise( resolve  => resolve('https:///sdasdas'));

// getImagenPromesa().then(console.log);

export const getImagen = async() =>{

    try {
        const apiKey = 'Qb3BktvNtn5q5Hf23amATODT4QksFJmm';

        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        
        // parar crear una imagen en page
        const { url } = data.images.original;

        return url;

        
    } catch (error) {
        //manejo del error
        // console.error(error);

        return 'No existe';
    }

    
    
   
}
getImagen().then();
