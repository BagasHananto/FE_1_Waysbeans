import {Container, Button} from "react-bootstrap";

export default function DetailComponent(){
    return (
        <div>
            <Container className="d-flex mt-5">
            <div className="d-flex gap-5 justify-content-center">
                <img src="/image/Product 4.png" width={"32%"} alt=""></img>
                <div className="flex-column">
                <h1 className="fw-bold" style={{color:"#613D2B"}}>Nicaragua Beans</h1>
                <p className="card-text" style={{color:"#974A4A"}}>Stock : 350</p>
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Viverra ipsum nunc aliquet bibendum enim facilisis. Sapien eget mi proin sed libero. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Amet dictum sit amet justo donec enim. Bibendum arcu vitae elementum curabitur vitae nunc sed. Nunc mattis enim ut tellus elementum sagittis vitae et. Leo integer malesuada nunc vel risus commodo viverra maecenas. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ut sem nulla pharetra diam. Curabitur vitae nunc sed velit dignissim sodales ut eu. Platea dictumst quisque sagittis purus. Augue mauris augue neque gravida in fermentum.</p>
                <h2 className="d-flex fw-bold justify-content-end" style={{color:"#974A4A"}} >Rp.250.000</h2>
                <div className="d-grid">
                        <Button className="mt-4" style={{backgroundColor:"#613D2B", border:"none"}} type="submit">Add Card</Button>
                </div>
                </div>
            </div>
            
            </Container>
        </div>
        

    );
}