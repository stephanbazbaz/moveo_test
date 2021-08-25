import React from 'react'

export default function Screen({ }) {
    const [projectName, setprojectName] = React.useState('')
    const [isProject, setisProject] = React.useState(true)
    const today = new Date().toISOString().slice(0, 10)
    return (
        <div className='screen-container'>
            <div className='screen-row box-shadow-screen'>
                {isProject ?
                    <>
                        <div>Enter project name</div>
                        <input
                            value={projectName}
                            onChange={(e) => { setprojectName(e.target.value) }}
                        />
                        <button onClick={() => setisProject(false)}>save</button>
                    </>
                    :

                    <div className='project-name'>{projectName}</div>}
                <div>Date  {today}</div>
            </div>
        </div>
    )
}
