import PartyIcon from '@/Components/PartyIcon'
import PlayerCard from '@/Components/PlayerCard'
import MainLayout from '@/Layouts/MainLayout'
import { PageProps, Player } from '@/types'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

interface ResultPageProps {
    player: Player
}

export default function Result(props: PageProps<ResultPageProps>) {
    return (
        <MainLayout>
            <Row>
                <Col>
                    <h3 className='content text-center mb-5'>
                        Tu amigo secreto es
                    </h3>

                    <PlayerCard player={props.player} />
                </Col>
            </Row>
        </MainLayout>
    )
}
