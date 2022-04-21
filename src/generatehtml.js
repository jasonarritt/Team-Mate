


const generateHTML = (allEngineers, allInterns, allManagers) => (
    
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Mate</title>
</head>
<body>
    <h1>Team Mate</h1>

    <h3>Managers</h3>
    <ul id='manager-list'>
        ${allManagers.map(manager => (
            `
            <ul>
            <li>Name: ${manager.teammateName}</li>
            <li>ID: ${manager.teammateID}</li>
            <li>Email: <a href="mailto:${manager.teammateEmail}">${manager.teammateEmail}</a></li>
            <li>Office Number: ${manager.managerOfficeNumber}</li>
            </ul>
            `
            ))}
    </ul>
    
    <h3>Engineers</h3>
    <ul>
    ${allEngineers.map(engineer => (
        `
        <ul>
        <li>Name: ${engineer.teammateName}</li>
        <li>ID: ${engineer.teammateID}</li>
        <li>Email: <a href="mailto:${engineer.teammateEmail}">${engineer.teammateEmail}</a></li>
        <li>Github: <a href='https://github.com/${engineer.engineerGithub}' target='_blank'>${engineer.engineerGithub}</a></li>
        </ul>
        `
        ))}
    </ul>

    <h3>Interns</h3>
    <ul>
    ${allInterns.map(intern => (
        `
        <ul>
        <li>${intern.teammateName}</li>
        <li>${intern.teammateID}</li>
        <li>Email: <a href="mailto:${intern.teammateEmail}">${intern.teammateEmail}</a></li>
        <li>${intern.internSchool}</li>
        </ul>
        `
        ))}
    </ul>

</body>
</html>

    `
)

module.exports = generateHTML;