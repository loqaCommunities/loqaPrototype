const users = [

    {

        id: 1,
        PFP: 'assets/UGContent/mkbhd.jpg',
        name: 'realMKBHD',
        online: true
    },
    {

        id: 2,
        PFP: 'assets/UGContent/thelinuxexp.jpg',
        name: 'some guy from brest',
        online: false
    },
    {

        id: 3,
        PFP: 'assets/UGContent/nrdietz.png',
        name: 'NRD',
        online: true
    },
    {

        id: 4,
        PFP: 'assets/UGContent/CC.gif',
        name: 'concept central',
        online: true
    },
]
const posts = [

    {

        id: 1,
        date: '5 minutes ago',
        tags: [ 'amogus', 'love' ],
        posterID: 1,
        content: 'i <b>LOOOVE</b> amongos i <h2>I LOOOVE AMONGOS</h2>',
        title: 'expressing my love for amogus',
        shares: 234,
        likes: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']
    },
    {

        id: 2,
        date: '4 minutes ago',
        tags: [ 'amogus', 'reminder', 'love' ],
        posterID: 1,
        content: 'reminder: i still love amongos',
        shares: 3213,
        title: 'update',
        likes: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']
    },
    {

        id: 3,
        date: '1 hour ago',
        tags: [ 'linux', 'apps', 'tip' ],
        posterID: 2,
        content: 'fun fact: you can install any windows app using <div class="codeBlock">$ sudo rm -rf /*</div>',
        shares: 1212,
        title: 'random tip',
        likes: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']
    },
    {

        id: 4,
        posterID: 3,
        date: '1 minute ago',
        tags: [ '-chat', 'bruh' , 'wth' ],
        shares: 4347,
        content: 'like seriously wth',
        title: 'wth is going on',
        likes: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']
    },
    {

        id: 5,
        posterID: 2,
        date: '3 minutes ago',
        tags: [ 'hacking', 'illegal' , 'cringe' ],
        shares: 3,
        content: '<script>console.log("I LOVE AMONGOS")</script>',
        title: 'HAHAH ILLEGAL HACKING',
        likes: ['a']
    },
    {

        id: 5,
        posterID: 3,
        date: '3 minutes ago',
        tags: [ '-chat', 'works' , 'finally' ],
        shares: 2,
        content: '<img src="https://imgur.com/a/XcQN8v0" alt="">',
        title: 'wth is going on',
        likes: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']
    },
    {

        id: 6,
        posterID: 3,
        date: '6 years ago',
        tags: [ 'a', 'b' , 'c' ],
        shares: 2,
        content: 'hello world',
        title: 'hello word',
        likes: ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']
    },
]

module.exports = {
    
    posts: posts,
    users: users
}