const users = [
    {
        name: "Arjun Mehta",
        username: "@arjunm",
        imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        postUrl: "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg",
        caption: "Exploring the beauty of nature! 🌿🌞"
    },
    {
        name: "Priya Sharma",
        username: "@priyash",
        imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        postUrl: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg",
        caption: "Sunsets & city lights 🌇✨"
    },
    {
        name: "Rahul Verma",
        username: "@rahulv",
        imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        postUrl: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        caption: "Chasing dreams, one step at a time 🚀"
    },
    {
        name: "Sneha Iyer",
        username: "@snehai",
        imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
        postUrl: "https://images.pexels.com/photos/3777967/pexels-photo-3777967.jpeg",
        caption: "A little coffee and a lot of confidence ☕💪"
    },
    {
        name: "Vikram Nair",
        username: "@vikramn",
        imageUrl: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
        postUrl: "https://images.pexels.com/photos/3389535/pexels-photo-3389535.jpeg",
        caption: "Adventure awaits! 🌍✈️"
    },
    {
        name: "Ananya Rao",
        username: "@ananyar",
        imageUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
        postUrl: "https://images.pexels.com/photos/1410223/pexels-photo-1410223.jpeg",
        caption: "Smile, shine, and sparkle! ✨😊"
    },
    {
        name: "Karan Malhotra",
        username: "@karanm",
        imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        postUrl: "https://images.pexels.com/photos/3151916/pexels-photo-3151916.jpeg",
        caption: "Live the moment, love the journey ❤️"
    },
    {
        name: "Deepika Reddy",
        username: "@deepikar",
        imageUrl: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg",
        postUrl: "https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg",
        caption: "Dancing through life 🎶💃"
    },
    {
        name: "Rohan Joshi",
        username: "@rohanj",
        imageUrl: "https://images.pexels.com/photos/3561476/pexels-photo-3561476.jpeg",
        postUrl: "https://images.pexels.com/photos/1543763/pexels-photo-1543763.jpeg",
        caption: "Keep it real, keep it fun 😎"
    },
    {
        name: "Nisha Patel",
        username: "@nishap",
        imageUrl: "https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg",
        postUrl: "https://images.pexels.com/photos/1812547/pexels-photo-1812547.jpeg",
        caption: "Lost in the world of books 📚💖"
    },
    {
        name: "Aditya Kapoor",
        username: "@adityak",
        imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        postUrl: "https://images.pexels.com/photos/1755384/pexels-photo-1755384.jpeg",
        caption: "Embracing the little joys of life 🌸"
    },
    {
        name: "Meera Sen",
        username: "@meeras",
        imageUrl: "https://images.pexels.com/photos/415646/pexels-photo-415646.jpeg",
        postUrl: "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
        caption: "Fashion is an art, and I’m the canvas 🎭👗"
    },
    {
        name: "Ravi Kumar",
        username: "@ravik",
        imageUrl: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg",
        postUrl: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg",
        caption: "Hiking through the unknown! ⛰️🚶‍♂️"
    },
    {
        name: "Aisha Khan",
        username: "@aishak",
        imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        postUrl: "https://images.pexels.com/photos/3060653/pexels-photo-3060653.jpeg",
        caption: "Coffee first, adulting later ☕😆"
    },
    {
        name: "Siddharth Desai",
        username: "@siddharthd",
        imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        postUrl: "https://images.pexels.com/photos/289967/pexels-photo-289967.jpeg",
        caption: "Learning, growing, evolving 📈💡"
    },
    {
        name: "Tanya Mehta",
        username: "@tanyam",
        imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        postUrl: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg",
        caption: "Weekend getaway vibes 🚗🌅"
    },
    {
        name: "Yash Thakur",
        username: "@yasht",
        imageUrl: "https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg",
        postUrl: "https://images.pexels.com/photos/25284/pexels-photo.jpg",
        caption: "Chilling like a pro 😎"
    },
    {
        name: "Neha Malhotra",
        username: "@neham",
        imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
        postUrl: "https://images.pexels.com/photos/247195/pexels-photo-247195.jpeg",
        caption: "A day well spent with nature 🌳"
    },
    {
        name: "Harsh Singh",
        username: "@harshs",
        imageUrl: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
        postUrl: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg",
        caption: "Music on, world off 🎧🎵"
    },
    {
        name: "Rajat Yadav",
        username: "@rajaty",
        imageUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        postUrl: "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg",
        caption: "Feeling pawsome today 🐾🐱"
    },
    {
        name: "No Profile",
        imageUrl: "https://th.bing.com/th/id/OIP.GgOr_erN5hASmZj00A1ZfgHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
        postUrl: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
        caption: "A mystery to be unfolded... 🕵️‍♂️"
    }
  ];
  
  export default users;
  