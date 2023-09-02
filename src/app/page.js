import Header from "./Components/Header";
import ProjectCaro from "./Components/ProjectCaro";
import QA from "./Components/QA";
import Welcome from "./Components/Welcome";


export default function Home() {
  return (
   <>
    <Header/>
    <Welcome />
    <ProjectCaro/>
    <QA/>
   </>
  )
}
