import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
        <div className="wrapper">
            <h1>TOP WORKOUT SESSION</h1>
            <p>
                The only bad workout is the one you didn't do.
                Sweat is your body's way of showing progress
            </p>
            <img src='/img5.jpg' alt='workout'></img>
        </div>
        <div className="wrapper">
            <h1>FEATURED BOOTCAMPS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quibusdam assumenda corrupti molestias voluptates, quia eum harum reiciendis!</p>
            <div className="bootcamps">
                <div>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi aut exercitationem quod odit cumque!</p>
                </div>
                <div>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi aut exercitationem quod odit cumque!</p>
                </div>
                <div>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi aut exercitationem quod odit cumque!</p>
                </div>
                <div>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi aut exercitationem quod odit cumque!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorkoutSessions