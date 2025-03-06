const apiKey = 'caVABF0xDKsY5n97xKnXsipo9gtajx3P'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

//promesa en cadena 
peticion
    .then( resp => resp.json())
    .then( ({ data }) => {
        // console.log( data.images.original.url )
        // desetructuracion
        const { url } = data.images.original
        
        const img = document.createElement('img')
        img.src = url;
        document.body.append( img )
    })
    .catch( console.warn)
