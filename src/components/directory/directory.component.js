import React from 'react';
import './directory.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectSections} from '../../redux/directory/directory.selectors';

import MenuItem from '..//menu-item/menu-item.component';

const Directory = ({sections}) =>(
    <div className='directory-menu'>
        {
        sections.map(({id, ...otherSectionProps }) => (
            <MenuItem key= {id} {...otherSectionProps} />
        ))
        }
    </div>

)

const mapStateToProps = createStructuredSelector({
    sections: selectSections

});



export default connect(mapStateToProps)(Directory);
