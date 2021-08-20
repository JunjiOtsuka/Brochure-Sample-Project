import { Container } from 'react-bootstrap'

export default function SiteTitle() {
    return (
        <>
            <div class="card bg-dark text-white">
                <img
                    class="card-img"
                    src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg"
                    alt="Card image"
                    style={{ aspectRatio: 16/9 }} />
                <Container className="d-block mh-100%">
                    <div class="card-img-overlay d-flex justify-content-center align-items-end " >
                        <h2 class="card-text" style={{height: "30vh"}}>
                            Company Slogan:
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </h2>
                    </div>
                </Container>
            </div>
        </>
    )
}
