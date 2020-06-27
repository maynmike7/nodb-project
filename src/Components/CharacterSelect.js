import React, {Component} from 'react'


class CharacterSelect extends Component {
    
    handleSelect = () => {
        const {chars} = this.props
        this.props.selectFN(chars.ThumbnailUrl)
    }

    render(){
        const {chars} = this.props

        return(
            <div className='characterBox' onClick={this.handleSelect}>
                <img src={chars.ThumbnailUrl} alt={chars.name}/>
            </div>
        )
    }
}

export default CharacterSelect