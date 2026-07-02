// 1. Unified Document Database
const pdfDocuments = [
    { file: "12322931 CDP.pdf", title: "CDP Certification", desc: "Career Development Program completion certificate.", tag: "Certificate" },
    { file: "15 Days Generative AI.pdf", title: "15 Days Generative AI", desc: "Intensive 15-day workshop on Generative AI models and applications.", tag: "Course" },
    { file: "AI for Beginners.pdf", title: "AI for Beginners", desc: "Foundational concepts and introduction to Artificial Intelligence.", tag: "AI/ML" },
    { file: "AI for Business Professionals.pdf", title: "AI for Business", desc: "Strategic application and business implications of AI technologies.", tag: "Business" },
    { file: "AWS Community Day.pdf", title: "AWS Community Day", desc: "Participation certificate for AWS Community Day event.", tag: "AWS" },
    { file: "AWS Community Javascript & ReactJS DevTown.pdf", title: "AWS: JS & ReactJS", desc: "DevTown workshop covering JavaScript and ReactJS with AWS integration.", tag: "AWS" },
    { file: "AWS DevTown.pdf", title: "AWS DevTown", desc: "Cloud computing fundamentals workshop organized by DevTown.", tag: "AWS" },
    { file: "AWS Fundamentals.pdf", title: "AWS Fundamentals", desc: "Core concepts of Amazon Web Services cloud infrastructure.", tag: "AWS" },
    { file: "AWS Intro C++ & DSA DevTown .pdf", title: "AWS: C++ & DSA", desc: "Data Structures and Algorithms in C++ with AWS context.", tag: "AWS" },
    { file: "AWS Javascript & ReactJs DevTown.pdf", title: "AWS: Full Stack", desc: "Full stack development using ReactJS deployed on AWS.", tag: "AWS" },
    { file: "AWS Roadmap To DevOps.pdf", title: "AWS DevOps Roadmap", desc: "Comprehensive guide and certification for AWS DevOps path.", tag: "AWS" },
    { file: "Advanced Microsoft Excel.pdf", title: "Advanced Excel", desc: "Mastery of advanced Microsoft Excel formulas and data analysis.", tag: "Skill" },
    { file: "Advanced PowerPoint.pdf", title: "Advanced PowerPoint", desc: "Professional presentation design and advanced PowerPoint techniques.", tag: "Skill" },
    { file: "Agile Project Management.pdf", title: "Agile Project Management", desc: "Certificate in Agile methodology and project management practices.", tag: "Skill" },
    { file: "BONAFIDE CERTIFICATE CDP.pdf", title: "Bonafide Certificate (CDP)", desc: "Official bonafide document for Career Development Program.", tag: "Document" },
    { file: "Bharatiya Antariksh Hackathon 2025.pdf", title: "Bharatiya Antariksh Hackathon", desc: "Participation in the 2025 National Space Hackathon.", tag: "Hackathon" },
    { file: "Build Generative AI Apps and Solutions with No-Code Tools.pdf", title: "No-Code Gen AI", desc: "Building AI solutions using no-code platforms and tools.", tag: "AI/ML" },
    { file: "Build With India.pdf", title: "Build With India", desc: "Certificate from the 'Build With India' developer initiative.", tag: "Event" },
    { file: "CISCO Introduction to Modern AI.pdf", title: "CISCO: Modern AI", desc: "Introduction to modern Artificial Intelligence concepts by Cisco.", tag: "AI/ML" },
    { file: "CSE 310 Neo Colab.pdf", title: "CSE 310: Programming", desc: "Neo Colab course completion for CSE 310.", tag: "Neo Colab" },
    { file: "CSE101 Neo Colab.pdf", title: "CSE 101: Computer Basics", desc: "Fundamental computer science course completion.", tag: "Neo Colab" },
    { file: "CSE202 Neo Colab.pdf", title: "CSE 202: Object Oriented", desc: "Object Oriented Programming course completion.", tag: "Neo Colab" },
    { file: "CSE205 Neo Colab.pdf", title: "CSE 205: Data Structures", desc: "Data Structures and Algorithms course completion.", tag: "Neo Colab" },
    { file: "CSS, Bootstrap, JavaScript And PHP Stack Complete Course.pdf", title: "Full Stack Web Dev", desc: "Complete course on CSS, Bootstrap, JS, and PHP stack.", tag: "Web Dev" },
    { file: "CT University.pdf", title: "CT University Doc", desc: "Official document/certificate from CT University.", tag: "University" },
    { file: "Certificate of Appreciation DevTown.pdf", title: "Appreciation: DevTown", desc: "Certificate of Appreciation for contributions to DevTown.", tag: "Award" },
    { file: "Certificate of Recognition Ajay Gangwar.pdf", title: "Recognition: Ajay Gangwar", desc: "Formal certificate of recognition for outstanding performance.", tag: "Award" },
    { file: "Claude Solve-A-Thon.pdf", title: "Claude Solve-A-Thon", desc: "Participation in the Claude AI problem-solving marathon.", tag: "Hackathon" },
    { file: "CodeQuery The Ultimate PL SQL & Data Science Bootcamp.pdf", title: "PL/SQL & Data Science", desc: "Bootcamp completion for Database and Data Science skills.", tag: "Data Science" },
    { file: "ComSoc HackX 2025.pdf", title: "ComSoc HackX 2025", desc: "Certificate from the ComSoc HackX 2025 hackathon.", tag: "Hackathon" },
    { file: "Complete Graphics Design Course for Beginner to Advanced.pdf", title: "Graphics Design Master", desc: "Complete guide to graphics design from beginner to advanced.", tag: "Design" },
    { file: "Computational Theory Language Principle & Finite Automata Theory.pdf", title: "Automata Theory", desc: "Course on Computational Theory and Finite Automata.", tag: "CS Theory" },
    { file: "Coursera Introduction to Hardware and Operating Systems.pdf", title: "Hardware & OS", desc: "Coursera certification on Hardware and Operating Systems.", tag: "Coursera" },
    { file: "Coursera The Bits and Bytes of Computer Networking.pdf", title: "Computer Networking", desc: "Google/Coursera certification on Computer Networking basics.", tag: "Coursera" },
    { file: "Critical Thinking in the AI Era.pdf", title: "Critical Thinking (AI)", desc: "Essential cognitive skills for navigating and evaluating AI outputs.", tag: "AI/ML" },
    { file: "Cursa.pdf", title: "Cursa Platform", desc: "Certificate of completion from Cursa learning platform.", tag: "Course" },
    { file: "Customer Experience (CX) for Business Success.pdf", title: "Customer Experience (CX)", desc: "Strategies for improving customer satisfaction and business success.", tag: "Business" },
    { file: "Data Science & Analytics.pdf", title: "Data Science & Analytics", desc: "Foundational certificate in Data Science and analytical techniques.", tag: "Data Science" },
    { file: "Deloitte Cyber Job Simulation.pdf", title: "Deloitte: Cyber Security", desc: "Practical experience with cybersecurity workflows and tools.", tag: "Job Simulation" },
    { file: "Deloitte Data Analytics Job Simulation.pdf", title: "Deloitte: Data Analytics", desc: "Data analysis project experience simulating professional workflows.", tag: "Job Simulation" },
    { file: "Deloitte Technology Job Simulation.pdf", title: "Deloitte: Tech Simulation", desc: "Broad perspective on technology consulting and development at Deloitte.", tag: "Job Simulation" },
    { file: "Dev Create Buildfest 1.0 GDG CT North Campus.pdf", title: "GDG Buildfest 1.0", desc: "Developer Create Buildfest organised by GDG CT North Campus.", tag: "Google" },
    { file: "Digital Systems From Logic Gates to Processors.pdf", title: "Digital Systems", desc: "From Logic Gates to Processors: Digital electronics course.", tag: "Engineering" },
    { file: "Flutter UI Bootcamp Build Beautiful Apps using Flutter.pdf", title: "Flutter UI Bootcamp", desc: "Building beautiful cross-platform mobile apps with Flutter.", tag: "Mobile" },
    { file: "Foundations of Web Development CSS, Bootstrap, JS, React.pdf", title: "Web Dev Foundations", desc: "Core foundations of modern web development.", tag: "Web Dev" },
    { file: "FreeCodeCamp.pdf", title: "FreeCodeCamp Cert", desc: "Certification of completion from FreeCodeCamp.", tag: "Course" },
    { file: "Fundamentals of Network Communication.pdf", title: "Network Fundamentals", desc: "Basics of network communication protocols and architecture.", tag: "Networking" },
    { file: "Gen Ai Nasscom.pdf", title: "GenAI Masterclass", desc: "Generative AI masterclass certification by Nasscom.", tag: "AI/ML" },
    { file: "Getting Started With Hadoop.pdf", title: "Hadoop Fundamentals", desc: "Introduction to big data processing and Hadoop ecosystem.", tag: "Data Science" },
    { file: "Git for Beginners.pdf", title: "Git for Beginners", desc: "Version control mastery using Git and GitHub.", tag: "DevOps" },
    { file: "Google Developer Club C++ & DSA DevTown.pdf", title: "GDSC: C++ & DSA", desc: "Google Developer Student Club workshop on C++ and DSA.", tag: "Google" },
    { file: "Google Developer Club DevTown.pdf", title: "GDSC DevTown", desc: "General participation certificate from GDSC DevTown.", tag: "Google" },
    { file: "Google Developer Club Javascript & ReactJs DevTown.pdf", title: "GDSC: JS & React", desc: "Frontend development workshop by Google Developer Student Club.", tag: "Google" },
    { file: "HTML & CSS By Sara Academy Udemy.pdf", title: "HTML & CSS Mastery", desc: "Udemy course completion for HTML and CSS web styling.", tag: "Web Dev" },
    { file: "HackTheBlock Hackathon.pdf", title: "HackTheBlock", desc: "Blockchain based hackathon participation certificate.", tag: "Hackathon" },
    { file: "HackWithVertos 1.0 Hackathon 24 hr.pdf", title: "HackWithVertos 1.0", desc: "24-hour marathon hackathon 'HackWithVertos' certificate.", tag: "Hackathon" },
    { file: "IIT ROPAR AI Fusion Advitiya'26.pdf", title: "IIT Ropar: AI Fusion '26", desc: "AI Fusion challenge at Advitiya '26, IIT Ropar.", tag: "Academic" },
    { file: "IIT ROPAR AI Fusion.pdf", title: "IIT Ropar: AI Fusion", desc: "AI Fusion workshop/event at IIT Ropar.", tag: "IIT Ropar" },
    { file: "IIT ROPAR AImagination Advitiya'26.pdf", title: "IIT Ropar: AImagination '26", desc: "AImagination event at Advitiya '26, IIT Ropar.", tag: "Academic" },
    { file: "IIT ROPAR Catalyzing Concepts.pdf", title: "IIT Ropar: Concepts", desc: "'Catalyzing Concepts' event participation at IIT Ropar.", tag: "IIT Ropar" },
    { file: "IIT ROPAR Circuit Chase.pdf", title: "IIT Ropar: Circuit Chase", desc: "Electronics circuit design competition at IIT Ropar.", tag: "IIT Ropar" },
    { file: "IIT ROPAR CodeHunt Advitiya'26.pdf", title: "IIT Ropar: CodeHunt '26", desc: "CodeHunt programming contest at Advitiya '26, IIT Ropar.", tag: "Academic" },
    { file: "IIT ROPAR CodeHunt.pdf", title: "IIT Ropar: CodeHunt", desc: "Competitive coding 'CodeHunt' challenge at IIT Ropar.", tag: "IIT Ropar" },
    { file: "IIT ROPAR Maths Arena.pdf", title: "IIT Ropar: Maths Arena", desc: "Mathematics competition participation at IIT Ropar.", tag: "IIT Ropar" },
    { file: "IIT ROPAR Space Quiz Advitiya'26.pdf", title: "IIT Ropar: Space Quiz", desc: "Space exploration knowledge competition at Advitiya '26.", tag: "IIT Ropar" },
    { file: "Integrity Pledge.pdf", title: "Integrity Pledge", desc: "Formal pledge of integrity and ethical conduct.", tag: "Document" },
    { file: "Introduction to Cybersecurity Awareness.pdf", title: "Cybersecurity Awareness", desc: "Basic principles and practices for digital security.", tag: "Networking" },
    { file: "Introduction to Digital Business Skills.pdf", title: "Digital Business Skills", desc: "Foundational skills for the modern digital business environment.", tag: "Business" },
    { file: "Javascript For Beginners Complete Course.pdf", title: "JS for Beginners", desc: "Comprehensive course on JavaScript programming language.", tag: "Web Dev" },
    { file: "Learn Blockchain and Crypto from Beginning.pdf", title: "Blockchain & Crypto", desc: "Introduction to Blockchain technology and Cryptocurrency.", tag: "Web3" },
    { file: "Master Generative AI & Generative AI tools (ChatGPT & more).pdf", title: "Master Generative AI", desc: "Mastering tools like ChatGPT and other GenAI models.", tag: "AI/ML" },
    { file: "Microsoft Excel Fundamentals A Beginners Guide.pdf", title: "Excel Fundamentals", desc: "Beginner's guide to spreadsheets and Microsoft Excel.", tag: "Skill" },
    { file: "Microsoft Excel.pdf", title: "Microsoft Excel", desc: "General certification in Microsoft Excel proficiency.", tag: "Skill" },
    { file: "Nuxt.pdf", title: "Nuxt.js", desc: "Vue.js framework 'Nuxt' development certification.", tag: "Web Dev" },
    { file: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.pdf", title: "OCI AI Foundations 2025", desc: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.", tag: "AI/ML" },
    { file: "Oracle Data Platform 2025 Certified Foundations Associate.pdf", title: "Oracle Data Platform 2025", desc: "Oracle Data Platform 2025 Certified Foundations Associate.", tag: "Data Science" },
    { file: "Packet Switching Networks and Algorithms.pdf", title: "Packet Switching", desc: "Advanced networking concepts: Packet Switching algorithms.", tag: "Networking" },
    { file: "Paranox 2.O Hackathon Main.pdf", title: "Paranox 2.0 (Main)", desc: "Main event certificate for Paranox 2.0 Hackathon.", tag: "Hackathon" },
    { file: "Paranox 2.O Hackathon.pdf", title: "Paranox 2.0", desc: "Participation certificate for Paranox 2.0 Hackathon.", tag: "Hackathon" },
    { file: "Peer-to-Peer Protocols and LAN.pdf", title: "P2P & LAN", desc: "Study of Peer-to-Peer protocols and Local Area Networks.", tag: "Networking" },
    { file: "Product Manager.pdf", title: "Product Management", desc: "Certification in Product Management fundamentals.", tag: "Business" },
    { file: "Python for Beginners Sololearn.pdf", title: "Python for Beginners", desc: "Sololearn certification for Python basics.", tag: "Programming" },
    { file: "Python for Data Science NPTEL.pdf", title: "Python for Data Science", desc: "NPTEL certification for Python in Data Science context.", tag: "Data Science" },
    { file: "ReactJs - The Complete ReactJs Course For Beginners.pdf", title: "Complete ReactJS", desc: "Zero to Hero course for ReactJS library.", tag: "Web Dev" },
    { file: "SCSE Incredible 8 .pdf", title: "SCSE Incredible 8", desc: "School of C.S.E 'Incredible 8' event recognition.", tag: "Award" },
    { file: "Software Engineering Implementation and Testing.pdf", title: "Software Engineering", desc: "Implementation and Testing methodologies in Software Engineering.", tag: "Engineering" },
    { file: "TCP & IP and Advanced Topics.pdf", title: "TCP/IP Advanced", desc: "Deep dive into TCP/IP protocols and advanced networking.", tag: "Networking" },
    { file: "The Beginner's Guide to Bash Scripting and Automation.pdf", title: "Bash Scripting", desc: "Automation and scripting using Bash shell.", tag: "DevOps" },
    { file: "The Complete C++ Programming Course from Basic to Expert.pdf", title: "C++ Expert", desc: "Comprehensive C++ programming from basic to expert level.", tag: "Programming" },
    { file: "UI UX App Design With Figma.pdf", title: "UI/UX with Figma", desc: "Designing mobile app interfaces using Figma.", tag: "Design" },
    { file: "University of Colorado System Computer Communications Specialization.pdf", title: "UC: Computer Communications", desc: "Specialization in computer networks and communication protocols.", tag: "Specialization" },
    { file: "WEB-E-STAN 4.pdf", title: "WEB-E-STAN 4.0", desc: "Web development competition 'Web-E-Stan' certificate.", tag: "Competition" },
    { file: "Web Development Cursa.pdf", title: "Web Dev (Cursa)", desc: "Web Development certification from Cursa.", tag: "Web Dev" }
];

// 2. DOM Elements
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');
const html = document.documentElement;
const grid = document.getElementById('pdfGrid');
const searchInput = document.getElementById('searchInput');
const statsBar = document.getElementById('statsBar');
const filterContainer = document.getElementById('filterContainer');

let activeTag = 'All';

// 3. Brand & Icon Mapping
const brandMap = {
    "blockchain": { class: 'card-hackathon', icon: 'fab fa-bitcoin', color: '#f59e0b' },
    "crypto": { class: 'card-hackathon', icon: 'fab fa-bitcoin', color: '#f59e0b' },
    "generative ai": { class: 'card-google', icon: 'fas fa-wand-magic-sparkles', color: '#ec4899' },
    "deloitte": { class: 'card-generic', icon: 'fas fa-briefcase', color: '#86bc25' },
    "job simulation": { class: 'card-generic', icon: 'fas fa-laptop-code', color: '#86bc25' },
    "cybersecurity": { class: 'card-cisco', icon: 'fas fa-shield-halved', color: '#ef4444' },
    "specialization": { class: 'card-coursera', icon: 'fas fa-award', color: '#0056d2' },
    "python for data science": { class: 'card-generic', icon: 'fab fa-python', color: '#3776ab' },
    "packet switching": { class: 'card-cisco', icon: 'fas fa-box', color: '#f59e0b' },
    "software engineering": { class: 'card-generic', icon: 'fas fa-laptop-code', color: '#4f46e5' },
    "tcp & ip": { class: 'card-cisco', icon: 'fas fa-route', color: '#0ea5e9' },
    "ui/ux with figma": { class: 'card-generic', icon: 'fab fa-figma', color: '#f24e1e' },
    "web dev (cursa)": { class: 'card-generic', icon: 'fas fa-window-maximize', color: '#3b82f6' },
    "full stack": { class: 'card-google', icon: 'fas fa-layer-group', color: '#818cf8' },
    "modern ai": { class: 'card-cisco', icon: 'fas fa-brain', color: '#00bceb' },
    automata: { class: 'card-generic', icon: 'fas fa-cogs', color: '#f59e0b' },
    aws: { class: 'card-aws', icon: 'fab fa-aws', color: '#ff9900' },
    google: { class: 'card-google', icon: 'fab fa-google', color: '#4285f4' },
    gdg: { class: 'card-google', icon: 'fab fa-google', color: '#4285f4' },
    gdsc: { class: 'card-google', icon: 'fab fa-google', color: '#4285f4' },
    excel: { class: 'card-microsoft', icon: 'fas fa-file-excel', color: '#217346' },
    powerpoint: { class: 'card-microsoft', icon: 'fas fa-file-powerpoint', color: '#b7472a' },
    microsoft: { class: 'card-microsoft', icon: 'fab fa-microsoft', color: '#00a4ef' },
    azure: { class: 'card-microsoft', icon: 'fab fa-microsoft', color: '#00a4ef' },
    iit: { class: 'card-iit', icon: 'fas fa-university', color: '#003366' },
    university: { class: 'card-iit', icon: 'fas fa-university', color: '#003366' },
    hardware: { class: 'card-cisco', icon: 'fas fa-server', color: '#64748b' },
    "network fundamentals": { class: 'card-cisco', icon: 'fas fa-ethernet', color: '#8b5cf6' },
    "graphics design": { class: 'card-generic', icon: 'fas fa-palette', color: '#ec4899' },
    "computer networking": { class: 'card-cisco', icon: 'fas fa-desktop', color: '#00bceb' },
    cursa: { class: 'card-generic', icon: 'fas fa-laptop-house', color: '#10b981' },
    cisco: { class: 'card-cisco', icon: 'fas fa-network-wired', color: '#00bceb' },
    antariksh: { class: 'card-hackathon', icon: 'fas fa-rocket', color: '#f43f5e' },
    hacktheblock: { class: 'card-hackathon', icon: 'fas fa-cubes', color: '#8b5cf6' },
    hackwithvertos: { class: 'card-hackathon', icon: 'fas fa-user-secret', color: '#10b981' },
    hackwithbertos: { class: 'card-hackathon', icon: 'fas fa-user-secret', color: '#10b981' },
    hackx: { class: 'card-hackathon', icon: 'fas fa-laptop-code', color: '#d946ef' },
    "solve-a-thon": { class: 'card-hackathon', icon: 'fas fa-puzzle-piece', color: '#f472b6' },
    "web-e-stan": { class: 'card-hackathon', icon: 'fas fa-globe', color: '#4285f4' },
    "paranox": { class: 'card-hackathon', icon: 'fas fa-biohazard', color: '#ef4444' },
    hackathon: { class: 'card-hackathon', icon: 'fas fa-trophy', color: '#f472b6' },
    buildfest: { class: 'card-google', icon: 'fas fa-hammer', color: '#fbbf24' },
    "html & css": { class: 'card-generic', icon: 'fab fa-html5', color: '#e34c26' },
    coursera: { class: 'card-coursera', icon: 'fas fa-graduation-cap', color: '#0056d2' },
    udemy: { class: 'card-coursera', icon: 'fas fa-graduation-cap', color: '#a435f0' },
    nptel: { class: 'card-coursera', icon: 'fas fa-graduation-cap', color: '#ff9900' },
    freecodecamp: { class: 'card-coursera', icon: 'fab fa-free-code-camp', color: '#0a0a23' },
    devtown: { class: 'card-google', icon: 'fas fa-code-branch', color: '#818cf8' },
    "neo colab": { class: 'card-generic', icon: 'fas fa-code', color: '#c084fc' },
    "ai fusion": { class: 'card-generic', icon: 'fas fa-atom', color: '#f472b6' },
    "codequery": { class: 'card-generic', icon: 'fas fa-database', color: '#4f46e5' },
    flutter: { class: 'card-google', icon: 'fas fa-mobile-alt', color: '#02569b' },
    react: { class: 'card-google', icon: 'fab fa-react', color: '#61dafb' },
    nuxt: { class: 'card-google', icon: 'fab fa-vuejs', color: '#00dc82' },
    javascript: { class: 'card-google', icon: 'fab fa-js', color: '#f7df1e' },
    js: { class: 'card-google', icon: 'fab fa-js', color: '#f7df1e' },
    python: { class: 'card-google', icon: 'fab fa-python', color: '#3776ab' },
    "c++": { class: 'card-generic', icon: 'fas fa-file-code', color: '#00599c' },
    web: { class: 'card-google', icon: 'fas fa-code', color: '#4f46e5' },
    ai: { class: 'card-google', icon: 'fas fa-brain', color: '#8b5cf6' },
    machine: { class: 'card-google', icon: 'fas fa-robot', color: '#8b5cf6' },
    data: { class: 'card-generic', icon: 'fas fa-chart-pie', color: '#10b981' },
    design: { class: 'card-generic', icon: 'fas fa-bezier-curve', color: '#f97316' },
    figma: { class: 'card-generic', icon: 'fab fa-figma', color: '#f24e1e' },
    graphics: { class: 'card-generic', icon: 'fas fa-palette', color: '#ec4899' },
    networking: { class: 'card-cisco', icon: 'fas fa-network-wired', color: '#00bceb' },
     network: { class: 'card-cisco', icon: 'fas fa-network-wired', color: '#00bceb' },
    tcp: { class: 'card-cisco', icon: 'fas fa-network-wired', color: '#00bceb' },
    packet: { class: 'card-cisco', icon: 'fas fa-network-wired', color: '#00bceb' },
    p2p: { class: 'card-cisco', icon: 'fas fa-share-alt', color: '#00bceb' },
    lan: { class: 'card-cisco', icon: 'fas fa-network-wired', color: '#00bceb' },
    devops: { class: 'card-aws', icon: 'fas fa-infinity', color: '#ff9900' },
    git: { class: 'card-aws', icon: 'fab fa-git-alt', color: '#f05032' },
    bash: { class: 'card-aws', icon: 'fas fa-terminal', color: '#4e9a06' },
    scripting: { class: 'card-aws', icon: 'fas fa-terminal', color: '#4e9a06' },
    "project management": { class: 'card-generic', icon: 'fas fa-tasks', color: '#3b82f6' },
    agile: { class: 'card-generic', icon: 'fas fa-running', color: '#10b981' },
    product: { class: 'card-generic', icon: 'fas fa-briefcase', color: '#6366f1' },
    software: { class: 'card-generic', icon: 'fas fa-code', color: '#4f46e5' },
    "theory of computation": { class: 'card-generic', icon: 'fas fa-project-diagram', color: '#8b5cf6' },
    "digital systems": { class: 'card-generic', icon: 'fas fa-microchip', color: '#10b981' },
    cdp: { class: 'card-generic', icon: 'fas fa-user-tie', color: '#8b5cf6' },
    career: { class: 'card-generic', icon: 'fas fa-briefcase', color: '#6366f1' },
    "build with india": { class: 'card-google', icon: 'fas fa-tools', color: '#ff9933' },
    html: { class: 'card-generic', icon: 'fab fa-html5', color: '#e34c26' },
    css: { class: 'card-generic', icon: 'fab fa-css3-alt', color: '#264de4' },
    bootstrap: { class: 'card-generic', icon: 'fab fa-bootstrap', color: '#7952b3' },
    php: { class: 'card-generic', icon: 'fab fa-php', color: '#777bb4' },
    sql: { class: 'card-generic', icon: 'fas fa-database', color: '#003b57' },
    ui: { class: 'card-generic', icon: 'fas fa-pen-ruler', color: '#ea580c' },
    ux: { class: 'card-generic', icon: 'fas fa-swatchbook', color: '#ec4899' },
    circuit: { class: 'card-generic', icon: 'fas fa-microchip', color: '#ef4444' },
    maths: { class: 'card-generic', icon: 'fas fa-calculator', color: '#3b82f6' },
    pledge: { class: 'card-generic', icon: 'fas fa-hand-holding-heart', color: '#10b981' },
    bootcamp: { class: 'card-generic', icon: 'fas fa-fire', color: '#f97316' },
    award: { class: 'card-hackathon', icon: 'fas fa-award', color: '#fbbf24' },
    appreciation: { class: 'card-hackathon', icon: 'fas fa-certificate', color: '#fbbf24' },
    recognition: { class: 'card-hackathon', icon: 'fas fa-medal', color: '#fbbf24' },
    "incredible 8": { class: 'card-hackathon', icon: 'fas fa-bolt', color: '#fbbf24' },
    nasscom: { class: 'card-generic', icon: 'fas fa-graduation-cap', color: '#0056d2' },
    advitiya: { class: 'card-iit', icon: 'fas fa-fire-flame-curved', color: '#ef4444' }
};

// 4. Utility Functions
function getBrandData(title, filename) {
    const lowerTitle = title.toLowerCase();
    const lowerFile = filename.toLowerCase();
    for (const key in brandMap) {
        if (lowerTitle.includes(key) || lowerFile.includes(key)) {
            return brandMap[key];
        }
    }
    return { class: 'card-generic', icon: 'fas fa-file-pdf' };
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

// 5. App Logic
function updateStatsAndFilters() {
    const tags = ['All', ...new Set(pdfDocuments.map(doc => doc.tag))];

    filterContainer.innerHTML = '';
    tags.forEach(tag => {
        const chip = document.createElement('div');
        chip.className = `filter-chip ${activeTag === tag ? 'active' : ''}`;
        chip.textContent = tag;
        chip.onclick = () => {
            activeTag = tag;
            updateStatsAndFilters();
            renderCards(searchInput.value);
        };
        filterContainer.appendChild(chip);
    });

    const totalDocs = pdfDocuments.length;
    const catCount = tags.length - 1;
    const tagFreq = pdfDocuments.reduce((acc, doc) => {
        acc[doc.tag] = (acc[doc.tag] || 0) + 1;
        return acc;
    }, {});
    const mostUsedTag = Object.entries(tagFreq).sort((a, b) => b[1] - a[1])[0]?.[0] || 'None';

    statsBar.innerHTML = `
        <div class="stat-item">
            <span class="stat-value" id="stat-total">0</span>
            <span class="stat-label">Total Assets</span>
        </div>
        <div class="stat-item">
            <span class="stat-value" id="stat-cats">0</span>
            <span class="stat-label">Categories</span>
        </div>
        <div class="stat-item">
            <span class="stat-value" style="font-size: 1.1rem; line-height: 1.5; padding-top: 0.2rem;">${mostUsedTag}</span>
            <span class="stat-label">Major Focus</span>
        </div>
    `;

    animateValue(document.getElementById('stat-total'), 0, totalDocs, 1000);
    animateValue(document.getElementById('stat-cats'), 0, catCount, 1000);
}

function renderCards(filterText = '') {
    grid.innerHTML = '';
    let count = 0;

    pdfDocuments.forEach((doc) => {
        const matchesSearch = doc.title.toLowerCase().includes(filterText.toLowerCase()) ||
            doc.tag.toLowerCase().includes(filterText.toLowerCase()) ||
            doc.desc.toLowerCase().includes(filterText.toLowerCase());
        const matchesTag = activeTag === 'All' || doc.tag === activeTag;

        if (matchesSearch && matchesTag) {
            const brand = getBrandData(doc.title, doc.file);
            const card = document.createElement('a');
            card.href = encodeURI(doc.file);
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.className = `pdf-card ${brand.class} ${brand.class !== 'card-generic' ? 'branded' : ''}`;
            card.style.animationDelay = `${count * 0.05}s`;

            card.innerHTML = `
                <div class="card-content-wrapper" style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                            <i class="${brand.icon} card-icon" style="color: ${brand.color || '#ef4444'}"></i>
                            <span class="tag" style="background: ${brand.color ? brand.color + '20' : 'var(--glow-color)'}; color: ${brand.color || 'var(--primary-color)'}">${doc.tag}</span>
                        </div>
                        <div class="card-title">${doc.title}</div>
                        <div class="card-desc">${doc.desc}</div>
                    </div>
                    <div class="card-meta">
                        <span><i class="fas fa-external-link-alt" style="font-size: 0.7em; margin-right: 4px;"></i> View Document</span>
                    </div>
                </div>
            `;
            grid.appendChild(card);
            count++;
        }
    });

    if (count === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">No documents found matching your criteria.</div>`;
    }
}

// 6. Event Listeners
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    icon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
});

searchInput.addEventListener('input', (e) => renderCards(e.target.value));

// 7. Initialization
(function init() {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initialTheme = savedTheme || systemTheme;
    
    html.setAttribute('data-theme', initialTheme);
    icon.className = initialTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    
    updateStatsAndFilters();
    renderCards();
})();
