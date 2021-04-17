const filterCurrentCategory = (posts, articleCateory) => [...posts].filter((postObj) => postObj.category === articleCateory); 

const init = (articleCateory) => {
    const { posts } = window.articleData.posts;
    const postsArr = filterCurrentCategory(posts, articleCateory);

    const moreStoriesElem = document.getElementById('more-stories');

    if (!moreStoriesElem) {
        return;
    }

    for (const storyObj of postsArr) {
        const { thumbnail, title } =  storyObj;
        const storyElem = document.createElement('div');
        storyElem.className = 'more-stories-element';
        
        const storyImgElem = document.createElement('img');
        storyImgElem.className = 'more-stories-img';
        storyImgElem.src = thumbnail;
        storyElem.appendChild(storyImgElem);

        const storyContent = document.createElement('div');
        storyContent.className = 'more-stories-content';

        const storyTitleElem = document.createElement('div');
        storyTitleElem.className = 'more-stories-title';
        storyTitleElem.innerHTML = title;
        storyContent.appendChild(storyTitleElem);

        const readMoreElem = document.createElement('a');
        readMoreElem.className = 'more-stories-read-more';
        readMoreElem.innerHTML = 'Read more';
        storyContent.appendChild(readMoreElem);

        storyElem.appendChild(storyContent);

        moreStoriesElem.appendChild(storyElem);

        const hr = document.createElement('hr');
        moreStoriesElem.appendChild(hr);
    }
};

module.exports = {
    init
};