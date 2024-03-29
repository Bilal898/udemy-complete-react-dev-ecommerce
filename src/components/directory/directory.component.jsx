import React, { Component } from 'react'
import sections from './directory.data'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

export default class Directory extends Component {

    state = {
        sections: sections
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => {
                    return (
                        <MenuItem 
                        key={id}
                        {...otherSectionProps}
                        />
                    )
                })}
            </div>
        )
    }
}
