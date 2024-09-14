import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards  from "./components/HomeCards"
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/ViewAllJobs"
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards></HomeCards>
      <JobListings></JobListings>
      <ViewAllJobs></ViewAllJobs>

    </>
  )
}

export default App