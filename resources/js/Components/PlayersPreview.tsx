import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import QuestionMark from './QuestionMark'
import { router } from '@inertiajs/react'
import useFetch from '@/Hooks/useFetch'
import { Player } from '@/types'
import TryAgain from './TryAgain'

export default function PlayersPreview() {
    const [players, loadingPlayers, errorPlayers, fetchPlayers] = useFetch<Player[]>({
        url: '/player',
        initialValue: []
    })
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)

    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            if (players.length === 0) {
                return
            }

            index = (index + 1) % players.length;
            setName(players[index].name);
        }, 500); // Cambia el nombre cada 0.5 segundos (500 ms) 

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta 
    }, [players]);

    useEffect(() => {
        fetchPlayers()
    }, [])

    function handleClick() {
        setLoading(true)

        setTimeout(() => {
            router.post('/')
        }, 3000)
    }

    const loadingContent = (
        <Row>
            <Col className='loading-content'>
                <Spinner variant='info' animation='border' />
                <p >
                    Revolviendo papelitos...
                </p>
            </Col>
        </Row>
    )

    const content = (
        <span className='name'>
            {name.toUpperCase()}
        </span>
    )

    if (loadingPlayers) {
        return (
            <Row>
                <Col className='text-center'>
                    <Spinner variant='info' animation='border' />
                    <p className='content'>
                        Cargando jugadores
                    </p>
                </Col>
            </Row>
        )
    }

    if (errorPlayers) {
        return (
            <TryAgain
                text='Error al cargar jugadores'
                onRetry={() => fetchPlayers()}
            />
        )
    }

    return (
        <Row className='justify-content-center mt-5'>
            <Col xs="10" sm="4" md="2">
                <Card>
                    <Card.Body className='select-player' onClick={handleClick}>
                        <QuestionMark className='rotate-and-bounce question-left' />
                        {loading
                            ? loadingContent
                            : content
                        }
                        <QuestionMark className='rotate-and-bounce-right question-right' />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
