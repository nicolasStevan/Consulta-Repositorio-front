import React, { useEffect, useState } from 'react'
import { Form, Input, Container, Button, Row, Col, Card, CardTitle, CardText } from 'reactstrap'
import api from '../services/api'
import imgGithub from '../assets/github-icon.png'

function Home() {

    const [userName, setUserName] = useState('')
    const [reposData, setReposData] = useState(null)
    const getRepos = async (user) => {
        try {
            const response = await api.get(`git?username=${user}`)
            console.log(response)
            setReposData(response.data)
        } catch (error) {
            console.error("Erro ao buscar dados da API", error)
        }
    }

    return (
        <Container>
            <h1 className='text-center mt-5'>CONSULTA REPOSITORIO GITHUB</h1>
            <Row className='justify-content-center mb-3'>
            <Col xs='auto'>
            <img width={200} height={200} src={imgGithub} />
            </Col>
            </Row>
            <Form>
                <Input
                    onChange={(e) => setUserName(e.target.value)}
                />
                <Row className='justify-content-center mt-3'>
                    <Col xs="auto">
                <Button  color='primary' onClick={() => getRepos(userName)}>
                    ENVIAR
                </Button>
                    </Col>
                </Row>
            </Form>
            <Row>

                <h2>Repositórios:</h2>
                
                {reposData && reposData.map(item => (
                   
                   <Col sm={4}>
                        <div className="">
                        <Card
                            body
                            className="text-center my-4 bg-info rounded"
                            style={{
                                width: '18rem',
                                height: 'auto'
                            }}
                        >
                            <CardTitle tag="h5">
                            {item.name}
                            </CardTitle>
                            <CardText>
                            {item.description}
                            </CardText>
                        </Card>
                        </div>
                    </Col>
                ))
                
                }
              
            </Row>

        </Container>
    )
}

export default Home
