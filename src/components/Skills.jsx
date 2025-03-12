import React from 'react'

function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux',  'Tailwind CSS','Bootstrap'];
  return (
    <div className='text-center py-10'>
        <h2 className='text-4xl'>What I do</h2>
        <div className='flex flex-wrap justify-center mt-6'>
            {skills.map(skill => (
                <span key={skill} className='m-2 px-4 py-2 bg-amber-600 text-white rounded-full'>
                    {skill}
                </span>
            ))}
        </div>
    </div>
  )
}

export default Skills