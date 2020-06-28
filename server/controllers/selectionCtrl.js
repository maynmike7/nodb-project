const selectedCharacters = []
let id = 1

module.exports = {
    getSelectedChars: (req, res) => {
        res.status(200).send(selectedCharacters)
    },

    selectCharacter: (req, res) => {
        const {characters} = req.body;
        console.log(req.body)

        characters.id = id
        id++

        selectedCharacters.push(characters)
        res.status(200).send(selectedCharacters)
    },

    editTeam: (req, res) => {

    },

    unselectCharacter: (req, res) => {
        const {id} = req.params

        const index = selectedCharacters.findIndex(e => e.id === +id)
        selectedCharacters.splice(index, 1)
        res.status(200).send(selectedCharacters)
    }
}