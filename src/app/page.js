import Header from "./Components/Header";
import ProjectCaro from "./Components/ProjectCaro";
import QA from "./Components/QA";
import Welcome from "./Components/Welcome";
import Products from "./products/page";


export default function Home() {
  return (
   <>
    <Header/>
    <Welcome />
    <ProjectCaro/>
    <Products/>
    <QA/>
   </>
  )
}
