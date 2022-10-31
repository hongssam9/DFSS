import React, {useState } from 'react';
import './Body.css'
import { BsPencilSquare } from 'react-icons/bs'

const data = [
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
]

const Body = () => {
    const [show, setShow] = useState(false);

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
                        <tr key={key} id = "body-part">
                            <td className="body-part">{val.Part}</td>
                            <td className="body-title">{val.Title}</td>
                            <td className="body-tdc">{val.TDC}</td>
                            <td className = "body-edit"><BsPencilSquare /></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};

export default Body;