const events = [
    {
        eventId: 'openaimer',
        eventName: 'OpenAImer',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'coding',
        eventHashtags: ['hackathon', 'machinelearning' , 'ai' , 'openaimer'],
        eventCoordinators: [
            'Rajdeep Khaskel [ 6290241875 ]',
            'Sounak Ghosh [ 8910272026 ]',
            'Sushmit Dasgupta [ 8100145170 ]',
        ],
        prize: ["1st : 5000   |   " , "2nd : 3000  |   " , "3rd : 2000 " ],
        minMembers: 1,
        maxMembers: 3,
        eventPoster: '/images/events/openalmer[1]-01.jpg',
        registrationType : `Srijan'24 Website`,
        eventShortDescription: `Embark on the ML adventure in 'OpenAImer'! Unleash your algorithms, analyse data, and spark innovation!`,
        eventDescription: [`The event will consist of two rounds, Online Prelims (hosted on Kaggle) consisting of two tracks, Feature Selection and Puzzle Solving using AI, and an Offline Presentation Round.
        Embark on the ML adventure in 'OpenAImer'! Unleash your algorithms, decode data, and spark innovation!`],
        eventRules: {
        "Online Preliminary Round " : [
        
        "Team Name must match Registration on Srijan website and Kaggle." , 
        "Any Team publishing their notebooks as PUBLIC in the Code Section will be DISQUALIFIED." , 
        "You are not allowed to make more than 10 SUBMISSIONS A DAY." ,
        "Shortlisting based on undisclosed WEIGHTED AVERAGE of the TWO TRACKS."] ,
        
       " Offline Presentation Round" : [
        "Participants must present their solutions within 10 MINUTES of allotted time." ,
        "Points will be awarded based on INNOVATION and the ability to effectively address JUDGES' QUESTION." , 
        " Bonus points on EXPLAINABILITY of approach."
        ],
    },
} ,

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
    maxMembers: 4 ,
    registrationType : `Srijan'24 Website`,
    prize: ["Certificates and prize pool of Rs.2000"],
    eventShortDescription: `Roborace: Mini F1-like event where small bots compete autonomously on a track, showcasing cutting-edge racing technology`,
    eventDescription: [`Roborace is a thrilling event where pint-sized bots navigate a track autonomously, resembling a scaled-down version of Formula 1 racing. These small yet mighty machines showcase cutting-edge technology as they speed through twists and turns without human intervention. Spectators witness the future of motorsports unfold as these robotic competitors push the limits of agility and precision, offering a glimpse into the potential of autonomous driving in high-speed environments.`],
    eventRules: {
    " " : [
    
   "2 columns of bots will be placed (just like an F1 race). There will be a lucky draw as to determine their starting positions.", 
    "Round(s) will be a race of 8-10 bots on a track on the road. The one who finishes first will get 300points, 2nd 200, 3rd 100. Subsequent bots will get points as [(Total bots – position finished)/(total bots)]* 100. ",
    "If a bot moves out of the track it will get -30. No driver will be allowed to enter the track. If so then their bot will get -50." ,
    "A bonus of 75 points will be awarded to the most innovative bot.",
    "The bot with max points will be the winner.",
    "The bots will have to be completely wireless",
    "Bot dimensions: Max size is 30cm*30cm*30cm",
    "Max weight: 4kg",
    "Max voltage: 24V",
    "Bot with sharp objects attached or with dead weight will be disqualified",
    "Total track width will be 2m"],
    
    "Note":[" At any point the decision taken by the coordinators will be final"] ,
},
} ,
]

module.exports = events