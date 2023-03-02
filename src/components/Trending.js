import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import jokerImage from "../image/joker.jpg"
import rm1 from "../image/rm.jpg"
import sgs2 from "../image/sgs2.jpg"
import sg1 from "../image/sg1.jpg"
import tr3 from "../image/tr3.jpg"
import tr2 from "../image/tr2.jpg"
import tr1 from "../image/tr1.jpg"
import sts1 from "../image/sts1.jpg"
import tnc from "../image/tnc.jpg"
import p from "../image/p.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4} className='movieWrapper'>
                        <Card className="text-white movieImage">
                            <Card.Img src={jokerImage} alt="Joker Movies" className='images'/>
                                <div className='bg-dark '>
                                    <div className='p-2, m-1'>
                                        <Card.Title className='text-center'>Joker</Card.Title>
                                        <Card.Text className='text-left'>
                                            Pokoknya ini film tentang kamu, kamu kan badut aaaoksowksokw
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="text-white movieImage">
                            <Card.Img src={rm1} alt="rm movies" className='images'/>
                                <div className='bg-dark '>
                                    <div className='p-2, m-1'>
                                        <Card.Title className='text-center'>Romeo Juliet : Viking vs Jack</Card.Title>
                                        <Card.Text className='text-left'>
                                            Males gua nyari sinopsis lu bae nonton sendiri
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="text-white movieImage">
                            <Card.Img src={sgs2} alt="serigala terakhir" className='images'/>
                                <div className='bg-dark '>
                                    <div className='p-2, m-1'>
                                        <Card.Title className='text-center'>Serigala Terakhir:Series 2</Card.Title>
                                        <Card.Text className='text-left'>
                                            Balabadik adalah ormas di real life
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="text-white movieImage">
                            <Card.Img src={sg1} alt="serigala terakhir" className='images'/>
                                <div className='bg-dark '>
                                    <div className='p-2, m-1'>
                                        <Card.Title className='text-center'>Serigala Terakhir</Card.Title>
                                        <Card.Text className='text-left'>
                                            Keren coo ni film lu harus nonton sekali seumur hidup
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="text-white movieImage">
                            <Card.Img src={p} alt="serigala terakhir" className='images'/>
                                <div className='bg-dark '>
                                    <div className='p-2, m-1'>
                                        <Card.Title className='text-center'>Pertaruhan:Series 1</Card.Title>
                                        <Card.Text className='text-left'>
                                            Mas Jepri marah marah mulu disini
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="text-white movieImage">
                            <Card.Img src={tr1} alt="serigala terakhir" className='images'/>
                                <div className='bg-dark '>
                                    <div className='p-2, m-1'>
                                        <Card.Title className='text-center'>The Raid 1</Card.Title>
                                        <Card.Text className='text-left'>
                                           Asli coo maddog keren bat disini 
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="text-white movieImage">
                            <Card.Img src={tr2} alt="serigala terakhir" className='images'/>
                                <div className='bg-dark '>
                                    <div className='p-2, m-1'>
                                        <Card.Title className='text-center'>The Raid 2</Card.Title>
                                        <Card.Text className='text-left'>
                                           Ini juga ga kalah keren ama yang pertama
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="text-white movieImage">
                            <Card.Img src={tr3} alt="serigala terakhir" className='images'/>
                                <div className='bg-dark '>
                                    <div className='p-2, m-1'>
                                        <Card.Title className='text-center'>The Raid 3</Card.Title>
                                        <Card.Text className='text-left'>
                                           Ini film posternya doang padahal belom dibikin
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="text-white movieImage">
                            <Card.Img src={sts1} alt="serigala terakhir" className='images'/>
                                <div className='bg-dark '>
                                    <div className='p-2, m-1'>
                                        <Card.Title className='text-center'>Serigala Terakhir:Series 1</Card.Title>
                                        <Card.Text className='text-left'>
                                           Si Alex kasian bat disini mau tobat tapi ada bae masalahnya
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="text-white movieImage">
                            <Card.Img src={tnc} alt="serigala terakhir" className='images'/>
                                <div className='bg-dark '>
                                    <div className='p-2, m-1'>
                                        <Card.Title className='text-center'>The Night Come For Us</Card.Title>
                                        <Card.Text className='text-left'>
                                            Ini juga ga kalah keren ama film diatas, lu harus nonton si sekali seumur hidup
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending;