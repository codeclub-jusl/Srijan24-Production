const events = [
    {
        eventId: 'openaimer',
        eventName: 'OpenAImer',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'coding',
        eventHashtags: ['hackathon', 'machinelearning', 'ai', 'openaimer'],
        eventCoordinators: [
            'Rajdeep Khaskel [ 6290241875 ]',
            'Sounak Ghosh [ 8910272026 ]',
            'Sushmit Dasgupta [ 8100145170 ]',
        ],
        prize: ["1st : 5000   |   ", "2nd : 3000  |   ", "3rd : 2000 "],
        minMembers: 1,
        maxMembers: 3,
        eventPoster: '/images/events/openalmer[1]-01.jpg',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Embark on the ML adventure in 'OpenAImer'! Unleash your algorithms, analyse data, and spark innovation!`,
        eventDescription: [`The event will consist of two rounds, Online Prelims (hosted on Kaggle) consisting of two tracks, Feature Selection and Puzzle Solving using AI, and an Offline Presentation Round.
        Embark on the ML adventure in 'OpenAImer'! Unleash your algorithms, decode data, and spark innovation!`],
        eventRules: {
            "Online Preliminary Round ": [

                "Team Name must match Registration on Srijan website and Kaggle.",
                "Any Team publishing their notebooks as PUBLIC in the Code Section will be DISQUALIFIED.",
                "You are not allowed to make more than 10 SUBMISSIONS A DAY.",
                "Shortlisting based on undisclosed WEIGHTED AVERAGE of the TWO TRACKS."],

            " Offline Presentation Round": [
                "Participants must present their solutions within 10 MINUTES of allotted time.",
                "Points will be awarded based on INNOVATION and the ability to effectively address JUDGES' QUESTION.",
                " Bonus points on EXPLAINABILITY of approach."
            ],
        },
    },

    {
        eventId: 'roborace',
        eventName: 'Roborace',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventPoster: '/images/events/ROBORACE .png',
        eventType: `circuits & robotics`,
        eventHashtags: ['miniF1', 'racetoglory'],
        eventCoordinators: [
            'Hrishitava Sarkar [ 9749513213 ]',
            'Hritam Sarkar [ 8777262351 ]',
            'Rumel Alam [ 8240998026 ]',
        ],
        minMembers: 2,
        maxMembers: 4,
        registrationType: `Srijan'24 Website`,
        prize: ["Certificates and prize pool of Rs.2000"],
        eventShortDescription: `Roborace: Mini F1-like event where small bots compete autonomously on a track, showcasing cutting-edge racing technology`,
        eventDescription: [`Roborace is a thrilling event where pint-sized bots navigate a track autonomously, resembling a scaled-down version of Formula 1 racing. These small yet mighty machines showcase cutting-edge technology as they speed through twists and turns without human intervention. Spectators witness the future of motorsports unfold as these robotic competitors push the limits of agility and precision, offering a glimpse into the potential of autonomous driving in high-speed environments.`],
        eventRules: {
            " ": [

                "2 columns of bots will be placed (just like an F1 race). There will be a lucky draw as to determine their starting positions.",
                "Round(s) will be a race of 8-10 bots on a track on the road. The one who finishes first will get 300points, 2nd 200, 3rd 100. Subsequent bots will get points as [(Total bots – position finished)/(total bots)]* 100. ",
                "If a bot moves out of the track it will get -30. No driver will be allowed to enter the track. If so then their bot will get -50.",
                "A bonus of 75 points will be awarded to the most innovative bot.",
                "The bot with max points will be the winner.",
                "The bots will have to be completely wireless",
                "Bot dimensions: Max size is 30cm*30cm*30cm",
                "Max weight: 4kg",
                "Max voltage: 24V",
                "Bot with sharp objects attached or with dead weight will be disqualified",
                "Total track width will be 2m"],

            "Note": [" At any point the decision taken by the coordinators will be final"],
        },
    },
    {
        eventId: 'ieee-cypher',
        eventName: 'Cypher 3331',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'brainstorming',
        eventHashtags: ['cryptography', 'treasure_hunt', 'cyber-security'],
        eventCoordinators: [
            'Trisha Samanta [ 6290676528 ]',
            'Md. Azhaan [ 8637007433 ]',
            'Haimi Jha [ 9433426285 ]',
        ],
        prize: ["Exciting prize pool of Rs. 5000"],
        minMembers: 1,
        maxMembers: 3,
        eventPoster: '/images/events/Cypher.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Digital treasure hunt with a hint of cryptography!`,
        eventDescription: [`Participants will be given a short crash course on the cryptographic methods to be used during the contest. Based on this knowledge and common observation, they would be required to solve 4 stages in the prelims to qualify for the finals.`],
        eventRules: {
            " ": [
                "Participants must carry their own laptops (1 per team). Carrying headphones is adviced.",
                "Participants can take notes during the session and refer to them during the contest.",
                "Any online tools might be used for additional help.",
                "First 10 teams to finish the prelims will qualify to the finals, which will have 3 winners.",
            ],
        },
    },
    {
        eventId: 'capital-clash',
        eventName: 'Capital Clash',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'business & management',
        eventHashtags: ['finance', 'business', 'finclubju', 'stock-market', 'case-study'],
        eventCoordinators: [
            'Adipto Ghosh Dastidar [ 6290764395 ]',
            'Souptik Dasgupta [ 9007475778 ]',
            'Akankcha Singh [ 7727954915 ]',
        ],
        prize: ["Exciting prize pool of Rs. 5000"],
        minMembers: 3,
        maxMembers: 5,
        eventPoster: '/images/events/capital-clash.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Hola Everyone! Let's dive into the world of Business Problems and unleash your potential by solving business complexities with Teamwork! Pitch your Solutions and get a chance to be a real Case Solver.`,
        eventDescription: [`It is a case study event where you will have to present a unique solution through the mode of ppt. It will be online.`],
        eventRules: {
            " ": [
                "Similar to case study rules. It will be notified later"
            ],
        },
    },
    {
        eventId: 'h42',
        eventName: 'H42',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'coding',
        eventHashtags: ['Competitive Programming', 'Brainstorming'],
        eventCoordinators: [
            'Dibyabrata Panja [ 8509184415 ]',
            'Ayush Sharma [ 9874180842 ]', 
            'Soujash Mandal [ 9382929688 ]',
        ],
        prize: ["Exciting prizes(TBD) for the top 3 winners(teams)"],
        minMembers: 3,
        maxMembers: 3,
        eventPoster: '/images/events/h42.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Deciphering their way through clues and challenges set in the world of binary, the fastest team to the Treasure wins.`,
        eventDescription: [`Do you enjoy coding but fail to realize its significance in the real world? Do you get bored with the mundane problems you get to solve? Do you yearn to do more? Do you want to rack your head and find the best suited algorithm? Do you have the patience to do so?
        
        H42 brought to you by Srijan, Jadavpur University, offers a splendid
        chance to prove your coding skills and end the boredom. Come, be
        a part of this coding event and code to glory.
        `],
        eventRules: {
            " ": [
                "This is a team event. Each team comprises 3 members. Inter-college teams are not allowed.",
                "There will be 2 rounds. Both the rounds will have 4 programming questions.",
                "Only one prelims will be conducted which will be in Online mode.",
                "The timing of the event will be notified later.",
                "Top 20 teams from the preliminary round will make it to the finals.",
                "The decisions of Code Club Officials are final and binding."
            ],
        },
    },
]

module.exports = events