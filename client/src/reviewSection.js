import { Row, Col } from "react-bootstrap"
import "./review.css"

export default function reviewSection() {
    return (
        <div >
            <Row id="review" className="review">
                <Col className="col">
                    <Row>
                        "This company's review asdfasdf asdfasasdfasdfasdfdsafasdfasdfdfasdfasdfasdfadsfasdasdf asdfsdafaff" -Customer 1
                    </Row>
                    <Row>
                        4.5 stars
                    </Row>
                </Col>
                <Col className="col">
                    <Row >
                        "This company's review asdfasasdfasdfasdfdsafasdfasdfdfasdfasdfasdfadsfasdasdf" -Customer 2
                    </Row>
                    <Row>
                        4.5 stars
                    </Row>
                </Col>
                <Col className="col">
                    <Row >
                        "This company's review" -Customer 3
                    </Row>
                    <Row>
                        4.5 stars
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
