<<<<<<< HEAD
const LinksSocialMedia = {
  github: 'FillipeRC',
  youtube: 'RocketSeat',
  facebook: 'coelhofillipe',
  instagram: 'fillipecoelho',
  twitter: 'fillipecoelho1'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }

  //template string
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url).then(response =>
    response.json().then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      githubProfileLink.href = data.html_url
      profilePhoto.src = data.avatar_url
      userNickname.textContent = data.login
    }
    )
  )
}

getGitHubProfileInfos()
=======
const LinksSocialMedia = {
  github: 'FillipeRC',
  youtube: 'RocketSeat',
  facebook: 'coelhofillipe',
  instagram: 'fillipecoelho',
  twitter: 'fillipecoelho1'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }

  //template string
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url).then(response =>
    response.json().then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      githubProfileLink.href = data.html_url
      profilePhoto.src = data.avatar_url
      userNickname.textContent = data.login
    }
    )
  )
}

getGitHubProfileInfos()
>>>>>>> 7a8c558afe79b0c9205191fbe43cef0556f93919
