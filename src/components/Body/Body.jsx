import React from 'react';
import './Body.css'

const data = [
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
]
const body = () => {
    return (
        <div>
            <table>
                <tr>
                    <th className="body-part">Part #</th>
                    <th className="body-title">Title</th>
                    <th className="body-tdc">TDC</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td className="body-part">{val.Part}</td>
                            <td className="body-title">{val.Title}</td>
                            <td className="body-tdc">{val.TDC}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};

export default body;