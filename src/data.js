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
        name: "Login",
        path: '/login'
    }
    
    
]

// export const login = [
    
// {
//     name: "Login",
//     path: '/login'
// }

// ]


export const programs = [
    {
        id: 1,
        icon: <FaRunning/>,
        title: "Program One",
        info: "“When you run, the road belongs to you”",
        path: "/programs/one"
    },
    {
        id: 2,
        icon: <GiJumpingRope/>,
        title: "Program Two",
        info: "“When in doubt, just keep jumping.” ",
        path: "/programs/two"
    },
    {
        id: 3,
        icon: <GiJumpAcross/>,
        title: "Program Three",
        info: "“Fit is not a destination. It’s a way of life.”",
        path: "/programs/three"
    },
    {
        id: 4,
        icon: <GiWeightLiftingUp/>,
        title: "Program Four",
        info: "Some are born strong, & others are made strong.",
        path: "/programs/four"
    }

]




    export const plans = [
        {
            id: 1,
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
                {feature: 'Sixth Feature', available: false},
             
            ]
        },
        {
            id: 2,
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
                {feature: 'Seventh Feature', available: true},
                {feature: 'Seventh Feature Plus', available: true},
            ]
               
        },
        {
            id: 3,
            name: 'Platinum Package',
            desc: 'This package is perfect for busy people who need home service',
            price: 89.99,
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
            id: 4,
            name: 'Diamond Package',
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
        }
    ]
