document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const picture = document.getElementById('picture').value;

    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-bio').textContent = bio;
    document.getElementById('profile-pic').src = picture;
    
    document.getElementById('profile-form').reset();
});
