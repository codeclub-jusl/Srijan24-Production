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
    {
        eventId: 'Climb-On',
        eventName: 'Climb On',
        eventDate: {
            prelims: ['23rd March (Artificial Rock climbing Wall)'],
            finals: '24th March (Artificial Rock climbing Wall)',
        },
        eventType: 'Climbing',
        eventHashtags: ['climbing', 'Adventure'],
        eventCoordinators: [
            'Abhijeet Nona [ 6289282196 ]', 
            'Aman Mahato [ 9832267430 ]',
            'Gunendra Singh [ 6200076728 ]',
        ],
        prize: ["prize pool of Rs.6000"],
        minMembers: 1,
        maxMembers: 1,
        eventPoster: '/images/events/ClimbOn.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `The participants will need to climb the artificial wall and score points based on their performacne.`,
        eventDescription: [`Climb On is a climbing competition for individuals who want to challenge themselves and compete with other climbers. 
        The event is organized by Jadavpur University Mountaineering and Hiking Club (JUMHC). It is a great opportunity for climbers to
        showcase their skills and stamina, and have a thrilling experience.
        The event has two rounds: Prelims and Finals.
        In the Prelims, the participants are divided into two categories: Men and Women. They have to climb as high as they can in five minutes, and their scores are based on height and time.
        The top ten scorers from each category qualify for the Finals, where they have to climb in three minutes.
        The top three scorers from each category win cash prizes and certificates. The event is open for all ages and levels of climbers.`],
        eventRules: {
            "": [
                "Each participant will be given a time of 5 minutes to climb.",
                "Points will be given on the basis of height climbed and time utilized.",
                "Some areas on the climbing wall are not allowed to be touched. (Will be explained during the event.)",
                "The judges' decision will be considered final."
            ],
        },
    },
    {
        eventId: 'robosoccer',
        eventName: 'ROBOSOCCER',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Circuits & Robotics',
        eventHashtags: ["robo", "soccer", "football", "ball", "robots"],
        eventCoordinators: [
            'Sukalyan Bisui [ 8697488984 ]',
            'Adipto Ghosh Dastidar [ 6290764395 ]',
        ],
        prize: ["prize pool of Rs.2000"],
        minMembers: 1,
        maxMembers: 5,
        eventPoster: '/images/events/Robosoccer.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Robots playing soccer.`,
        eventDescription: [`Climb On is a climbing competition for individuals who want to challenge themselves and compete with other climbers. 
        The event is organized by Jadavpur University Mountaineering and Hiking Club (JUMHC). It is a great opportunity for climbers to
        showcase their skills and stamina, and have a thrilling experience.
        The event has two rounds: Prelims and Finals.
        In the Prelims, the participants are divided into two categories: Men and Women. They have to climb as high as they can in five minutes, and their scores are based on height and time.
        The top ten scorers from each category qualify for the Finals, where they have to climb in three minutes.
        The top three scorers from each category win cash prizes and certificates. The event is open for all ages and levels of climbers.`],
        eventRules: {
            "INTRODUCTION": [
                "Are you ready for a spectacle of wondrous magnitude, unlike any other, that will leave your heart racing with excitement? Experience the electrifying spectacle of the Robosoccer at SRIJAN'24 ! This thrilling game combines the excitement of match day with the world of robotics. This adrenaline-pumping game combines the high-energy atmosphere of match day with the thrilling world of robotics. Whether you're a tech aficionado or a soccer fanatic, the Robosoccer is an event you won't want to miss. The anticipation and energy in the air are palpable as you prepare to compete in the arena of the warriors.Showcase your skills by building bots, coding moves, and planning strategies. It's not just a game; it's an unforgettable experience. This is not just any game, my friends, it's an unforgettable experience. The thrill of the competition, the excitement of the crowd, and the camaraderie of your fellow competitors will leave you with memories that will last a lifetime. So don't wait - get in on the action and experience the excitement of the Robosoccer! Don't miss out - register now and be part of the most electrifying tech sports event of the year!"
            ],
            "General Rules": [
                "Each team can consist of a maximum of 5 members.",
                "The decision of the JUSC match officials is final and binding.",
                "The competition will be bisected into wired and wireless categories. The prize money will be separate for the winners of these two categories."
            ],
            "Goals" : [
                "The main goal of participating bot is to shoot the ball into the opponent's goal.",
                "The ball is to be taken across the field only by pushing. It cannot be clamped or lifted in the air, and at no point in time should the ball be covered by all sides by the participant’s bot or any part of it.",
                "Dribbling mechanisms can be used; however, the ball must have at least one direction for free motion.",
                "A participant’s bot is not supposed to interact directly with the opponent’s bot when it is not in possession of the ball. If one of the bots is in possession of the ball, the other can attempt to dispossess it by attacking only the ball.",
                "Physical interaction between the bots in this process will be tolerated if it is judged that the attacking bot went for the ball.",
                "If a bot is found to commit a foul (directly hitting/obstructing the motion of the opponent’s bot), the opponent will be given a free–shot.",
                "In case of entangling of the wires, there can be a restart, with the ball placed at the point where it was before the entangling of the wires, upon the discretion of the referee.",
                "Damaging the arena in any form will lead to immediate disqualification.",
                "After every goal is scored, the ball would be placed back in the center circle, and each bot shall restart from their respective D-lines.",
                "There shall be red regions in the four corners. If a bot pushes its opponent to that area completely, it receives points (only applicable in Round 1).",
                "Own goals are taken into account."
            ],
            "Robot Specification" : [
                "High-Torque motors are allowed.",
                "Maximum dimensions – 30cm × 30cm × 15cm.",
                "Maximum weight of the bot - maximum 2.5 kg.",
                "Planetary motors and Mecanum wheels are strictly not allowed.",
                "Maximum diameter of wheels - 6cm",
                "It is advised to all participants to have long wires. Stepping into the arena will fetch you negative points.",
                "Violation of any above specified rule could mean direct disqualification of the team."
            ]
        },
        documentLink : "https://docs.google.com/document/d/11T7RU_-vUNgSap0WcAMY0VL8hvi80Eqf-3RkAn7tRYg/edit?usp=sharing"
    },
    {
        eventId: 'homecoming',
        eventName: 'Homecoming',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Circuits & Robotics',
        eventHashtags: ['LineFollower', 'BotRace'],
        eventCoordinators: [
            'Borno Banerjee [ 7478054233 ]',
            'Rajobrata Dasgupta [ 7439319042 ]', 
            'Souvik Saha [ 8910398827 ]',
        ],
        prize: ["prize pool of Rs.1000"],
        minMembers: 1,
        maxMembers: 5,
        eventPoster: '/images/events/Homecoming.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Line follower bot race`,
        eventDescription: [`In this event the participants are required to design a robocar in such a way that it can follow black lines and curves of a given track and try to finish the track as fast as possible while making the fewest of mistakes/skipping least amount of obstacles.`],
        eventRules: {
            "": [
                "Individual or Team of participants both allowed.",
                "Track would be BLACK in colour.",
                "Robocars should be designed by the participants; both wired and wireless are allowed, power supply will be provided.",
                "Scoring would be as follows: Total time taken + penalty added for each of the curve/obstacle skipped.",
                "Lowest score wins."
            ],
        },
    },
    // {
    //     eventId: 'snap-syntax',
    //     eventName: 'SnapSyntax',
    //     eventDate: {
    //         prelims: ['TBD'],
    //         finals: 'TBD',
    //     },
    //     eventType: 'Coding',
    //     eventHashtags: ['Coding', 'BrainStorming'],
    //     eventCoordinators: [
    //         'Anurag Jha [ 7044904397 ]',
    //         'Aditya Mayukh Som [ 9874745176 ]', 
    //         'Debabrata Mondal [ 7439901282 ]',
    //     ],
    //     prize: ["Exciting Prizes for Winners"],
    //     minMembers: 3,
    //     maxMembers: 3,
    //     eventPoster: '/images/events/SnapSyntax.png',
    //     registrationType: `Srijan'24 Website`,
    //     eventShortDescription: `Snap, Code, Conquer: Memory meets mastery in web design.`,
    //     eventDescription: [`Challenge memory and design skills! Recreate a web page from 
    //     memory within a time limit, relying on recall. Strategic glimpses 
    //     refine designs, showcasing memory prowess in this unique event. 
    //     Welcome to the "Snap Syntax" where participants showcase their 
    //     HTML and CSS skills by recreating a web page from memory. This 
    //     event tests their ability to recall layout, elements, and design 
    //     nuances without direct visual reference. As the challenge 
    //     progresses, participants face intensified difficulty with 
    //     intermittent glimpses of the initial web page, requiring strategic 
    //     thinking and memory retention skills`],
    //     eventRules: {
    //         "": [
    //             "Participants will begin by observing an initial web page, which they must recreate from memory using HTML and CSS.",
    //             "The challenge unfolds without direct visual reference, requiring participants to rely solely on memory for layout, elements, and design nuances.",
    //             "During the design process, participants will be shown the initial web page 2-3 times, intensifying the challenge and demanding strategic thinking.",
    //             "The time limit for recreating the web page will be strictly enforced to add an element of urgency and test participants' ability to work efficiently."
    //         ],
    //     },
    // },
    {
        eventId: 'btg24',
        eventName: 'Bridge The Gap',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Innovative Modelling',
        eventHashtags: ['BridgingTheGap', 'StrongestBridgeWins'],
        eventCoordinators: [
            'Aritra Show [ 9748945722 ]',
            'Rohan Banik [ 7478915161 ]', 
            'Nourin Akhter Neha [ 7679916989 ]',
        ],
        prize: ["Prizes Pool of Rs 3000"],
        minMembers: 2,
        maxMembers: 4,
        eventPoster: '/images/events/Birdge the Gap.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `"Bridge the Gap" is a bridge modelling event where participants build a bridge model from scratch using materials such as popsicle sticks, planks, nails, glue, etc. utilising structural analysis and the fundamental load-transferring process.   Participants show team spirit as they race against time to build their structure. The bridges are scored based on a number of criteria, including their ability to support a load, economic sustainability and their aesthetic appeal.`,
        eventDescription: [`The open web girder type bridge, centrally loaded and designed to support the highway surface, incorporates truss members as its basic structural components.

        Using popsicles and a glue gun, these truss members are to be built by a team of minimum 2 and a maximum 4 participants to bear the design load as well as the structure's self-weight while staying within the organizers' specified parameters. 
        
        
        Teams will be judged on the economic sustainability, aesthetics, functionality and practical design approach of the structure. Teams have to build the model within a stipulated time constraint of approx. 3 hours, which will be tested by applying varied loads on it. 
        
        
        Students of all years, disciplines and educational institutions are welcomed to participate. There is no prerequisite skill besides critical thinking and creative problem solving. All the materials required for the construction of the bridge model will be provided by the organizers. The problem statement will include a detailed description of the design load and design constraints.`],
        eventRules: {
            "": [
                "Once the structure has been weighed, you are not permitted to make any changes to it.",
                "If any of these constraints are not met, the organizers may impose point deductions or disqualification at their sole discretion.",
                "Any team that does not arrive on time will be disqualified immediately.",
                "The decision of the judges shall be final and binding on all.",
                "The organizers reserve the right to modify any or all of the preceding rules as they see fit.",
                "Any changes to the rules will be highlighted on the website and emailed to all registered participants.",
                "Participants cannot bring their own materials; all required materials will be provided by the organizers."
            ],
        },
    },
    {
        eventId: 'pixellense',
        eventName: 'Pixellense',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Photography',
        eventHashtags: ['photography', 'themeophotography'],
        eventCoordinators: [
            'Debashis Mandal [ mandaldebashis48@gmail.com ]',
            'Abhinaba Biswas [ abhinababiswas1232@gmail.com ]', 
            'Supratim Sarkar [ supratimsarkar2002@gmail.com ]',
        ],
        prize: ["Prizes Pool of Rs 3000"],
        minMembers: 1,
        maxMembers: 1,
        eventPoster: '/images/events/Pixellense.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `It is a photography competition in which the photos will be judged on the basis of theme which will be announced during the fest.`,
        eventDescription: [`Photography competition, theme based and will be judged on the basis of how much it relates with the theme.`],
        eventRules: {
            "":[
                "The photo must totally be based on the given theme.",
                "Metadata must be present for the photo submitted."
            ],
        },
    },
    {
        eventId: 'reelation',
        eventName: 'REEL-A-TION',
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Photography',
        eventHashtags: ['reel', 'jupc'],
        eventCoordinators: [
            'Souvik Saha [ 8910398827 ]',
            'Rupam Chatterjee [ 9830642871 ]', 
            'Prattay Barua [ 8902081203 ]',
        ],
        prize: [
            "1st: Gorilla Pod",
            "2nd: Lens Cleaning Kit",
            "3rd: Lens Cleaning Kit",
            "Judge’s Choice: Gorilla Pod"
        ],
        minMembers: 1,
        maxMembers: 2,
        eventPoster: '/images/events/reel.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Create and post a creative reel on a given topic on Instagram using just a phone camera. Top 3 most appreciated reels win prizes.`,
        eventDescription: [`This event is for everyone with access to
        a phone with a camera, and a little bit of creativity
        - that’s all that is needed. A topic will be provided
        on the day of the event, and the participants must
        create a reel on that topic and post it on their
        Instagram within a given time period. The Top 3 reels
        receiving the most appreciation will be awarded as
        the winners, and a Judge’s choice winner will also be
        awarded`],
        eventRules: {
            "": [
                "A team must consist of 1-2 members to participate in the event. Teams must register with their team name, and the Instagram ID for the account from which the reel will be posted.",
                "The topic for the reel will be declared at 11 am on the day of the event. Participants must create a reel of minimum 15 seconds, and maximum 30 seconds, on the given topic.",
                "The reel must be recorded inside Jadavpur University Salt Lake Campus, AFTER commencement of the event. In case of any doubt, raw video files may be requested.",
                "After it is created, participants must post the reel from the Instagram account with which the team has registered, following the rules mentioned below. The faster the reel is posted, the more time it will have to gather likes, shares, and comments.",
                "Recording the reel, and posting it on Instagram, must be done by the end of Day 2. The number of likes, comments, and shares on each reel will be counted at 4 PM on Day 3."
            ],
            "RULES FOR THE POST" : [
                "Post must be in the format of: Srijan 2024: Reel-a-tion - <team name> - <caption for reel> #srijan #srijan24 #reelation #jupc #montage24 (other hashtags may also be used, but the ones given above are a must) E.g. For a team named 'Red Dragon', their post may read: Srijan 2024: Reel-a-tion – Red Dragon – Joy, hope, devastation #srijan #srijan24 #reelation #jupc #montage24 #emotion #joy #sad",
                "@jupconline and @srijan_ju must be invited for collaboration on the post. Failing to do so will lead to the entry not being considered during final judging.",
                "Minimum duration: 15 seconds",
                "Maximum duration: 30 seconds",
                "The audio applied to the reel must be consistent with the subject matter and will be considered during judging. Using trending audios with no connection to the subject matter of the reel will lead to disqualification."
            ],
            "The top 3 reels that receive the maximum amount of appreciation on Instagram by 4 pm on Day 3 will be crowned winners. How it will be calculated:": [
                "Likes: 1 point",
                "Comments: 3 points",
                "Shares: 5 points",
                "An award will also be given for Judge’s Choice which will not be dependent on any social media."
            ]
        },
    },
    {
        eventId: 'valorant-tournament',
        eventName: `SRIJAN'24 Valorant Tournament`,
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Gaming',
        eventHashtags: ['NSGArena', 'Valorant'],
        eventCoordinators: [
            'Swapnil Saha [ 9123785487 ]',
            'Spandan Ghatak [ 8981579002 ]'
        ],
        prize: [
            "1st place, each participant will receive: Cash Prize of Rs. 5000/- and Winner Trophy and certificates.",
            "2nd place, each participant will receive: Runner’s Up Trophy and certificates."
        ],
        minMembers: 5,
        maxMembers: 5,
        eventPoster: '/images/events/Valorant.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Valorant LAN erupts! 30+ teams duel for glory in 3-day showdown. Only one team shines!`,
        eventDescription: [`Gear up for three days of intense Valorant action in our 5v5 LAN tournament, featuring 30+ teams battling for the championship. Experience the thrill of live competition as players go head-to-head in a LAN environment, showcasing precision, strategy, and teamwork.This is not just a tournament; it's a gaming spectacle where every kill and objective captured reverberates through the room. Join us for the ultimate Valorant showdown and witness the champions emerge in this high-stakes LAN event.`],
        eventRules: {
            "":[
                "Refer to the document link provided above"
            ],
        },
        documentLink: "https://drive.google.com/file/d/1xSn91xis5Q1t4eNgyRl5MpZmZoKzhP8O/view?usp=sharing"
    },
    {
        eventId: 'eafc-tournament',
        eventName: `SRIJAN'24 EA Sports FC 24 LAN Tournament`,
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Gaming',
        eventHashtags: ['NSGArena', 'eafc24'],
        eventCoordinators: [
            'Anurag Jha [ 7044904397 ]',
            'Debabrata Mondal [ 7439901282 ]'
        ],
        prize: [
            "1st place, each participant will receive: Cash Prize of Rs. 3000/- and Winner Trophy and certificates.",
            "2nd place, each participant will receive: Runner’s Up Trophy and certificates."
        ],
        minMembers: 1,
        maxMembers: 1,
        eventPoster: '/images/events/FC.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `EAFC 24 ignites! 1v1 showdowns. 3 days. Solo brilliance. Esports glory awaits.`,
        eventDescription: [`Dive into the heart of competition with our 1v1 EAFC 24 tournament. Over three days, witness the solo skills of participants as they engage in a fast-paced showdown. With strategic battles and precision moves, players vie for victory and the coveted championship title. This is the stage for individual excellence—be part of the excitement as esports mastery takes center stage in EAFC 24.`],
        eventRules: {
            "":[
                "Refer to the document link provided above"
            ],
        },
        documentLink: "https://drive.google.com/file/d/1RQyVEayFfdfjdSzILO2Smz88JtA3VoEA/view?usp=sharing"
    },
    {
        eventId: 'rocket-league-tournament',
        eventName: `SRIJAN'24 Rocket League Tournament`,
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Gaming',
        eventHashtags: ['NSGArena', 'rocketleague'],
        eventCoordinators: [
            'Arka Sikder [ 79808 05318 ]',
            'Subhadip De [ 85840 38115 ]'
        ],
        prize: [
            "1st place, each participant will receive: Cash Prize of Rs. 3000/- and Winner Trophy and certificates.",
            "2nd place, each participant will receive: Runner’s Up Trophy and certificates."
        ],
        minMembers: 2,
        maxMembers: 2,
        eventPoster: '/images/events/rocket league.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Rocket League 2v2 takes flight! 3 days. Aerial battles. Teamwork & glory soar.`,
        eventDescription: [`Experience the thrill of Rocket League in our 2v2 tournament. Over three dynamic days, teams of two will soar through the arena, showcasing teamwork, coordination, and precision ball control.The Rocket League 2v2 tournament promises a visual spectacle of acrobatics and goal-scoring finesse. Join us for an exhilarating competition where duos battle for supremacy and the championship title.`],
        eventRules: {
            "":[
                "Refer to the document link provided above"
            ],
        },
        documentLink: "https://drive.google.com/file/d/1Z1w4viOFIzZMHfiHMHfyrJBWGQCvPSrV/view?usp=sharing"
    },
    {
        eventId: 'bgmi-tournament',
        eventName: `SRIJAN'24 BGMI Tournament`,
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Gaming',
        eventHashtags: ['NSGArena', 'bgmi'],
        eventCoordinators: [
            'Kingshuk Kirtania [ 70037 36262 ]',
            'Shyambhu Chaudhuri [ 79086 13718 ]'
        ],
        prize: [
            "1st place, each participant will receive: Cash Prize of Rs. 2000/- and Winner Trophy and certificates.",
            "2nd place, each participant will receive: Runner’s Up Trophy and certificates."
        ],
        minMembers: 4,
        maxMembers: 4,
        eventPoster: '/images/events/BGMI.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `Welcome to the Battleground! 30+ teams clash for 3 days. Witness strategic warfare & champions rise.`,
        eventDescription: [`Prepare for an adrenaline-fueled battleground experience in our BGMI Tournament, spanning three days of intense competition. With over 30 teams vying for supremacy, immerse yourself in the pulse-pounding action as players showcase their skills in precision shooting, tactical maneuvering, and unparalleled teamwork. This isn't just a tournament; it's a gaming extravaganza where every frag and objective captured resonates throughout the venue. Join us for the ultimate BGMI showdown and witness the rise of champions in this high-stakes offline event.`],
        eventRules: {
            "":[
                "Refer to the document link provided above"
            ],
        },
        documentLink: "https://drive.google.com/file/d/1ZFi4wU7zLWPg1-n6byhWdi3mgIqH8zHO/view?usp=sharing"
    },
    {
        eventId: 'efootball-tournament',
        eventName: `SRIJAN'24 eFootball Tournament`,
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Gaming',
        eventHashtags: ['NSGArena', 'efootball','pes'],
        eventCoordinators: [
            'Subhranuj Podder [ 81004 64406 ]',
            'Brotin Haldar [ 79081 42783 ]'
        ],
        prize: [
            "1st place, each participant will receive: Cash Prize of Rs. 2000/- and Winner Trophy and certificates.",
            "2nd place, each participant will receive: Runner’s Up Trophy and certificates."
        ],
        minMembers: 1,
        maxMembers: 1,
        eventPoster: '/images/events/eFootball.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `eFootball kicks off! 3 days. 1v1 battles. Witness solo mastery. Virtual glory beckons.`,
        eventDescription: [`Dive into the heart of the beautiful game with our eFootball Tournament, featuring a thrilling 1v1 showdown over three days of exhilarating competition. Witness the solo brilliance of players as they showcase their skills in lightning-fast matches filled with strategic depth and precise execution. From skillful dribbling to breathtaking goals, experience the intensity of esports mastery as participants battle for glory and the coveted championship title. Join us for an electrifying display of virtual football excellence in eFootball, where every match is a testament to individual skill and competitive spirit.`],
        eventRules: {
            "":[
                "Refer to the document link provided above"
            ],
        },
        documentLink: "https://drive.google.com/file/d/1B72J0XPHkT4m566Bub2RvO0dGhKqOCHC/view?usp=sharing"
    },
    {
        eventId: 'stratedgex',
        eventName: `StratEdgeX`,
        eventDate: {
            prelims: ['TBD'],
            finals: 'TBD',
        },
        eventType: 'Business & Management',
        eventHashtags: ['entrepreneurship', 'strategy','marketing'],
        eventCoordinators: [
            'Anurag Dey [ 8910178240 ]',
            'Gourav Kumar Rai [ 8335965255 ]',
            'Jotiraditya Banerjee [ 6289867756 ]'
        ],
        prize: [
            "Prize Pool of Rs. 3600",
        ],
        minMembers: 1,
        maxMembers: 3,
        eventPoster: '/images/events/StratEdgeX.png',
        registrationType: `Srijan'24 Website`,
        eventShortDescription: `StratEdgeX tests your skills in market analysis, design, and execution. You will have to balance quality and cost, and present your strategy in a convincing way.`,
        eventDescription: [
            "StratEdgeX: The Ultimate Strategy Challenge",
            "Do you have what it takes to create the best product for the market? Do you want to test your skills in analysis, design, and execution? Do you dream of winning the glory of innovation and strategy?",
            "If yes, then StratEdgeX is the competition for you. You and your team will be given a product to optimize according to the needs and wants of your target audience. You will have to balance quality and cost, and present your strategy in a convincing way.",
            "StratEdgeX is not just a competition, it is a learning experience. You will get to explore new ideas, collaborate with others, and challenge yourself. You will also get feedback from experts and peers, and a chance to win exciting prizes.",
            "Don't miss this opportunity to showcase your talent and creativity. Join StratEdgeX today and shape the future of strategic brilliance."
        ],
        eventRules: {
            "":[
                "Team Members – 1 to 3",
                "Round-1 Prelims will be an online Round",
                "Required documents will be sent 24 hours before Finals",
                "Participants choose from a generic product (provided by us), create a 3-page presentation covering market analysis, target audience, creative marketing strategy, and implementation.",
                "Round-2 Finals will be an offline Round and all members need not be present.",
                "Presentation Structure: Craft a comprehensive presentation covering market analysis, marketing strategy, and an implementation plan (traction, conversion, future projections)."
            ]
        },
    },    
]

module.exports = events