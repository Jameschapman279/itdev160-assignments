$(function() {
    var data = [
    {
      id: 1,
      title: '*Love',
      body: ' "He that loveth not knoweth not God; for God is love."',
      author: '1 John 4:8'
    },
    {
      id: 2,
      title: '*Strength',
      body: ' "Be strong and of good courage, fear not, nor be afraid of them: for the Lord thy God, he [it is] that doth go with thee; he will not fail thee, nor forsake thee."',
      author: 'Dueteronomy 31:6'
    },
    {
      id: 3,
      title: '*Wisdom',
      body: ' "See then that ye walk circumspectly, not as fools, but as wise, Redeeming the time, because the days are evil. Wherefore be ye not unwise, but understanding what the will of the Lord [is]."',
      author: 'Ephesians 5:15-17'
    },
    {
      id: 4,
      title: '*Peace',
      body: ' "If it be possible, as much as lieth in you, live peaceably with all men."',
      author: 'Romans 12:18'
    },
    {
      id: 5,
      title: '*Two Great Commandments',
      body: ' "Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first great commandment. And the second is like unto it, Thou shalt love thy neighbor as thyself."',
      author: 'Matthew 22:37-39'
    },
    {
      id: 6,
      title: '*A plan for you',
      body: ' "For I know the plans I have for you," declares the Lord, "plans to prosper you and not harm you, plans to give you hope and a future."',
      author: 'Jeremiah 29:11'
    },
    {
      id: 7,
      title: '*Have faith',
      body:'"Therefore I say unto you, what things soever ye desire, when you pray, believe that ye recieve them, and ye shall have them"',
      author: 'Mark 11:24'
    }
  ];
    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts(){
        for(let i=0;i < data.length; i++){
            const quote = data[i];

            // Create elements
            var postId = 'post-' + quote.id,
                $post = $('<section class="post"><section>'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<blockquote></blockquote>'),
                $author = $('<span class="author"></span>'),
                $navItem = $('<li></li>');

            // Add post data
            $title.text(quote.title);
            $body.text(quote.body);
            $author.text(quote.author);

            // Add nav item data
            $navItem.attr('id', quote.id);
            $navItem.text(quote.title);

            // Combine post elements
            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            // Add post and nav elements to the page
            $posts.append($post);
            $nav.append($navItem);

            // Wire up nav item click event
            $navItem.on('click', function()
             {
                var id=$(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' + id).fadeIn();
            });

            // Hide all posts and show the intro
            $posts.children('.post').hide();
            $intro.hide().fadeIn(500);
        } // end of for loop

        // Form
        var form = document.querySelector('form');
        var fname = document.getElementById('fname');
        var tword = document.getElementById('The-word');
        var submit = document.getElementById('submit');
        var para = document.getElementById('test');
        var date1 = new Date();
        var dateel = (date1.getMonth()+1) + "/" +date1.getDate() + "/" +  date1.getFullYear();

        form.onsubmit = function(e)
        {
          if (fname.value === '' || tword.value === '')
          {
            e.preventDefault();
            para.textContent = 'You need to fill in both values!';
          }
          else
          {
            e.preventDefault();
            // para.textContent = fname.value +  + lname.value  ;
            para.innerHTML = fname.value + "   " + dateel + "<br/>" + "*"+ tword.value;
          }

        }//end of form

    } //end of initPosts

initPosts();
});
