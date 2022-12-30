import React, { useState } from "react";
import styles from './Tabs.css';

export const Tabs = ({items, defaultTab, onSelect}) => {
    const [ currentTab, setCurrentTab ] = useState(defaultTab);

    return <div className={styles.Tabs}>
        {items?.map(x => 
            <div 
            key={x.id} 
            className={`${styles.Tab} ${currentTab === x.id ? styles.Tab_active : ''}`}
            onClick={() => {
                setCurrentTab(x.id);
                onSelect?.(x.id);
            }}
            >{x.title}
            </div>)}
    </div>
}