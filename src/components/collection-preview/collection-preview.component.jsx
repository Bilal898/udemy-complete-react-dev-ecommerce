import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collecton-item/collection-item.component'

const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherItemProps}) => (
                        <CollectionItem 
                        key={id}
                        {...otherItemProps}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection
