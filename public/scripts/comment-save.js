const saveCommentHandle = async (event) => {
  event.preventDefault();
  const comment = document.querySelector('#comment-content').value.trim();
  const article_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch('/api/articles/comment', {
    method: 'POST',
    body: JSON.stringify({
      article_id,
      comment
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(response)
  if (response.ok) {
    document.location.replace(`/articles/${article_id}`)
  } else {
    alert('Failed to save comment')
  }
}

document
  .querySelector('#comment-submit-btn')
  .addEventListener('click', saveCommentHandle)