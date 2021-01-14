document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#recordBtn').addEventListener('click', onRecordBtn);
document.querySelector('#playBtn').addEventListener('click', onPlayBtn);

//let recordedSound = [];

const recordedStartsTime = [
    {
        id: 'channelOne',
        time: NaN,
    },
    {
        id: 'channelTwo',
        time: NaN,
    },
    {
        id: 'channelThree',
        time: NaN,
    },
    {
        id: 'channelFour',
        time: NaN,
    },
];

const recordedSounds = [
    {
        id: 'channelOne',
        sounds: [],
    },
    {
        id: 'channelTwo',
        sounds: [],
    },
    {
        id: 'channelThree',
        sounds: [],
    },
    {
        id: 'channelFour',
        sounds: [],
    },
];

function onKeyPress(ev) {
    const sound = document.querySelector('.boom');
    const sound2 = document.querySelector('.clap');
    const sound3 = document.querySelector('.hihat');
    const sound4 = document.querySelector('.kick');
    const sound5 = document.querySelector('.openhat');
    const sound6 = document.querySelector('.ride');
    const sound7 = document.querySelector('.snare');
    const sound8 = document.querySelector('.tink');
    const sound9 = document.querySelector('.tom');

    let soundId;
    switch (ev.code) {
    case 'KeyA':
        soundId = 'boom';
        sound.classList.add('soundhover');
        setTimeout(function () {
            sound.classList.remove('soundhover');
        }, 400);
        break;

    case 'KeyS':
        soundId = 'clap';
        sound2.classList.add('soundhover');
        setTimeout(function () {
            sound2.classList.remove('soundhover');
        }, 400);
        break;
    case 'KeyD':
        soundId = 'hihat';
        sound3.classList.add('soundhover');
        setTimeout(function () {
            sound3.classList.remove('soundhover');
        }, 400);
        break;
    case 'KeyF':
        soundId = 'kick';
        sound4.classList.add('soundhover');
        setTimeout(function () {
            sound4.classList.remove('soundhover');
        }, 400);
        break;
    case 'KeyG':
        soundId = 'openhat';
        sound5.classList.add('soundhover');
        setTimeout(function () {
            sound5.classList.remove('soundhover');
        }, 400);
        break;
    case 'KeyH':
        soundId = 'ride';
        sound6.classList.add('soundhover');
        setTimeout(function () {
            sound6.classList.remove('soundhover');
        }, 400);
        break;
    case 'KeyJ':
        soundId = 'snare';
        sound7.classList.add('soundhover');
        setTimeout(function () {
            sound7.classList.remove('soundhover');
        }, 400);
        break;
    case 'KeyK':
        soundId = 'tink';
        sound8.classList.add('soundhover');
        setTimeout(function () {
            sound8.classList.remove('soundhover');
        }, 400);
        break;
    case 'KeyL':
        soundId = 'tom';
        sound9.classList.add('soundhover');
        setTimeout(function () {
            sound9.classList.remove('soundhover');
        }, 400);
        break;
    }

    if (soundId) {
        const timeStart = recordedStartsTime.find((el) => el.id == currentChannel).time;
        const soundTime = Date.now() - timeStart;
        const soundObj = {
            soundId: soundId,
            time: soundTime,
        };

        playSound(soundId);

        recordedSounds.find((el) => el.id == currentChannel).sounds.push(soundObj);
    }
}

function onRecordBtn() {
    recordedStartsTime.find((el) => el.id == currentChannel).time = Date.now();
}

function onPlayBtn() {
    for (let sound of recordedSounds) {
        let soundArr = sound.sounds;
        for (let index = 0; index < soundArr.length; index++) {
            const soundObj = soundArr[index];
            setTimeout(() => {
                playSound(soundObj.soundId);
            }, soundObj.time);
        }
    }
}

function playSound(soundId) {
    const sound = document.querySelector('#' + soundId);
    sound.play();
}

const channels = document.querySelectorAll('.ch input');
let currentChannel;

channels.forEach((channel) => {
    channel.addEventListener('change', (element) => {
        currentChannel = element.target.id;
        console.log(currentChannel);
    });
});