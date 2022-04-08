import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'


const Blogs = () => {
    return (
        <div className="container mt-5 pt-5 text-center">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header >What is the Context Api?</Accordion.Header>
                    <Accordion.Body>
                        Context api is the alternative of props drilling. It is mostly used instead of multiple props. Using Props, we cannot send data at a time on the defined element. We have to pass the data to every parent component then we can send the data to child component or where we want to send. It is mostly used on where the tree component :)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is the Different between Inline and Block Element?</Accordion.Header>
                    <Accordion.Body>
                        The main difference between inline and block element is the line. Because inline element don't create a new line but Block element always creates a new line or starts a new line in order to do something. This is the difference between Inline and Block element.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;