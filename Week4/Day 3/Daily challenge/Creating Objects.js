class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

const video1 = new Video("JavaScript Tutorial", "Alice", 300);
video1.watch();

const video2 = new Video("CSS Basics", "Bob", 200);
video2.watch();

const videoData = [
    { title: "HTML Basics", uploader: "Charlie", time: 150 },
    { title: "React Guide", uploader: "Dave", time: 400 },
    { title: "Node.js Intro", uploader: "Eve", time: 350 },
    { title: "Python for Beginners", uploader: "Frank", time: 500 },
    { title: "Data Structures", uploader: "Grace", time: 600 }
];

const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

videos.forEach(video => video.watch());
