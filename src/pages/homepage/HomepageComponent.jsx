import React from 'react';
import './HomepageStyles.scss'
import Directory from '../../components/directory/DirectoryComponent';
import MenuItem from '../../components/menu-item/MenuItemComponent';


const Homepage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default Homepage