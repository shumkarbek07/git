const API = "https://api.github.com/users/";
console.log('API: ', API);

const img = document.getElementById('img');
const log = document.getElementById('log');
const id = document.getElementById('id');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const public = document.getElementById('public');
const search = document.getElementById('search')

async function getUsers(event) {
  event.preventDefault();
  const response = await fetch (API + search.value);
  const users = await response.json();

  img.src = users.avatar_url;
  log.innerHTML = users.login;
  id.innerHTML = users.id;
  followers.innerHTML = users.followers;
  following.innerHTML = users.following;
  public.innerHTML = users.public_repos;
}
