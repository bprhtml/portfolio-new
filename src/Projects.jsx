let projects = [
    {name: 'Etch-a-Sketch', desc: "A sketchpad using grid squares to emulate the classic kids' toy.", imgSrc: './eas-ss.png', live: 'https://mrbenrice.github.io/etchasketch/', gitHub: 'https://github.com/mrbenrice/etchasketch'},
    {name: 'Snake', desc: "Using the canvas to create a game of snake as found on older mobile devices.", imgSrc: './s-ss.png', live: 'https://mrbenrice.github.io/snake/', gitHub: 'https://github.com/mrbenrice/snake'},
    {name: 'Calculator', desc: "Using classes to create a functioning calculator.", imgSrc: './ccl-ss.png', live: 'https://mrbenrice.github.io/calculator/', gitHub: 'https://github.com/mrbenrice/calculator'},
    {name: 'Rock, Paper, Scissors', desc: "One of my first projects! A game of rock, paper, scissors.", imgSrc: './rps-ss.png', live: 'https://mrbenrice.github.io/rock_paper_scissors/', gitHub: 'https://github.com/mrbenrice/rock_paper_scissors'},
    {name: 'Factor Calculator', desc: "Another of my early projects, this was built based on an issue I faced in key stage 2 maths!", imgSrc: './fc-ss.png', live: 'https://mrbenrice.github.io/factorcalc/', gitHub: 'https://github.com/mrbenrice/factorcalc'},
    {name: 'GIF Search', desc: "A website that allows the user to search for a GIF image, using the GIPHY API.", imgSrc: './square.gif', live: 'https://bprhtml.github.io/gif-picker/', gitHub: 'https://github.com/bprhtml/gif-picker/'}
]

let reactProjects = [
    {name: 'MovDB', desc: "Using an API from OMDB, this searches and gives info on any film the user searches.", imgSrc: './movies.png'},
    {name: 'TicTacToe', desc: "Created a game of noughts & crosses using React.", imgSrc: './tictoe.png'},
    {name: 'NewsApp', desc: "Using the WorldNews API, this provides local headlines.", imgSrc: './news.png'},
    {name: 'WeatherApp', desc: "Using WeatherAPI, this provides weather informtion at users' locations or selected locations.", imgSrc: './weather.png'},
    {name: 'To-do List', desc: "Created a simple to-do list which utilises local storage.", imgSrc: './todo.png'},
    {name: 'Shazmaps', desc: "Created a clone of Shazam with the added feature of adding the location of the identification to a map", imgSrc: './shazmaps.png'}
]

let miscProjects = [
    {name: 'Clonda', desc: "Using Pygame, I made a Zelda clone", imgSrc: './zelda.png'}
]

function Projects () {
    return (
        <>
        <h1 id="projects">Javascript Projects</h1>
        <div className="pcc">
            <JavaScriptProjectsGrid projects={projects}/>
        </div>
        <div className="divider-container">
            <div className="divider"></div>
        </div>
        <h1 id="react-projects">React Projects</h1>
        <div className="rpcc">
            <ReactProjectsGrid reactProjects={reactProjects} />
        </div>
        <div className="divider-container">
            <div className="divider"></div>
        </div>
        <h1 id="misc-projects">Miscellaneous Projects</h1>
        <div>
            <MiscProjectsGrid miscProjects={miscProjects} />
        </div>
        </>
    )
}

function JavaScriptProjectsGrid ({ projects }) {
    return (
        <>
        <div className="project-grid">
            {projects.map(((project, index) => {
                return (
                    <div key={index} className="project-card">
                        <img src={project.imgSrc} alt={project.desc} key={project.name} className="project-img"/>
                        <div className="project-name">{project.name}</div>
                        <div className="project-desc">{project.desc}</div>
                        <button className="demo-btn">
                            <a href={project.live}>
                                <img className="demo-logo" src="demo.svg" />
                            </a>
                        </button>
                        <button className="github-btn">
                            <a href={project.gitHub}>
                                <img className="github-logo" src="github.svg" />
                            </a>
                        </button>
                    </div>
                )
            }))}
        </div>
        </>
    )
}

function ReactProjectsGrid({ reactProjects }) {
    return (
        <>
        <div className="react-grid">
            {reactProjects.map(((project, index) => {
                return (
                    <div key={index} className="project-card">
                        <img src={project.imgSrc} className="project-img" />
                        <div className="project-name">{project.name}</div>
                        <div className="project-desc">{project.desc}</div>
                    </div>
                )
            }))}
        </div>
        </>
    )
}

function MiscProjectsGrid({ miscProjects }) {
    return (
        <>
        <div className="misc-grid">
            {miscProjects.map(((project, index) => {
                return (
                    <div key={index} className="project-card">
                        <img src={project.imgSrc} className="project-img" />
                        <div className="project-name">{project.name}</div>
                        <div className="project-desc">{project.desc}</div>
                    </div>    
                )
            }))}
        </div>
        </>
    )
}

export default Projects;