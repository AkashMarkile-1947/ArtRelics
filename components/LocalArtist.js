import { useRouter } from "next/router";

const LocalArtist = () => {
    const router = useRouter();
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
        <>
        <div className="community-container">
        <div className="community-box">
            <h1 className="feature-heading text-[#000] mb-16" style={{color: "#000", fontSize: "2.5rem"}}>Connect with Local Art&nbsp;<span className="dot">.</span></h1>
            <div className="btn-container">
                <button  onClick={() => router.push('/myaccount')} color="info">Login</button>
                <button onClick={() =>router.push('/myaccount')} color="info">Sign-up</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default LocalArtist;