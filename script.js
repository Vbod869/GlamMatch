// Array of makeup looks
const makeupLooks = [
    {
        image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        name: 'Natural Glow',
        description: 'Tampilan segar dan dewy untuk sehari-hari.',
        outfitSuggestion: 'Padukan dengan blus putih dan jeans high-waisted untuk tampilan kasual yang chic.'
    },
    {
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        name: 'Smokey Eye',
        description: 'Tampilan dramatis untuk malam hari dengan mata smokey.',
        outfitSuggestion: 'Sempurna dengan little black dress dan perhiasan statement.'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/2405/1749/files/LOOK_GARNET_NUDE_LINER_large.jpg?v=1535680093',
        name: 'Bold Lip',
        description: 'Lipstik merah klasik dengan riasan mata minimal.',
        outfitSuggestion: 'Lengkapi dengan kaus putih, blazer, dan celana tailored untuk tampilan yang powerful.'
    },
    {
        image: 'https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        name: 'Pastel Dream',
        description: 'Eyeshadow pastel lembut untuk tampilan romantis.',
        outfitSuggestion: 'Cocokkan dengan dress floral yang mengalir dan aksesori yang lembut.'
    }
];

// Function to create a makeup item for the gallery
function createMakeupItem(look) {
    const item = document.createElement('div');
    item.className = 'makeup-item';
    item.innerHTML = `
        <img src="${look.image}" alt="${look.name}">
        <div class="makeup-info">
            <h2>${look.name}</h2>
            <p>${look.description}</p>
            <p><strong>Outfit Pairing:</strong> ${look.outfitSuggestion}</p>
        </div>
    `;
    return item;
}

// Populate the makeup gallery
function populateGallery() {
    const gallery = document.getElementById('makeupGallery');
    makeupLooks.forEach(look => {
        gallery.appendChild(createMakeupItem(look));
    });
}

// Quiz questions and answers
const quizQuestions = [
    {
        question: "Apa jenis riasan yang lebih kamu sukai?",
        options: ["Natural", "Bold", "Smokey", "Soft Pastel"],
        answer: "Natural"
    },
    {
        question: "Apa jenis busana yang paling sering kamu pilih?",
        options: ["Chic Casual", "Elegant Evening", "Powerful Formal", "Romantic & Soft"],
        answer: "Chic Casual"
    }
];

// Function to start the quiz
function startQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    const startButton = document.getElementById('startQuiz');
    const quizResult = document.getElementById('quizResult');

    startButton.style.display = 'none';
    quizContainer.style.display = 'block';

    // Clear previous content
    quizContainer.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `
            <h3>${q.question}</h3>
            <div class="options">
                ${q.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Answers';
    submitButton.className = 'cta-button';
    submitButton.onclick = showResult;
    quizContainer.appendChild(submitButton);
}

// Function to show quiz result
function showResult() {
    const quizContainer = document.getElementById('quizContainer');
    const quizResult = document.getElementById('quizResult');

    const answers = [];
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            answers.push(selectedOption.value);
        } else {
            answers.push(null);
        }
    });

    // Compare answers and determine the best match
    let bestMatch = 'Natural Glow'; // Default match if no answers match

    if (answers[0] === 'Bold' && answers[1] === 'Elegant Evening') {
        bestMatch = 'Smokey Eye';
    } else if (answers[0] === 'Bold' && answers[1] === 'Powerful Formal') {
        bestMatch = 'Bold Lip';
    } else if (answers[0] === 'Soft Pastel' && answers[1] === 'Romantic & Soft') {
        bestMatch = 'Pastel Dream';
    }

    // Show result
    quizResult.style.display = 'block';
    quizResult.innerHTML = `
        <h3>Hasil Quiz</h3>
        <p>Gaya yang cocok untukmu adalah <strong>${bestMatch}</strong>.</p>
        <p>Berikut adalah rekomendasi gaya:</p>
        <div class="makeup-item">
            <img src="${makeupLooks.find(look => look.name === bestMatch).image}" alt="${bestMatch}">
            <div class="makeup-info">
                <h2>${bestMatch}</h2>
                <p>${makeupLooks.find(look => look.name === bestMatch).description}</p>
                <p><strong>Outfit Pairing:</strong> ${makeupLooks.find(look => look.name === bestMatch).outfitSuggestion}</p>
            </div>
        </div>
    `;
}




// Event listener for starting the quiz
document.getElementById('startQuiz').addEventListener('click', startQuiz);

// Populate the gallery on page load
document.addEventListener('DOMContentLoaded', populateGallery);
