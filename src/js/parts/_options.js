/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
// eslint-disable-next-line max-len
const instagramIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"/></svg>';

const options = {
    // enable custom cursor
    customCursor: true,
    hideSystemCursor: false,

    // enable parallax
    parallax: true,

    // set small navbar on load
    navbarSmall: false,

    // set small navbar on scroll
    navbarSmallMaxTop: 100,

    // twitter and instagram php paths
    php: {
        twitter: './php/twitter/tweet.php',
        instagram: './php/instagram/instagram.php',
    },

    templates: {
        instagram:
            `<a class="mpl-instagram-item" href="{{link}}" target="_blank">
                <span class="mpl-instagram-overlay">
                    ${instagramIcon}
                </span>
                <img src="{{image}}" alt="{{caption}}">
            </a>`,
        instagramLoadingText: 'Loading...',
        instagramFailText: 'Failed to fetch data',

        twitter:
            `<div>
               <div class="mpl-twitter-head">
                   <div class="mpl-twitter-avatar">
                       {{avatar}}
                   </div>
                   <a href="{{url}}" class="mpl-twitter-name">
                       {{user_name}}
                   </a>
                   <div class="mpl-twitter-date date">
                       <span>{{date}}</span>
                   </div>
               </div>
               <div class="mpl-twitter-text">
                  {{tweet}}
               </div>
            </div>`,
        twitterLoadingText: 'Loading...',
        twitterFailText: 'Failed to fetch data',
    },
};

export { options };
