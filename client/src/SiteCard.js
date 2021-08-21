import { Container } from 'react-bootstrap'
import "./Card.css"

export default function SiteCard() {
    return (
        <Container  id="pricing">
            <div class="card-group">
                <div class="card">
                    <img class="card-img-top" src="..." alt="Insert service image here" />
                    <div class="card-body">
                        <h5 class="card-title">Service</h5>
                        <p class="card-text">This is the type of service we offer.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="..." alt="Insert image here" />
                    <div class="card-body">
                        <h5 class="card-title">Target Customers</h5>
                        <p class="card-text">These are the types of customer we are targeting.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="..." alt="Insert image here" />
                    <div class="card-body">
                        <h5 class="card-title">Projects</h5>
                        <p class="card-text">These are the projects we've accomplished in the past.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
