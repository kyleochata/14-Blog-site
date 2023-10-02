//get article id number from the url
const id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

const saveEditHandle = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#article-title-input').value.trim();
  const content = document.querySelector('#article-content-input').value.trim();

  const response = await fetch(`/api/articles/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText)
  }
}

const deleteArticleHandle = async () => {
  const response = await fetch(`/api/articles/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      id,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText)
  }
}

document
  .querySelector('#save-edit-btn')
  .addEventListener('click', saveEditHandle)

document
  .querySelector('#delete-article-btn')
  .addEventListener('click', deleteArticleHandle)