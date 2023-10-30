function Features() {
    const mainStyles = {
        fontFamily: "Barlow, sans-serif",
        fontSize: "1.125rem",
        fontWeight: 400,
        lineHeight: 1.6,
        color: "#8d8d8d",
        background: "#fff",
        textRendering: "optimizeLegibility",
        overflowX: "hidden",
        marginBlock: 0,
        paddingBlock: 0,
      };

    return (
        <div className="features-container hero-container w-[90%] mx-auto" style={mainStyles}>
           <div className="feature justify-between">
                <div className="feature-illu">
                    <img src="https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg0MTE2OTN8&ixlib=rb-4.0.3&q=80&w=1080" className="feature-img" alt="Mock test" />
                </div>
                <div className="feature-info w-[400px]">
                    <h3 className="feature-heading text-[#000] mb-16" style={{color: "#000"}}>Discover unique and one-of-a-kind pieces&nbsp; <span className="dot">.</span></h3>
                    <p className="feature-text hero-info">Explore a diverse collection of sculptures, paintings, and collectibles created by talented local artists. Find the perfect piece that resonates with you and adds a touch of creativity to your space.</p>
                </div>
           </div>
           <div className="feature justify-between">
                <div className="feature-info w-[400px]">
                    <h3 className="feature-heading text-[#000]  mb-8" style={{color: "#000"}}>Support local artists&nbsp; <span className="dot">.</span></h3>
                    <p className="feature-text hero-info">ArtHub provides a platform for local artists to showcase and sell their artwork, allowing you to directly support their creative endeavors.</p>
                </div>
                <div className="feature-illu">
                    <img src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg0MTE2OTN8&ixlib=rb-4.0.3&q=80&w=1080" className="feature-img" alt="students" />
                </div>
           </div>
        </div>
    )
}

export default Features;
