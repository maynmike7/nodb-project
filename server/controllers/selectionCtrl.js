const selectedChar = []
let id = 1

module.exports = {
    getSelectedChars: (req, res) => {
        res.status(200).send(selectedChar)
    },
    selectChar: (req, res) => {
        const {char} = req.body

        char.id = id
        id++

        selectedChar.push(character)
        res.status(200).send(selectedChar)
    }
}