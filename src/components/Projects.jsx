import React from 'react'
import ProjectItem from './ProjectItem'
import AkariImage from '../assets/AkariImage.jpg'
import FinanceImage from '../assets/Finance.jpg'
import PizzaPic from '../assets/PizzaPic.jpg'
import Viruspic from '../assets/Viruspic.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Here are a collection of some of the projects I have developed over the course of my coding journey!
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={FinanceImage} title='Personal Finance App' />
            <ProjectItem img={AkariImage} title='Akari Simulator'/>
            <ProjectItem img={PizzaPic} title= 'Pizza Decorator'/>
            <ProjectItem img={Viruspic} title='Contagion Simulation'/>
        </div>
    </div>
  )
}

export default Projects