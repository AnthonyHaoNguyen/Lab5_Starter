// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  const synth = window.speechSynthesis;

  function populateVoices() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  synth.onvoiceschanged = populateVoices;
  populateVoices();

  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const voices = synth.getVoices();
    const selectedIndex = voiceSelect.value;

    if (selectedIndex === 'select' || !voices[selectedIndex]) return;

    utterance.voice = voices[selectedIndex];

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}