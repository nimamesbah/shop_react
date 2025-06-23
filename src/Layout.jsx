import Footer from "./assets/components/footer";
import Header from "./assets/components/Header";

export default  function Layout({children}){
    console.log("child",children)
    return(
        <>
        <Header />
        {children}
        <Footer />
        </>

    )
}