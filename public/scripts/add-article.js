const newArticleHandle = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#new-article-title').value.trim();

  const content = document.querySelector('#new-article-content').value.trim();
  console.log(content, title)
  if (title && content) {
    const response = await fetch('/api/articles', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText)
    }
  }
}

document
  .querySelector('#new-article-form')
  .addEventListener('submit', newArticleHandle)