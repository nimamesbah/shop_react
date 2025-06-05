import Header from "./assets/components/Header";

export default  function Layout({children}){
    return(
        <>
        <Header />
        {children}
        </>

    )
}