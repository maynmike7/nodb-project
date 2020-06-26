const axios = require('axios')

module.exports = {
    getCharacters: (req,res) => {
        const charactersArray = []

        axios.get('https://api.kuroganehammer.com/api/characters/26')
        .then(response => {
            charactersArray.push(response.data)
            axios.get('https://api.kuroganehammer.com/api/characters/27')
            .then(response => {
                charactersArray.push(response.data)
                axios.get('https://api.kuroganehammer.com/api/characters/10')
                .then(response => {
                    charactersArray.push(response.data)
                    axios.get('https://api.kuroganehammer.com/api/characters/21')
                    .then(response => {
                        charactersArray.push(response.data)
                        axios.get('https://api.kuroganehammer.com/api/characters/48')
                        .then(response => {
                            charactersArray.push(response.data)
                            axios.get('https://api.kuroganehammer.com/api/characters/4')
                            .then(response => {
                                charactersArray.push(response.data)
                                axios.get('https://api.kuroganehammer.com/api/characters/36')
                                .then(response => {
                                    charactersArray.push(response.data)
                                    axios.get('https://api.kuroganehammer.com/api/characters/56')
                                    .then(response => {
                                        charactersArray.push(response.data)
                                        axios.get('https://api.kuroganehammer.com/api/characters/20')
                                        .then(response => {
                                            charactersArray.push(response.data)
                                            axios.get('https://api.kuroganehammer.com/api/characters/14')
                                            .then(response => {
                                                charactersArray.push(response.data)
                                                axios.get('https://api.kuroganehammer.com/api/characters/41')
                                                .then(response => {
                                                    charactersArray.push(response.data)
                                                    axios.get('https://api.kuroganehammer.com/api/characters/18')
                                                    .then(response => {
                                                        charactersArray.push(response.data)
                                                        res.status(200).send(charactersArray)
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        .catch(err => res.status(500).send(err))
    }
}