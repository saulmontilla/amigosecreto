import PlayersPreview from '@/Components/PlayersPreview'
import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function Home() {
    return (
        <MainLayout>
            <Head>
                <title>Inicio</title>
            </Head>
            <Row>
                <Col>
                    <p className='content text-center'>
                        Haz click para descubrir a quien te toca regalar
                    </p>

                    <PlayersPreview />
                </Col>
            </Row>
        </MainLayout>
    )
}
