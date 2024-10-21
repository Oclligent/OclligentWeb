import images from '../../constants/images';
import './footer.css';
const Footer = ({ theme }) => {
    return (
        <div className="foot" style={{ backgroundColor: !theme ? "white" : "black", color: theme ? "white" : "#121212" }}>
            <div className="page-footer" style={{ color: theme ? "white" : "#121212", borderTop: theme ? "1px solid rgba(255, 255, 255, 0.651)" : "1px solid black" }}>
                <div className="footer-items" >
                    <span><a href="/link">Privacy Policy</a></span>
                    <span>|</span>
                    <span><a href="/link">Terms</a></span>
                    <span>|</span>
                    <span><a href="/link">Site Map</a></span>
                </div>

                <div className="footer-items copyright">
                    <p>Copyright © 2022 Voxitec. All Rights Reserved.</p>
                </div>


                {theme && <div className="footer-items logos">
                    <a href="/link"><img src={images.Facebook} alt="fb" /></a>
                    <a href="/link"><img src={images.Twitter} alt="tw" /></a>
                    <a href="/link"><img src={images.LinkedIn} alt="linked" /></a>
                    <a href="/link"><img src={images.Instergram} alt="insta" /></a>
                    <a href="/link"><img src={images.Youtube} alt="yt" /></a>
                    <a href="/link"><img src={images.Dribble} alt="dribble" /></a>
                    <a href="/link"><img src={images.Medium} alt="medium" /></a>
                </div>}
                {
                    !theme && <div className="footer-items logos">
                        <a href="/link"><img src={images.facebook_light} alt="fb" /></a>
                        <a href="/link"><img src={images.twitter_light} alt="tw" /></a>
                        <a href="/link"><img src={images.linkendin_light} alt="linked" /></a>
                        <a href="/link"><img src={images.instagram_light} alt="insta" /></a>
                        <a href="/link"><img src={images.youtube_light} alt="yt" /></a>
                        <a href="/link"><img src={images.dribble_light} alt="dribble" /></a>
                        <a href="/link"><img src={images.m_light} alt="medium" /></a>
                    </div>
                }

            </div>
        </div>
    );
}

export default Footer;