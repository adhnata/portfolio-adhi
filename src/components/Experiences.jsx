import React from 'react'
import WorkItem from './WorkItem'


const data = [
  {
    year: "2018",
    title: "Sunny Express",  
    duration: "4 Years",
    details: "Stocked drinks, chips, and other products as required ● Loaded vehicles with wholesaler products to and from the store ● Assisted in buying necessary products from multiple locations"
  },
  {
    year: "2020",  
    title: "Mathnasium",
    duration: "3 Years",
    details: "Provided personalized instruction for over 50 students K-12; assisted in reviewing and understanding mathematical concepts; completed session diagnostic sheets ● Developed a rapport with students to establish a fun learning environment and encouraged students during instruction hours"
  },
  {
    year: "2023",
    title: "Global Tech Experience: Data Analysis and Presentation",  
    duration: "2 months",
    details: "Data Analysis and Presentation: Spearheaded data-driven projects using SQL, Python, Jupyter Notebook, and Tableau, resulting in the extraction, analysis, and visualization of critical insights for diverse companies and federal agencies. Presented findings to company executives, enhancing decision-making processes. ● Collaborative Problem-Solving: Actively participated in team discussions to ideate and strategize optimal approaches for data extrapolation, presentation, and analysis, fostering a collaborative work environment. ● Results and Interpretation: Uncovered a substantial 34% disparity in funding for NYC public schools based on geographic area and income levels, shedding light on educational inequalities. Additionally, identified the relationship between smart bike revenue, seasonal patterns, and ownership changes between Ford and Lyft, leading to a compelling proposal for the project's continuation over two additional financial quarters to realize profitability."
  },
  {
    year: "2023",
    title: "App Team Carolina: IOS Application Development",
    duration: "Present",
    details: "Contributed to iOS App Development: Collaborated with a team of iOS enthusiasts to develop real apps, simulating the workspace of a startup tech company. ● Enhanced User Experience: Gained proficiency in designing intuitive and visually appealing digital products, while following the build process of a project from implementation to deployment. ● Client-Centric Approach: Briefings designed to mimic designer-client meetings, with an emphasis on client demands anddetailsbeing met with efficiency and punctuality" 
  }
]
const Experiences = () => {
  return (
    <div id='experiences' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Experiences</h1>
      {data.map((item, idx)=> (
        <WorkItem key={idx} year= {item.year} title={item.title} duration={item.duration} details={item.details}/>
      ))}
    </div>
  )
}

export default Experiences