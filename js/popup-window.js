const getProjectDetails = (project) => {
  const projectDetails = {
    Tonic: {
      name: 'Tonic',
      details: ['CANOPY', 'Backend', '2015', 'Dev'],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        "industry. Lorem Ipsum has been the industry's standard dummy text" +
        'ever since the 1500s, when an unknown printer took a galley of type' +
        'and scrambled it 1960s with the releaLorem Ipsum is simply dummy' +
        'text of the printing and typesetting industry. Lorem Ipsum has been' +
        "the industry's standard dummy text ever since the 1500s, when an" +
        'unknown printer took a galley of type and scrambled it 1960s with' +
        'the releorem Ipsum is simply dummy text of the printing and' +
        'typesetting industry. Lorem Ipsum han printer took a galley of type',
      image:
        '<img src="../src-image/Snapshoot-Portfolio.png" alt="Tonic project screenshot" class="popup-project-image" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'CSS'],
      live_server: 'https://github.com/',
      source: 'https://github.com/',
    },

    Stories: {
      name: 'Multi purpose stories',
      details: ['Facebook', 'Backend', '2021'],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        "industry. Lorem Ipsum has been the industry's standard dummy text" +
        'ever since the 1500s, when an unknown printer took a galley of type' +
        'and scrambled it 1960s with the releaLorem Ipsum is simply dummy' +
        'text of the printing and typesetting industry. Lorem Ipsum has been' +
        "the industry's standard dummy text ever since the 1500s, when an" +
        'unknown printer took a galley of type and scrambled it 1960s with' +
        'the releorem Ipsum is simply dummy text of the printing and' +
        'typesetting industry. Lorem Ipsum han printer took a galley of type',
      image:
        '<img src="../src-image/SnapshootPortfolio1.png" alt="Tonic project screenshot" class="popup-project-image" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'CSS'],
      live_server: 'https://github.com/',
      source: 'https://github.com/',
    },

    360: {
      name: 'Facebook 360',
      details: ['Facebook', 'Fullstack dev', '2015'],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        "industry. Lorem Ipsum has been the industry's standard dummy text" +
        'ever since the 1500s, when an unknown printer took a galley of type' +
        'and scrambled it 1960s with the releaLorem Ipsum is simply dummy' +
        'text of the printing and typesetting industry. Lorem Ipsum has been' +
        "the industry's standard dummy text ever since the 1500s, when an" +
        'unknown printer took a galley of type and scrambled it 1960s with' +
        'the releorem Ipsum is simply dummy text of the printing and' +
        'typesetting industry. Lorem Ipsum han printer took a galley of type',
      image:
        '<img src="../src-image/Snapshoot-Portfolio2.png" alt="Tonic project screenshot" class="popup-project-image" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'CSS'],
      live_server: 'https://github.com/',
      source: 'https://github.com/',
    },

    Uber: {
      name: 'Uber Navigation',
      details: ['Uber', 'Lead Developer', '2018'],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        "industry. Lorem Ipsum has been the industry's standard dummy text" +
        'ever since the 1500s, when an unknown printer took a galley of type' +
        'and scrambled it 1960s with the releaLorem Ipsum is simply dummy' +
        'text of the printing and typesetting industry. Lorem Ipsum has been' +
        "the industry's standard dummy text ever since the 1500s, when an" +
        'unknown printer took a galley of type and scrambled it 1960s with' +
        'the releorem Ipsum is simply dummy text of the printing and' +
        'typesetting industry. Lorem Ipsum han printer took a galley of type',
      image:
        '<img src="../src-image/imag-3.png" alt="Tonic project screenshot" class="popup-project-image" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'CSS'],
      live_server: 'https://github.com/',
      source: 'https://github.com/',
    },
  };

  return projectDetails[project];
};

const popup = document.getElementById('popup');

const seeProjectButton = document.querySelectorAll('.see-project');
seeProjectButton.forEach((element) => {
  element.addEventListener('click', () => {
    popup.style.display = 'block';

    const projectDetails = getProjectDetails(element.id);
    document.getElementById('popup-project-title').innerHTML =
      projectDetails.name;
    let details = '';

    Object.keys(projectDetails.details).forEach((key) => {
      details += ' <i class="fas fa-circle divider"></i> ';
      details += `<span class="client-name">${projectDetails.details[key]}</span> `;
    });

    document.getElementById('popup-project-info').innerHTML = details;
    document.getElementById('popup-project-image-holder').innerHTML =
      projectDetails.image;
    document.getElementById('popup-project-description').innerHTML =
      projectDetails.description;

    let popupProjectStack = '';
    Object.keys(projectDetails.technologies).forEach((key) => {
      popupProjectStack += `<span class="label">${projectDetails.technologies[key]}</span>`;
    });

    document.getElementById('popup-project-stack').innerHTML =
      popupProjectStack;
    document.getElementById('see-live-btn').addEventListener('click', () => {
      window.location.href = projectDetails.live_server;
    });

    document.getElementById('see-source-btn').addEventListener('click', () => {
      window.location.href = projectDetails.source;
    });
  });
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  popup.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};
