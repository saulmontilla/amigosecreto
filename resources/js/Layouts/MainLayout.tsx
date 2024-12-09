import React, { PropsWithChildren } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function MainLayout(props: PropsWithChildren) {
    return (
        <Container fluid className='home-bg'>
            <Row className='vh-100 align-items-center'>
                <Col>
                    <h1 className='text-center title'>
                        Juego de amigo secreto
                    </h1>

                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}
