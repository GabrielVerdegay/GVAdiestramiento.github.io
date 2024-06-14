document.addEventListener("DOMContentLoaded", function() {
    const articles = [
        {
            title: "Cómo empezar con el adiestramiento canino",
            content: "El adiestramiento canino es fundamental para una convivencia armónica con tu mascota..."
        },
        {
            title: "Las mejores técnicas de refuerzo positivo",
            content: "El refuerzo positivo es una de las técnicas más efectivas y humanas para adiestrar a tu perro..."
        }
    ];

    const articlesContainer = document.getElementById('articles');

    function renderArticles() {
        articlesContainer.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('article');
            const titleElement = document.createElement('h2');
            const contentElement = document.createElement('p');

            titleElement.textContent = article.title;
            contentElement.textContent = article.content;

            articleElement.appendChild(titleElement);
            articleElement.appendChild(contentElement);

            articlesContainer.appendChild(articleElement);
        });
    }

    document.getElementById('article-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        articles.push({ title, content });

        document.getElementById('title').value = '';
        document.getElementById('content').value = '';

        renderArticles();
    });

    renderArticles();
});
