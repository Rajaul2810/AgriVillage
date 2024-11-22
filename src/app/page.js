import FeatureProducts from "./Components/FeatureProducts";
import Header from "./Components/Header";
import ProjectCaro from "./Components/ProjectCaro";
import QA from "./Components/QA";
import Welcome from "./Components/Welcome";
import Workshop from "./Components/Workshop";
import TourPackage from "./Components/TourPackage";
import MissionVision from "./Components/MissionVision";

export default function Home() {
  return (
   <>
    <Header/>
    <Welcome />
    <ProjectCaro/>
    <TourPackage />
    <FeatureProducts/>
    <Workshop/>
    <QA/>
    <MissionVision/>
    </>
  )
}
