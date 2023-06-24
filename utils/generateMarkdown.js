// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseLable = license.replace(' ', '-')
  return `https://img.shields.io/static/v1?label=${licenseLable}&message=100%&color=green`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const lowerCaseLicense = license.toLowerCase()
  const licenseLinks = [{ mit: 'https://choosealicense.com/licenses/mit/' },
  { apache: 'https://choosealicense.com/licenses/apache-2.0/' },
  { mozilla: 'https://choosealicense.com/licenses/mpl-2.0/' },
  { gun: 'https://choosealicense.com/licenses/gpl-3.0/' },
  { boost: 'https://choosealicense.com/licenses/bsl-1.0/' },
  { unlicense: 'https://choosealicense.com/licenses/unlicense/' }]
  const licenseUrl = licenseLinks.filter((link) => {
    if (lowerCaseLicense.includes(Object.keys(link))) {
      return link
    }
  })
  licenseUrl.push(license)
  return licenseUrl
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license)
  const badge = renderLicenseBadge(license)
  return `## License\n
  ${licenseLink[1] ? `[${licenseLink[1]}](${Object.values(licenseLink[0])})` + '\n' : ''}
  ---
  ## Badges\n
  ![${licenseLink[1]}](${badge})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readMe = `# ${data.title}\n
  ## Description\n
  - ${data.desc_1 ? data.desc_1 + '\n' : ''}
  - ${data.desc_2 ? data.desc_2 + '\n' : ''}
  - ${data.desc_3 ? data.desc_3 + '\n' : ''}
  - ${data.desc_4 ? data.desc_4 + '\n' : ''}
  ## Table of Contents
  ${data.installation ? '- [Installation](#installation)\n' : ''}
  ${data.screenShot ? '- [Usage](#usage)\n' : ''}
  ${data.collaborator ? '- [Credits](#credits)\n' : ''}
  ${data.license ? '- [License](#license)\n' : ''}
  ## Installation\n
  ${data.installation ? '```\n' + data.installation + '\n```' : ''}\n
  ## Usage\n
  ${data.deployLink ? `[Deploy link](${data.deployLink})` + '\n' : ''}
  ${data.screenShot ? `![Screenshot](./assets/images/${data.screenShot})` + '\n' : ''}
  ## Credits\n
  ${data.collaborator ? data.collaborator + '\n' : ''}
  ${renderLicenseSection(data.license)}
  ## Tests\n
  ${data.test ? data.test + '\n' : ''}
  ## Questions\n
  please contact for more information via\n
  [GitHub](https://github.com/${data.githubID})
  or
  ${data.email} 
  `;
  // console.log(readMe)
  return readMe
}

module.exports = generateMarkdown;
