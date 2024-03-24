import Banner from "../Components/Banner";
import PostBanner from "../Components/PostBanner";
import AboutProgram from "../Components/AboutProgram";
import ProgramSkills from "../Components/ProgramSkills";
import MentorIdea from "../Components/MentorIdea";
import PlacedBrands from "../Components/PlacedBrands";
import ProgramDetails from "../Components/ProgramDetails";
import ThinksMind from "../Components/ThingsMind";
import Mentors from "../Components/Mentors";
import Community from "../Components/Community";
import Suggestion from "../Components/Suggestion";

export default function Home(){

    return(
        <div>
            <Banner/>
            <PostBanner/>
            <AboutProgram/>
            <ProgramSkills/>
            <MentorIdea/>
            <PlacedBrands/>
            <ProgramDetails/>
            <ThinksMind/>
            <Mentors/>
            <Community/>
            <Suggestion/>
        </div>
    )
}