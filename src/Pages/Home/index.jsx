import p1 from "../../images/Person-1.png";
import img1 from "../../images/image1.png";
export default function Home() {
    return(
        <>
        <div className="Home">
            <div className="Home_text">
                <div className="text">
                    <h2 style={{color:'#03081F', fontSize: '18px'}}>Order Restaurant food takeaway and groceries.</h2>
                    <h2 style={{color: '#03081F', fontSize: '58px'}}>Feast Your Senses,</h2>
                    <h2 style={{color: '#FC8A06', fontSize: '58px'}}>Fast and Freash</h2>
                </div>
                <div className="person">
                    <img src={p1} alt="" />
                </div>
            </div>
            
            {/* <img src={p1} alt="person" /> */}
        </div>
        </>
    )
}