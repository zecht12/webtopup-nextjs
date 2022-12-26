import About from "../components/About"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


export default function Layout({ children }) {
return (
    <div className="content">
        <NavBar/>
        {children}
        <About/>
        <Footer/>
    </div>
)
}