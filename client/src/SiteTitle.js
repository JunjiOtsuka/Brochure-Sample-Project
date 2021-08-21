import { Container } from 'react-bootstrap'

export default function SiteTitle() {
    return (
        <>
            <div id="home" class="card">
                <img
                    class="card-img"
                    src=""
                    alt="Image relavant to company"
                    style={{ aspectRatio: 16/9 }} />
                <Container className="d-block mh-100%">
                    <div class="card-img-overlay d-flex justify-content-center align-items-end " >
                        <h2 class="card-text" style={{height: "30vh"}}>
                            "Company Slogan"
                        </h2>
                    </div>
                </Container>
            </div>
        </>
    )
}
