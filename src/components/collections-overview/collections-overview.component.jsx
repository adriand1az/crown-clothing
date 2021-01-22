import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

// components
import CollectionPreview from '../collection-preview-components/collection-preview.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selctors'


import './collection-overview.syles.scss';

const CollectionsOverview =({ collections }) => (
    <div className="collections-overview">
    {collections.map(({id, ...otherCollectionProps}) =>(
        <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)