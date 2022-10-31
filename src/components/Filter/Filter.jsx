import React from 'react';
import './Filter.css'

const Filter = () => {
    return (
        <div id="table-filter">
           <table>
                <tr>
                    <th className="filter-options">Part #</th>
                    <th className="filter-options">Lot #</th>
                    <th className="filter-options">Bulk #</th>
                </tr>
                <tr>
                    <th className="filter-options"></th>
                    <th className="filter-options">Title</th>
                    <th className="filter-options">TDC</th>
                </tr>
            </table> 
        </div>
    );
};

export default Filter;