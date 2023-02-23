
import './Body.css'
import { BsPencilSquare } from 'react-icons/bs'
import Accordion from 'react-bootstrap/Accordion'

const data = [
    {
        Part: "1a2564-101",
        Title: "Lorem ipsum dolor sit amet",
        TDC: "Yes",
        Description: "consectetur adipiscing elit ae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non nu",
        Plating: "123456",
        Bulk: "",
        Heat_Treat: "451984",
        Vendor: "Domaille",
        BFM: "Yes"
    },
    {
        Part: "1481109-00-PPI",
        Title: "sed do eiusmod tempor",
        TDC: "Yes",
        Description: "incididunt ut labore et dolore magna aliqua magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse qu",
        Plating: "1314151",
        Bulk: "171819202122",
        Heat_Treat: "454849",
        Vendor: "Primo",
        BFM: "No"
    },
    {
        Part: "3A2457-00",
        Title: "Ut enim ad minim veniam",
        TDC: "No",
        Description: "quis nostrud exercitation ullamco laboris",
        Plating: "23242526",
        Bulk: "2728293031",
        Heat_Treat: "",
        Vendor: "Natoma",
        BFM: "Yes"
    },
    {
        Part: "5A2343-00-PPI",
        Title: "nisi ut aliquip ex ea commodo consequat",
        TDC: "Yes",
        Description: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        Plating: "3233343",
        Bulk: "536373839",
        Heat_Treat: "798521",
        Vendor: "Excel",
        BFM: "Yes"
    },
    {
        Part: "1481109-00",
        Title: "Excepteur sint ",
        TDC: "Yes",
        Description: "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Plating: "40414243",
        Bulk: "444546474849",
        Heat_Treat: "",
        Vendor: "Natoma",
        BFM: "No"
    },
    // { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
    // { Part: "5A2343-00-PPI", Title: "Backshell, ...", TDC: "Yes" },
    // { Part: "1481109-00-PPI", Title: "Weld...", TDC: "Yes" },
    // { Part: "3A2457-00", Title: "Backshell ...", TDC: "No" },
]

const Body = () => {
    return (
        <div>
            <table>
                <tr className="body-header">
                    <th id="body-header_part">Part #</th>
                    <th id="body-header_title">Title</th>
                    <th id="body-header_TDC">TDC</th>
                </tr>

                {data.map((val, key) => {
                    return (
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <tr key={key} className="body-part">
                                        <td className="body-desc" id="body-desc_part" >{val.Part}</td>
                                        <td className="body-desc" id="body-desc_title">{val.Title}</td>
                                        <td className="body-desc" id="body-desc_TDC">{val.TDC}</td>
                                        {/* <td className="body-edit"><BsPencilSquare /></td> */}
                                    </tr>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><p>Bulk Material Lot: {val.Bulk}</p></li>
                                        <li><p>Heat Treat Lot: {val.Heat_Treat}</p></li>
                                        <li><p>Plating Lot: {val.Plating}</p></li>
                                        <li><p>Vendor: {val.Vendor}</p></li> 
                                        <li><p>Buyer Furnished Material: {val.BFM}</p></li>
                                    </ul>
                                    {val.Description}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })}

            </table>
        </div>
    );
};

export default Body;