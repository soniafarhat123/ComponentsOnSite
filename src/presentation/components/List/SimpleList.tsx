import React from 'react';
import { List, MyList } from '../../../lib/ionic-adapter-compo/BaseList';

interface ListProps extends MyList {}

const SimpleList: React.FC<ListProps> = ({ inset,children, ...props }) => {
    return <List {...props} lines="full" inset={inset}>{children}</List>;
};

export default SimpleList;
