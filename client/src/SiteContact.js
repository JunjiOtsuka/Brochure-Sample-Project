import { Container } from 'react-bootstrap'

export default function SiteContact() {
    return (


        <div class="card bg-dark text-white">
            <img
                class="card-img"
                src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg"
                alt="Card image"
                style={{ aspectRatio: 16 / 9 }} />
            <Container className="d-block mh-100%">
                <div class="card-img-overlay" >
                    <h3 class="d-flex justify-content-center align-items-end " style={{height: "50vh"}}>Contact Us</h3>
                    <p class="d-flex justify-content-center align-items-end pt-3" > 
                        Sample Brochure Company
                    </p>
                    <p class="d-flex justify-content-center align-items-end ">
                        1 Amazing Programmer St.
                    </p>
                    <p class="d-flex justify-content-center align-items-end ">
                        XXXXXXX, USA, XXXXX
                    </p>
                    <p class="d-flex justify-content-center align-items-end ">
                        1-XXX-XXX-XXXX
                    </p>
                    <p class="d-flex justify-content-center align-items-end ">
                        XXXXXXXX@XXXXX.com
                    </p>
                </div>
            </Container>
        </div>
    )
}
