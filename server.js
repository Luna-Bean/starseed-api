const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();



app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:starseedName', (req, res) => {
    const theStarseedNames = req.params.starseedName.toLowerCase()
    if(starseeds[theStarseedNames]){
        res.json(starseeds[theStarseedNames])
    }else{
        res.json(starseeds['humans'])
    }
})

const starseeds = {
    'humans': {
        'speciesName' : 'Humans',
        'homeworld': 'Earth',
        'location': 'Alpha Quadrant',
        'traits': 'two eyes, two ears, nose middle of face, bipedal',
        'image': 'http://fq8ku9wqwk7gai1z3frl16nd.wpengine.netdna-cdn.com/wp-content/uploads/2017/08/image9.jpeg'
    },

    'lyrans':{
        'speciesName' : 'Lyrans',
        'homeworld': 'Vega',
        'location': 'Lyra constellation',
        'traits': ' elder energy, strong sacral and root chakra, drawn to magick, keeper of ancient knowledge',
        'image': 'https://i.pinimg.com/736x/80/bb/d8/80bbd89bbd6c2202bffeffc28802afd6.jpg'
    },

    'pleiadians':{
        'speciesName' : 'Pleiadians',
        'homeworld': 'Pleiades',
        'location': 'Messier 45 and the Seven Sistars in the Taurus Constellation',
        'traits': 'gentle in nature, people-pleasers, most likely to be INFJ, INTJ, INTP, INFP or ISFP personality',
        'image': 'https://proofofalien.com/wp-content/uploads/2016/03/Pleiadian-Alien.jpg'
    },

    'sirians':{
        'speciesName' : 'Sirians',
        'homeworld': 'Sirius A and Sirius B',
        'location': 'Alpha Canis Majoris',
        'traits': 'very open-minded, struggle to express personal feelings, drawn to caring for the Earth',
        'image': 'https://i.pinimg.com/originals/e7/c2/4a/e7c24a91bc21df341d93cdef03881c59.jpg'
    },

    'arcturians':{
        'speciesName' : 'Arcturians',
        'homeworld': 'Arcturus',
        'location': 'Bootes constellation',
        'traits': 'charismatic, telepathic, natural born leaders',
        'image': 'https://matrixdisclosure.com/wp-content/uploads/2017/04/Arcturian-Aliens-Facts.jpg'
 },

    'andromedans':{
        'speciesName' : 'Andromedans',
        'homeworld': 'Andromeda',
        'location': 'M31 or galaxy of Andromeda',
        'traits': 'pure child-like energy, gifted at accessing Akashic Records, know they have a purpose but may not know what it is',
        'image': 'https://i.pinimg.com/originals/89/04/a5/8904a5577daa50d64b523a47d89022f9.jpg'
    },

    'blue ray beings':{
        'speciesName' : 'Blue Rays',
        'homeworld': 'unknown',
        'location': 'unknown',
        'traits': 'highly sensitive beings, help to form like-for-like communities, may be a mix of pleiadan and sirian',
        'image': 'https://4.bp.blogspot.com/-HI0IPKIcBUo/V5QwpgOQI9I/AAAAAAAAqEo/btFPz0Fw-vg4gLq7Z5UM7AL8nweg5he1wCLcB/s1600/altarian.jpg'
     }
}


app.listen(process.env.PORT || PORT, () => {
    console.log('Server be running mane')
})