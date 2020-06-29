const selectedCharacters = []
let id = 1
let team = 'BLUE'

module.exports = {
    getSelectedChars: (req, res) => {
        res.status(200).send(selectedCharacters)
    },

    selectCharacter: (req, res) => {
        const {characters} = req.body;
        console.log(req.body)

        characters.id = id
        id++

        characters.team = team

        selectedCharacters.push(characters)
        res.status(200).send(selectedCharacters)
    },

    editTeam: (req, res) => {
        const {id} = req.params
        const {team} = req.body

        const index = selectedCharacters.findIndex(e => e.id === +id)
        selectedCharacters[index].team = team
        res.status(200).send(selectedCharacters)
        
    },

    unselectCharacter: (req, res) => {
        const {id} = req.params

        const index = selectedCharacters.findIndex(e => e.id === +id)
        selectedCharacters.splice(index, 1)
        res.status(200).send(selectedCharacters)
    }
}