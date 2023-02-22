import { useParams } from "react-router-dom";

import data from "./Dataproduct.json";

import {Container, Button} from "react-bootstrap";
console.log(data);
export default function Details(){
    const params = useParams();
    const id = parseInt(params.id)
    console.log(id);
    return (
        <div>
            <Container className="d-flex mt-5">
            <div className="d-flex gap-5 justify-content-center">
                <img src={data[id].image} width="32%" alt=""/>
                <div className="flex-column pt-5 pb-5">
                <h1 className="fw-bold" style={{color:"#613D2B"}}>{data[id].productname}</h1>
                <p className="card-text" style={{color:"#974A4A"}}>Stock : {data[id].stock}</p>
                    <p style={{textAlign:"justify"}}>Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali ditemukan di Ethiopia, meskipun ada juga beberapa protes yang menyatakan bahwa Coffea arabica sebenarnya muncul pertama kali di bagian selatan Sudan. Karena para gembala Ethiopia adalah manusia pertama yang mengonsumsi kopi—walau saat itu mereka baru mengonsumsi buah/cherry-nya saja, maka gagasan tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.</p>
                <h2 className="d-flex fw-bold justify-content-end mt-5" style={{color:"#974A4A"}} >{data[id].price}</h2>
                <div className="d-grid">
                        <Button className="mt-4" style={{backgroundColor:"#613D2B", border:"none"}} type="submit">Add Card</Button>
                </div>
                </div>
            </div>
            
            </Container>
        </div>
    );
}