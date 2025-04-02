
(function (userName) {

    const navbar = document.querySelector('.navbar');

    const userDiv = document.createElement('div');
    userDiv.className = 'user-welcome';

    userDiv.innerHTML = `
        <img src="https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1743588400~exp=1743592000~hmac=be13d6e37abdeb3bc236233c32bec9df134d73951b129441e582c9bd8a4519ba&w=826" alt="Profile Picture" class="profile-pic">
        <span>Bienvenue, ${userName}!</span>
    `;

    navbar.appendChild(userDiv);
})('John');