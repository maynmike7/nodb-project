const express = require('express')
const app = express()
const charactersCtrl = require('./controllers/charactersCtrl')
const selectionCtrl = require('./controllers/selectionCtrl')

app.use(express.json())

app.get('/api/character-selection', charactersCtrl.getCharacters)

app.get('/api/selected-character', selectionCtrl.getSelectedChars)
app.post('api/selected-character', selectionCtrl.selectChar)

app.listen(4040, () => console.log('Server is running on 4040'))

