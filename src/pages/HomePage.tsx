import Hero from '../components/Hero'
import HomeCards  from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"
const HomePage = () => {
  return (
    <div>

        <Hero></Hero>
        <HomeCards></HomeCards>
        <JobListings></JobListings>
        <ViewAllJobs></ViewAllJobs>
    </div>
  )
}

export default HomePage