import{GiJumpingRope}  from 'react-icons/gi'
import{FaRunning}  from 'react-icons/fa'
import{GiJumpAcross}  from 'react-icons/gi'
import{GiWeightLiftingUp}  from 'react-icons/gi'



export const links = [

    {
        name: "Home" ,
        icon: "|" ,
        path : '/'
    },

    {
        name: "About",
        icon: "|" ,
        path: '/about'
    },

    {
        name: "Contact",
        icon: "|" ,
        path: '/contact'
    },
    {
        name: "Plans",
        icon: "|" ,
        path: '/plans'
    },
    {
        name: "Trainers",
        icon: "|" ,
        path: '/trainers'
    },
    {
        name: "Login",
        path: '/login'
    }
    
    
]






export const values = [
    {
        id: 1,
        title: "Trainer One",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
        trainer: require("./Image/trainer1.jpg")

    },
    {
        id: 2,
        title: "Trainer Two",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
        trainer: require("./Image/trainer2.jpg")


    },
    {
        id: 3,
        title: "Trainer Three",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
        trainer: require("./Image/trainer3.jpg")


    },
    {
        id: 4,
        title: "Trainer Four",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
        trainer: require("./Image/trainer4.jpg")

    }
]


export const programs = [
    {
        id: 1,
        icon: <FaRunning/>,
        title: "Program One",
        info: "“When you run, the road belongs to you”",
        path: "/programsone"
    },
    {
        id: 2,
        icon: <GiJumpingRope/>,
        title: "Program Two",
        info: "“When in doubt, just keep jumping.” ",
        path: "/programstwo"
    },
    {
        id: 3,
        icon: <GiJumpAcross/>,
        title: "Program Three",
        info: "“Fit is not a destination. It’s a way of life.”",
        path: "/programsthree"
    },
    {
        id: 4,
        icon: <GiWeightLiftingUp/>,
        title: "Program Four",
        info: "Some are born strong, & others are made strong.",
        path: "/programsfour"
    }

]




    export const plans = [
        {
            id: 1,
            name: 'Bronze Package',
            desc: 'This package is perfect for busy people who need home service',
            price: 11.99,
            features: [
                {feature: 'First Feature', available: true},
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fourth Feature', available: true},
            ]
        },
        {
            id: 2,
            name: 'Silver Package',
            desc: 'This package is perfect for beginners who need constant help',
            price: 29.99,
            features: [
                {feature: 'First Feature', available: true},
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fourth Feature', available: true},
                {feature: 'Fifth Feature', available: true},
                {feature: 'Fifth Feature Plus', available: false},             
            ]
        },
        {
            id: 3,
            name: 'Gold Package',
            desc: 'This is the perfect package for beginners who know what their doing',
            price: 49.99,
            features: [
                {feature: 'First Feature', available: true},
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fourth Feature', available: true},
                {feature: 'Fifth Feature', available: true},
                {feature: 'Fifth Feature Plus', available: true},
                {feature: 'Sixth Feature', available: true},
              
            ]
               
        },
        {
            id: 4,
            name: 'Platinum Package',
            desc: 'This package is perfect for busy people who need home service',
            price: 79.99,
            features: [
                {feature: 'First Feature', available: true},
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fourth Feature', available: true},
                {feature: 'Fifth Feature', available: true},
                {feature: 'Fifth Feature Plus', available: true},
                {feature: 'Sixth Feature', available: true},
                {feature: 'Seventh Feature', available: true},
                {feature: 'Seventh Feature Plus', available: true},               
            ]
        },
        {
            id: 5,
            name: 'Diamond Package',
            desc: 'This package is perfect for busy people who need home service',
            price: 109.99,
            features: [
                {feature: 'First Feature', available: true},
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fourth Feature', available: true},
                {feature: 'Fifth Feature', available: true},
                {feature: 'Fifth Feature Plus', available: true},
                {feature: 'Sixth Feature', available: true},
                {feature: 'Seventh Feature', available: true},
                {feature: 'Seventh Feature Plus', available: true},
                {feature: 'Eighth Feature', available: true},
                {feature: 'Ninth Feature', available: true},
            ]
        },
        {
            id: 6,
            name: 'Crown Package',
            desc: 'This package is perfect for busy people who need home service',
            price: 119.99,
            features: [
                {feature: 'First Feature', available: true},
                {feature: 'Second Feature', available: true},
                {feature: 'Third Feature', available: true},
                {feature: 'Fourth Feature', available: true},
                {feature: 'Fifth Feature', available: true},
                {feature: 'Fifth Feature Plus', available: true},
                {feature: 'Sixth Feature', available: true},
                {feature: 'Seventh Feature', available: true},
                {feature: 'Seventh Feature Plus', available: true},
                {feature: 'Eighth Feature', available: true},
                {feature: 'Ninth Feature', available: true},
                {feature: 'Tenth Feature', available: true},
                {feature: 'Eleventh Feature', available: true}
            ]
        },
       
    ]
