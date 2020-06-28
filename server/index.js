const express = require('express')
const charactersCtrl = require('./controllers/charactersCtrl')
const selectionCtrl = require('./controllers/selectionCtrl')
const app = express()

app.use(express.json())

app.get('/api/character-selection', charactersCtrl.getCharacters)

app.get('/api/selected-character', selectionCtrl.getSelectedChars)
app.post('/api/selected-character', selectionCtrl.selectCharacter)
app.delete('/api/selected-character/:id', selectionCtrl.unselectCharacter)

app.listen(4040, () => console.log('Server is running on 4040'))

