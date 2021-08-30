const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
loadComments()

const displayComments = dataList => {
    const commentsDiv = document.getElementById('comments')

    dataList.forEach(data => {
        // console.log(data);
        const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.body}</p>
            <button><a onclick="commentDetails(${data.id})">Details</a></button>
        `;

        commentsDiv.appendChild(div);

    })

}

const commentDetails = commentId => {

    const url = `https://jsonplaceholder.typicode.com/comments?postId=${commentId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCommentsDetails(data[0]))
}

const displayCommentsDetails = commentDetails => {
    console.log(commentDetails);
    const commentdetailsDiv = document.getElementById('comment-details')
    const div = document.createElement('div')
    div.classList.add('comment-details')
    div.innerHTML = `
            <h2>${commentDetails.name}</h2>
            <h3>${commentDetails.email}</h3>
            <p>${commentDetails.body}</p>
    `;
    commentdetailsDiv.appendChild(div)

}