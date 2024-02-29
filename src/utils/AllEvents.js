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
                "No power supply will be provided. Connection between the bot and controller may be wired or wireless. Wire must be slack at all times.",
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
            'Abir Sen [ 6290764395 ]',
            'Soumyadeep Pal [ 9007475778 ]',
            'Souptik Dasgupta [ 7727954915 ]',
        ],
        prize: ["Exciting prize pool of Rs. 5000"],
        minMembers: 2,
        maxMembers: 3,
        eventPoster: '/images/events/capital-clash.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Hola Everyone! Let's dive into the world of Business Problems and unleash your potential by solving business complexities with Teamwork! Pitch your Solutions and get a chance to be a real Case Solver.`,
        eventDescription: [`Capital Clash is a case study event where you will be given the financial background of a company and the problems it is facing. Using your financial and business knowledge, analyse the flaws in the financial model and come up with solutions on how to correct it.`],
        eventRules: {
            "Rules": [
                "The case will be released 4 days before the event",
                "Each team can have 2-3 members",
                "Participants would have to submit their presentation 1 day before the event",
                "There would be 1 round",
                "Each team would be allocated 4 minutes to present their case",
                "After presentation, there would be a Q&A period of 2 minutes."
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
    {
        eventId: 'control-craft',
        eventName: 'ControlCraft: Path Mastery',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'circuits & robotics',
        eventHashtags: ['ControlCraft', 'RoboticDomination'],
        eventCoordinators: [
            'Diptanshu Chakrabartty [ 9531681891 ]',
            'Sayan K. Sah [ 8927309046 ]', 
            'Saptarshi Maity [ 8942027507 ]',
        ],
        prize: ["prize pool of Rs.10000"],
        minMembers: 1,
        maxMembers: 4,
        eventPoster: '/images/events/control-craft.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Get ready to blast off in the ControlCraft Robotics Challenge, a mechatronics spectacle like no other, hosted by the Mechatronics Club. This year, we're pushing the boundaries of manual control mastery and robot-building brilliance!`,
        eventDescription: [`Initiate Engines! ControlCraft Awaits!

        Unit designations confirmed. Prepare for deactivation of objective obstacles.
        
        Mission Parameters:
        
        Path Protocol: Traverse designated terrain. Eliminate deviations. Execute maneuvers with optimal efficiency.
        Object Acquisition: Secure scattered units. Implement precise manipulation. Construct designated formation.
        ControlCraft Convergence: Integrate acquired skills. Navigate complex environment. Achieve designated objectives for maximum efficiency.
        This is NOT a mere construction exercise. It is a symphony of mechatronics. Showcase your unit's technical elegance and your own control algorithms. Dominate the competition. Ascend to the robotic pinnacle.
        
        Are you ready for the upload?
        
        Register now and initiate your robotic potential!`],
        eventRules: {
            "General Guidelines": [
                "Each team must not exceed 4 members. Members can be from any department and any year but must be from the same institution.",
                "A total of 6 minutes will be provided for completion of the task.",
                "The maximum dimension of the robot can be 20cm x 20cm x 15cm  (l x b x h ) including wheels excluding the manipulator. Correction up to 1 cm is allowed.",
                "Equip your robot with a reliable four-wheel roving mechanism & a pick-and-place manipulator mechanism.",
                "Implement a Wired or Wireless communication to control the robot's motion and pick and place mechanism. [everything will be manually controlled]",
                "The length of the wire (for wired bots) should be long enough so as to avoid tangling.",
                "Maximum permissible weight including the manipulator must not exceed 4 kg.",
                "Teams have to compete in this event by making its path through a specified track or arena."
            ],
        },
        documentLink: "/pdf/ControlCraft@JUMTC.pdf",
    },
    {
        eventId: 'uncode',
        eventName: 'Uncode',
        eventDate: {
            prelims: ['20th March (6:00 pm to 7:30pm)'],
            finals: '23rd March (2:30 pm to 5:00 pm)',
        },
        eventType: 'coding',
        eventHashtags: ['uncode', 'reverseengineering', 'coding','brainstorming', 'puzzles'],
        eventCoordinators: [
            'Farhan Ikbal [ 8967463602 ]',
            'Upayan De [ 9874589366 ]', 
            'Om Mittal [ 7003516965 ]',
        ],
        prize: ["prize pool of Rs.5000"],
        minMembers: 1,
        maxMembers: 2,
        eventPoster: '/images/events/uncode.jpeg',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Put on your thinking caps and get ready to spot patterns, provide inputs and analyse outputs from a rogue executable to tame the underlying logic. Can you extract order from chaos? Or will you succumb to the entropy of 1's and 0's?`,
        eventDescription: [`Unlock the secrets of binary executables and decode your way to victory at our Reverse Engineering Event as part of this Srijan 2024! This thrilling competition invites tech buffs to showcase their prowess in unraveling the mysteries of executable files. Gather your team of 1-2 members, as we open the gates to inter-college participation, welcoming all undergraduates to embark on this intellectual journey. Brace yourselves for a two-round challenge where the online Prelims will test your mental mettle, with the top 10 teams advancing to the gripping offline Finals. Join us in this riveting exploration of reverse engineering and leave your imprint in the realm of binary brilliance!`],
        eventRules: {
            "": [
                "The contest will consist of a number of problems of increasing difficulty.",
                "Each problem will be in the form of an executable file, which provides an output on being given an input.",
                "The expected format of an input to the executable will be mentioned in the problem statement.",
                "You will be required to write a program (in C/C++/Python/Java) that behaves indistinguishably from the given executable for all inputs in the domain.",
                "Teams indulging in plagiarism will be disqualified.",
            ],
        },
    },
    {
        eventId: 'hackforge',
        eventName: 'HackForge - Forging the Future',
        eventDate: {
            prelims: ['till 14th March 11:59pm'],
            finals: '17th March (10am to 8pm)',
        },
        eventType: 'coding',
        eventHashtags: ['hackathon', 'challenges'],
        eventCoordinators: [
            'Rajdeep Mallick [ 7029422038 ]',
            'Arindam Halder [ 8777712395 ]', 
            'Anurag Jha [ 7044904397 ]',
        ],
        prize: ["1st: Rs.5000", "2nd: Rs.3000", "3rd: Rs.2000", "Best Beginner: Rs.1000", "Best UI/UX: Rs.1000", "Top Performers: will get a chance to be a part of the hiring process for 2 months (Remote) paid internship at 221B Baker Street."],
        minMembers: 3,
        maxMembers: 4,
        eventPoster: '/images/events/hackforge.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Welcome to HackForge, an electrifying offline hackathon brought to you by CodeClub JUSL as part of Srijan'24`,
        eventDescription: [`Dive into the future of technology with CodeClub's "HackForge: Forging the Future" at Jadavpur University! Join over 150 students for an exhilarating marathon of Creation, Innovation & Fun at our Salt Lake campus. Whether you're a seasoned coder or an eager explorer, don't miss this dynamic event to unleash your potential. Experience the thrill of innovation and be part of shaping tomorrow's world. Join us for an extraordinary celebration of ingenuity and excitement at Jadavpur University!`],
        eventRules: {
            "Guidelines": [
                "Open to all students who are currently enrolled in a college or university.",
                "Teams comprising 3-4 members are required, with participation open to both inter-institutional and inter-batch collaborations.",
                "There will be 2 rounds: Idea Submission Round and Coding+Pitching Round.",
                "In the Idea Submission Round, each team has to submit their idea in a PPT (maximum 10 slides) based on the themes provided, through this portal.",
                "Shortlisted teams will qualify for the Coding+Pitching Round which will be conducted onsite in SMCC Building, Jadavpur University Salt Lake Campus.",
                "Top performers (if eligible) will get a chance to be a part of the hiring process for 2 months (Remote) paid internship at 221B Baker Street with a chance of grabbing a FTE opportunity after the intern period."
            ],
            "Rules": [
                "The Coding+Pitching Round will start sharp at 10am. All team members have to be present onsite during this round, otherwise, the team will be disqualified.",
                "Participants can use any tech stack to build the solution based on the given themes.",
                "All the commits in the Github repository must contain commits only after the start of the onsite round of the hackathon.",
                "All submissions will be run through a plagiarism detector. Any case of code plagiarism will result in the disqualification of the team from the contest.",
                "Your code will be evaluated at different timestamps, so it's important to periodically push code to the specified repository.",
                "Note: Foods, beverages will be provided to all team members in the onsite round."
            ],
            "Problem Statements": [
                "The problem statements will be revealed soon..."
            ]
        },
        unstopRegistrationLink: "https://unstop.com/hackathons/hackforge-forging-the-future-srijan-2024-jadavpur-university-jadavpur-university-kolkata-912703",
        websiteLink: "https://hackforge.srijanju.in"
    },

    {
        eventId: 'sherlocked',
        eventName: 'Sherlocked',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'coding',
        eventHashtags: ['coding','brainstorming'],
        eventCoordinators: [
            'Anurag Jha [ 7044904397 ]',
            'Manas Pratim Biswas [ 8942981600 ]', 
            'Tanmay Roy [ 8101159941 ]',
        ],
        prize: ["Exciting prizes(TBD) for the top 3 winning teams"],
        minMembers: 3,
        maxMembers: 3,
        eventPoster: '/images/events/sherlocked.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Sherlocked: A thrilling coding and puzzle-solving challenge. Prelims feature 10 puzzles and 2 coding questions. Top teams advance to a multi-level 2-hour Finals for ultimate victory.`,
        eventDescription: [`Prepare yourself for the ultimate test of coding and problem-solving skills! The Preliminary Round kicks off with 10 challenging puzzles and 2 coding problems, all squeezed into a fast-paced 1-hour showdown. But that's just the beginning! The top teams will move on to the thrilling Finals: Sherlocked! Get ready for a 2-hour adventure filled with technical challenges and strategic thinking. Each level gets tougher, pushing you to use all your coding expertise and puzzle-solving skills. It's a mix of coding challenges, brain teasers, and the excitement of a capture-the-flag competition.`],
        eventRules: {
            "": [
                "Prelims: 10 puzzles, 2 coding questions, 1-hour round.",
                "Top teams advancing to Finals will be declared on the same or next day.",
                "Sherlocked Finals: 2-hour event with progressive difficulty levels",
                "Teams advance by clearing levels, aiming to finish all as quickly as possible.",
                "Fastest team clearing all levels will be declared the ultimate winner.",
            ],
        },
    },

    {
        eventId: 'math-e-magician',
        eventName: 'math-e-magician',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'brainstorming',
        eventHashtags: ['brainstorming' , 'matholympiad'],
        eventCoordinators: [
            'Subha Bhattacharya [ 9073701438 ]',
            'Shubhayan Ghosal  [ 9903297707 ]', 
            'Subhajit Fadikar [ 9330377041 ]',
        ],
        prize: ["Prizepool of 3000"],
        minMembers: 1,
        maxMembers: 3,
        eventPoster: '/images/events/math-e-magician.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Prelims will consist of a Terrific Brainstorming Math Olympiad and the Fi- nals will be consisting of a Math Seminar to be organized by Finalists grouped in appropriate teams`,
        eventDescription: [`There will be 2 events in the MATH-E-MAGICIAN.
        Prelims will consist of a Terrific Brainstorming Math Olympiad and the Finals will be consisting of a Math Seminar to be organized by Finalists grouped in appropriate teams on the APPLICATIONS OF MATHEMATICS IN YOUR FAVOURITE ENGINEERING SCIENCE`],
        eventRules: {
            "": [
                "Each team can have a maximum of three members.",
                "Participants must adhere to the given time limits for each round.",
                "Topics in the second round should be well-formulated and challenging.",
                ],
        },
    },

    // {
    //     eventId: 'robosoccer',
    //     eventName: 'ROBOSOCCER',
    //     eventDate: {
    //         prelims: ['22/3/24'],
    //         finals: '23/3/24',
    //     },
    //     eventType: 'circuits & robotics',
    //     eventHashtags: ["robo", "soccer", "football"],
    //     eventCoordinators: [
    //         'Sukalyan Bisui [ 8697488984 ]',
    //         'Adipto Ghosh Dastidar [ 6290764395 ]', 
    //     ],
    //     prize: ["Prize pool of Rs.2000"],
    //     minMembers: 1,
    //     maxMembers: 5,
    //     eventPoster: '/images/events/h42.png',
    //     registrationType: `Srijan'24 Website`,
    //     eventShortDescription: `Robots playing soccer`,
    //     eventDescription: [`Are you ready for a spectacle of wondrous magnitude, unlike any other, that will leave your heart racing with excitement? Experience the electrifying spectacle of the Robosoccer at SRIJAN'24 ! This thrilling game combines the excitement of match day with the world of robotics. This adrenaline-pumping game combines the high-energy atmosphere of match day with the thrilling world of robotics.
    //     Whether you're a tech aficionado or a soccer fanatic, the Robosoccer is an event you won't want to miss. The anticipation and energy in the air are palpable as you prepare to compete in the arena of the warriors.Showcase your skills by building bots, coding moves, and planning strategies. It's not just a game; it's an unforgettable experience
    //     This is not just any game, my friends, it's an unforgettable experience. The thrill of the competition, the excitement of the crowd, and the camaraderie of your fellow competitors will leave you with memories that will last a lifetime.
    //     So don't wait - get in on the action and experience the excitement of the Robosoccer! Don't miss out - register now and be part of the most electrifying tech sports event of the year!`],
    //     eventRules: {
    //         "General Rules": [
    //             "Each team can consist of a maximum of 5 members.",
    //             "The decision of the JUSC match officials is final and binding.",
    //             "The competition will be bisected into wired and wireless categories. The prize money will be separate for the winners of these two categories.",
    //         ],
    //         "Goals": [
    //             "The main goal of participating bot is to shoot the ball into the opponent's goal.",
    //             "The ball is to be taken across the field only by pushing. It cannot be clamped or lifted in the air and at no point of time should the ball be covered by all sides by the participant’s bot or any part of it.",
    //             "Dribbling mechanisms can be used; however, the ball must have at least one direction for free motion.",
    //             "A participant’s bot is not supposed to interact directly with the opponent’s bot when it is not in possession of the ball. If one of the bots is in possession of the ball, the other can attempt to dis-possess it by attacking only the ball.",
    //             "Physical interaction between the bots in this process will be tolerated if it is judged that the attacking bot went for the ball.",
    //             "If a bot is found to commit a foul (directly hitting/obstructing the motion of the opponent’s bot), the opponent will be given a free–shot.",
    //             "In case of entangling of the wires, there can be a restart, with the ball placed at the point where it was before the entangling of the wires, upon the discretion of the referee.",
    //             "Damaging the arena in any form will lead to immediate disqualification.",
    //             "After every goal is scored the ball would be placed back in the centre circle and each bot shall restart from their respective D-lines.",
    //             "There shall be red regions in the four corners. If a bot pushes its opponent to that area completely, it receives points (only applicable in Round 1).",
    //             "Own goals are taken into account."
    //         ],
    //     },
    //     documentLink: "https://docs.google.com/document/d/11T7RU_-vUNgSap0WcAMY0VL8hvi80Eqf-3RkAn7tRYg/edit#heading=h.c5rpsdy8g2ak",
    // },

    // {
    //     eventId: 'ace-the-case',
    //     eventName: 'Ace The Case',
    //     eventDate: {
    //         prelims: ['TBD'],
    //         finals: 'TBD',
    //     },
    //     eventType: 'business & management',
    //     eventHashtags: ['#Case_Study', 'Problem_Solving'],
    //     eventCoordinators: [
    //         'Piyush Gupta [ 7439484942 ]',
    //         'Raktim Banerjee [ 9569584047 ]', 
    //         'Souptik Dasgupta [ 9007475778 ]',
    //     ],
    //     prize: ["TBD"],
    //     minMembers: 1,
    //     maxMembers: 3,
    //     eventPoster: '/images/events/h42.png',
    //     registrationType: `Srijan'24 Website`,
    //     eventShortDescription: `Business case-study event to test everything, from your real-world problem solving to Pitching Skills, all under 24 hours!`,
    //     eventDescription: [`Do you  have an astute proclivity for brainstorming and have a knack of finding solutions to problems?
    //     We've got you covered!
    //     Unleash your problem solving prowess in "Ace the Case"! Hop in for a thrilling opportunity to analyze real world challenges, develop innovative solutions and showcase your strategic acumen. Embrace the chance to network , interact and rise to the challenge!`],
    //     eventRules: {
    //         "Event Rules": [
    //             "Join the Group links sent via emails beforehand to avoid last minute hassle.",
    //             "The event is to be conducted in two rounds : Selection Round and Finale",
    //             "Prompts will be provided to you 2 days PRIOR to the event.",
    //             "Strictly adhere to the slide limits in each Round.",
    //         ],
    //         "Selection Round": [
    //             "Event to be Conducted Online",
    //             "Each team needs to submit an Abstract Report of the case study provided to them within 24 hours",
    //             "The timer will start IMMEDIATELY as the Prompt Release is mailed/sent to the team",
    //             "Slide Limit: 1 SLIDE ONLY",
    //         ],
    //         "Finale": [
    //             "Pitching Time is 4-5 mins",
    //             "Judges Rebuttal time is 2-3 mins",
    //             "Brownie points for sticking to the time limit.",
    //             "Max. Slide limit: 4 Slides + 1 Slide for Team Name + 1 Concluding Slide",
    //             "The Event details will be provided to you once you qualify the Selection Round."
    //         ],
    //     },
    //     // documentLink: "/pdf/ControlCraft@JUMTC.pdf",
    // },
    
    
]

module.exports = events