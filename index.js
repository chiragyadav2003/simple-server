const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3000;

const todos = [
    {
        id: 1,
        title: "Design a Solar-Powered Rocket",
        description: "Create an eco-friendly rocket that harnesses solar energy for propulsion. Aim for a sustainable journey to outer space."
    },
    {
        id: 2,
        title: "Invent a Talking Plant",
        description: "Develop a plant that communicates with its caretaker, expressing emotions and providing helpful gardening advice."
    },
    {
        id: 3,
        title: "Build a Time-Traveling Doormat",
        description: "Craft a doormat that transports anyone who steps on it to a different time period. Watch out for dinosaurs!"
    },
    {
        id: 4,
        title: "Write a Haiku for Robots",
        description: "Compose a poetic haiku that resonates with artificial intelligence. Reflect on circuits, code, and electric dreams."
    },
    {
        id: 5,
        title: "Create a Holographic Cookbook",
        description: "Compile a cookbook where recipes come to life as holograms. Cooking will never be the same!"
    },
    {
        id: 6,
        title: "Construct a Cloud-Castle in the Sky",
        description: "Imagine and design a castle made of fluffy clouds, complete with floating bridges and ethereal landscapes."
    },
    {
        id: 7,
        title: "Develop a Mood-Sensing Room",
        description: "Build a room that adjusts its ambiance based on the occupant's mood. A sanctuary of personalized comfort."
    },
    {
        id: 8,
        title: "Paint a Galactic Mural",
        description: "Create a mural depicting an entire galaxy on a massive canvas. Let the cosmic colors and shapes mesmerize observers."
    },
    {
        id: 9,
        title: "Fashion a Dress Made of LED Lights",
        description: "Design a stunning dress adorned with programmable LED lights. Shine bright at any futuristic fashion event."
    },
    {
        id: 10,
        title: "Compose a Symphony for AI",
        description: "Craft a symphony tailored for artificial intelligence, exploring the beauty of electronic sounds and algorithms."
    },
    {
        id: 11,
        title: "Bake Quantum Cookies",
        description: "Experiment with quantum baking to create cookies that exist in multiple states simultaneously. A delicious paradox!"
    },
    {
        id: 12,
        title: "Build a Robotic Garden Helper",
        description: "Invent a robot that assists with gardening tasks, from planting seeds to watering and pruning. The ultimate green thumb companion."
    },
    {
        id: 13,
        title: "Code a Virtual Reality Petting Zoo",
        description: "Develop a virtual reality experience where users can interact with digital animals in a whimsical and immersive petting zoo."
    },
    {
        id: 14,
        title: "Craft Levitating Furniture",
        description: "Design furniture that defies gravity, adding an element of magic to living spaces. Who needs legs when you can float?"
    },
    {
        id: 15,
        title: "Write a Sonnet for Cyborgs",
        description: "Compose a poetic sonnet exploring the intersection of humanity and technology, capturing the essence of the cyborg experience."
    },
    {
        id: 16,
        title: "Create a Rainbow-Generating Machine",
        description: "Invent a machine that can paint rainbows across the sky on demand. A colorful and joyful addition to any landscape."
    },
    {
        id: 17,
        title: "Sculpture of Digital Dreams",
        description: "Sculpt a masterpiece that represents the ethereal nature of dreams in the digital age. Explore the boundaries between reality and imagination."
    },
    {
        id: 18,
        title: "Develop a Puzzle for Quantum Computers",
        description: "Craft a mind-bending puzzle specifically designed to challenge the computational powers of quantum computers. Quantum puzzling at its finest."
    },
    {
        id: 19,
        title: "Build a Robot Comedian",
        description: "Program a robot with a knack for humor. Create a stand-up routine that sparks laughter and delight in audiences of all circuits."
    },
    {
        id: 20,
        title: "Design a Bioluminescent Garden",
        description: "Imagine a garden filled with plants that emit soft, natural light. Create a serene and enchanting nocturnal escape."
    },
    {
        id: 21,
        title: "Compose a Lullaby for Androids",
        description: "Craft a soothing lullaby tailored for androids, designed to bring a sense of calm to the world of artificial intelligence."
    },
    {
        id: 22,
        title: "Build a Quantum Treehouse",
        description: "Construct a treehouse that exists in multiple quantum states. A unique retreat where reality blurs with each climb."
    },
    {
        id: 23,
        title: "Create a Virtual Dance Party",
        description: "Develop a virtual reality dance party experience, complete with digital DJ, interactive dance floor, and dazzling light effects."
    },
    {
        id: 24,
        title: "Invent a Mood-Altering Tea",
        description: "Formulate a tea blend that adjusts its flavor based on the drinker's mood. A sip of joy, tranquility, or excitement in every cup."
    },
    {
        id: 25,
        title: "Design Robotic Origami Sculptures",
        description: "Combine the ancient art of origami with modern robotics to create sculptures that transform and move in captivating ways."
    },
    {
        id: 26,
        title: "Craft a Celestial Navigation App",
        description: "Develop an app that guides users using the positions of celestial bodies. Turn stargazing into a navigational adventure."
    },
    {
        id: 27,
        title: "Build a Cloud-Forming Machine",
        description: "Invent a device that can create clouds on demand. Bring shade and whimsy to sunny days with your own cloud creation."
    },
    {
        id: 28,
        title: "Write a Poem for Cyberspace",
        description: "Compose a poetic ode to the vast expanse of cyberspace, exploring the digital realms and virtual landscapes."
    },
    {
        id: 29,
        title: "Design a Robotic Fashion Show",
        description: "Organize a fashion show featuring robots as models. Showcase the latest in futuristic and stylish robotic attire."
    },
    {
        id: 30,
        title: "Create an AI-Powered Art Gallery",
        description: "Curate an art gallery where AI-generated artworks take center stage. Explore the fusion of creativity between humans and machines."
    }
];

app.get("/", (req,res)=>{
    res.json({message:"Hi User, todos server is running"});
});

app.get("/todos", (req, res) => {
    const randomTodo = []
    for (let i = 0; i < todos.length; i++) {
        if (Math.random() > 0.5) {
            randomTodo.push(todos[i])
        }
    }
    res.json({
        todos: randomTodo
    })
})

//**useParam syntax */
app.get("/todo/:id", (req, res) => {
    const todoid = req.params.id
    if (!todos[todoid]) {
        res.status(411).json({
            msg: "invalid id , please enter id between 1-30"
        })
    }
    return res.json({
        todo: todos[todoid]
    })
})

//**query syntax */
// app.get("/todo", (req, res) => {
//     const todoid = req.query.id
//     if (!todos[todoid]) {
//         res.status(411).json({
//             msg: "invalid id , please enter id between 1-30"
//         })
//     }
//     return res.json({
//         todo: todos[todoid]
//     })
// })

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});
app.get("/subtract", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const subt = a - b;
    res.send(subt.toString());
});
app.get("/multiplication", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const mul = a * b;
    res.send(mul.toString());
});

app.get("/interest", (req, res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    res.send({
        total: total,
        interest: interest,
    })
});


function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
app.get("/notifications", (req, res) => {
    res.json({
        network: getRandomNumber(10),
        jobs: getRandomNumber(10),
        messaging: getRandomNumber(10),
        notifications: getRandomNumber(10)
    })

})



app.listen(PORT, () => {
    console.log(`app is listening on port : ${PORT}`)
})
