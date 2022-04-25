


const generateHTML = (allEngineers, allInterns, allManagers) => (
    
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <title>Team Mate</title>
    </head>
    <body class='has-background-light'>
        <h1 class="title is-1 has-text-link has-text-centered">Team Mate</h1>

        <div id='managers' class='is-primary has-text-centered'>
        <h3 class="title is-3 has-text-success">Managers</h3>
        <section id='manager-list' class='container columns is-fluid'>
            ${allManagers.map(({ teammateName, teammateID, teammateEmail, managerOfficeNumber }) => {
                return`
                <div class='manager card m-auto column'>
                <p>Name: ${teammateName}</p>
                <p>ID: ${teammateID}</p>
                <p>Email: <a href="mailto:${teammateEmail}">${teammateEmail}</a></p>
                <p>Office Number: ${managerOfficeNumber}</p>
                </div>
                `
                })
                .join(' ')} 
            
        </section>
        
        </div>

        <div id='engineers' class='is-primary has-text-centered'>
        <h3 class="title is-3 has-text-warning">Engineers</h3>
        <section id='engineer-list' class='container columns is-fluid'>

        ${allEngineers.map(({ teammateName, teammateID, teammateEmail, engineerGithub }) => {
            return`
            <div class='engineer card m-auto column'>
            <p>Name: ${teammateName}</p>
            <p>ID: ${teammateID}</p>
            <p>Email: <a href="mailto:${teammateEmail}">${teammateEmail}</a></p>
            <p>GitHub: <a href="https://github.com/${engineerGithub}" target="_blank">${engineerGithub}</a></p>
            </div>
            `
            })
            .join(' ')} 
        
        </section>
        </div>

        <div id='interns' class='is-primary has-text-centered'>
        <h3 class="title is-3 has-text-info">Interns</h3>
        <section id='intern-list' class='container columns is-fluid'>

        ${allInterns.map(({ teammateName, teammateID, teammateEmail, internSchool }) => {
            return`
            <div class='intern card m-auto column'>
            <p>Name: ${teammateName}</p>
            <p>ID: ${teammateID}</p>
            <p>Email: <a href="mailto:${teammateEmail}">${teammateEmail}</a></p>
            <p>School: ${internSchool}</p>
            </div>
            `
            })
            .join('')}
        
        </section>
        </div>

    </body>
    </html>

    `
)

module.exports = generateHTML;