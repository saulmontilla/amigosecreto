import { Player } from '@/types'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import PartyIcon from './PartyIcon'

interface PlayerCardProps {
    player: Player
}

export default function PlayerCard(props: PlayerCardProps) {
    return (
        <Row className='justify-content-center'>
            <Col xs="10" sm="4" md="2">
                <Card>
                    <Card.Body>
                        <PartyIcon className='party-left' />

                        <span className='name'>
                            {props.player.name.toUpperCase()}
                        </span>

                        <PartyIcon className='party-right' />
                    </Card.Body>
                </Card>
            </Col>
        </Row >
    )
}
