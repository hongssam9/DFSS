import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './Filter.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Filter = () => {
    const [radioValue, setRadioValue] = useState('1');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const radios = [
        { name: 'Yes', value: '1' },
        { name: 'No', value: '2' },
    ];
    return (
        <div className="filter">
            <ul className="filter-list">
                <li className="filter-options">Part # <input /></li>
                <li className="filter-options">Title <input /></li>
                <li className="filter-options">Bulk Material Lot # <input /></li>
                <li className="filter-options">Heat Treat Lot # <input /></li>
                <li className="filter-options">Plating Lot # <input /></li>
                <li className="filter-options">Manufacturer's Lot # <input /></li>
                <li className="filter-options" id="filter-options_TDC"><p id="TDC" >TDC</p>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                className="filter-options_TDC__button"
                                key={idx}
                                size="sm"
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </li>

                <Button variant="outline-dark" id="add" onClick={handleShow}>+</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please Fill Out Necessary Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>Part <input /></li>
                            <li>Title <input /></li>
                            <li>Bulk Material Lot <input /></li>
                            <li>Heat Treat Lot <input /></li>
                            <li>Plating Lot <input /></li>
                            <li>Manufacturer's Lot <input /></li>
                            <li>TDC
                                <ButtonGroup>
                                    {radios.map((radio, idx) => (
                                        <ToggleButton
                                            className="filter-options_TDC__button"
                                            key={idx}
                                            size="sm"
                                            id={`radio-${idx}`}
                                            type="radio"
                                            variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </li>
                        </ul>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleClose} >
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </ul>

        </div>
    );
};

export default Filter;