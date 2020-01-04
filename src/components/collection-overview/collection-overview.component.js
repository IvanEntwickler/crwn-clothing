import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';

const CollectionOverview = ({collections}) =>(
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherSectionProps }) =>(
            <CollectionPreview key= {id} {...otherSectionProps} />
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
    
    
        

export default connect(mapStateToProps)(CollectionOverview);