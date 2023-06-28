import React from 'react';
import { List, MyList } from '../../../lib/ionic-adapter-compo/BaseList';

interface ListProps extends MyList {
  clickable : boolean;
  
}

const SimpleList: React.FC<ListProps> = ({ ...props }) => {
    return <List {...props}></List>;
};

export default SimpleList;
