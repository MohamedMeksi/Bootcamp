
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const storyContainer = document.getElementById('story');
    const shuffleButton = document.getElementById('shuffle');

    const stories = [
        (noun, adjective, verb) => `Once upon a time, a ${adjective} ${noun} decided to ${verb} all day long.`,
        (noun, adjective, verb) => `The ${adjective} ${noun} couldn't stop trying to ${verb}.`,
        (noun, adjective, verb) => `In a faraway land, a ${adjective} ${noun} loved to ${verb} every morning.`,
    ];

    function generateStory(noun, adjective, verb) {
        const randomIndex = Math.floor(Math.random() * stories.length);
        return stories[randomIndex](noun, adjective, verb);
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const verb = document.getElementById('verb').value.trim();

        if (!noun || !adjective || !verb) {
            alert('Please fill in all fields!');
            return;
        }

        storyContainer.textContent = generateStory(noun, adjective, verb);
    });

    shuffleButton.addEventListener('click', () => {
        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const verb = document.getElementById('verb').value.trim();

        if (!noun || !adjective || !verb) {
            alert('Please fill in all fields before shuffling!');
            return;
        }

        storyContainer.textContent = generateStory(noun, adjective, verb);
    });
});

