fetch('https://www.reddit.com/r/aww.json')
    .then(res=>res.json())
.then(res=>res.data.children)
.then(res=>res.map(post=>({
    author: post.data.author,
    link: post.data.url,
    img: post.data.thumbnail,
    title: post.data.title,
    num_comments: post.data.num_comments,
    subreddit: post.data.subreddit,
    subredditlink: post.data.subreddit_name_prefixed,
    permalink: post.data.permalink,

})))
.then(res=>res.map(render))
.then(res=>console.log(res))

const app = document.querySelector('#grid-listing');

const render = post => {
    const node = document.createElement('div');
    node.setAttribute('class', 'card zoom');
    node.innerHTML = `
		<div class="inner-wrap">
			<a href="http://reddit.com/${post.permalink}"><img class="thumbnail" src="${post.img}" /></a>
			<div>
                <h2 class="title"><a href="http://reddit.com/${post.permalink}">${post.title}</a></h2>
                <p>Posted by ${post.author}</p>
			</div>
		 </div>
		<div class="action-bar">
			<ul>
				<li class="comments">
					<a href="http://reddit.com/${post.permalink}"><i class="fa fa-comments-o"></i> <span class="comments-link">${post.num_comments} Comments</span></a>
				</li>
				<li class="link">
					<a href="http://reddit.com/${post.permalink}"><span>check it out</span> <i class="fa fa-external-link"></i></a>
				</li>
			</ul>
		</div>
	  `;
    app.appendChild(node);
}