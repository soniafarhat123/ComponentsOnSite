import React from 'react';
import { Icon, Input } from '../../../lib/ionic-adapter-compo';
import { searchSharp } from 'ionicons/icons';
import './SearchBar.css';

export type ButtonTriElement = {
    myTriButton: JSX.Element;
    actions?: { e: JSX.Element; call: () => void }[];
};
export type ButtonFilterElement = {
    myFilterButton: JSX.Element;
    actions?: { e: JSX.Element; call: () => void }[];
};

interface SearchBarProps {
    handleInput?: (ev: CustomEvent) => void;
    triButton?: ButtonTriElement;
    filterButton?: ButtonFilterElement;
}

const SearchBar: React.FC<SearchBarProps> = ({
    handleInput,
    triButton,
    filterButton,
}) => {
    return (
        <div className="search-bar">
            <Icon
                slot="icon-only"
                className="search-icon"
                icon={searchSharp}
                color="medium"
            />

            <Input
                placeholder="Rechercher"
                className="input"
                clearInput={true}
                onIonInput={handleInput}
            />

            {triButton && triButton.myTriButton}
            {filterButton && filterButton.myFilterButton}
        </div>
    );
};

export default SearchBar;
