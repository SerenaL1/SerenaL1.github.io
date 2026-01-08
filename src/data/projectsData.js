export const projects = [
  {
    id: 1,
    title: "Computer Vision and Vision-Action-Language Model for Robotic Arm",
    company: "Momentous Health",
    companyUrl: "https://momentous-health.com/",
   // description: "Fine-tuned a vision-language-action model and deployed to a robotic arm",
    shortDesc: "Robotics Intern",
    technologies: ["Isaac Lab", "YOLO", "OpenVLA","Docker", "hand-eye calibration", "NVIDIA Container"],
    //images: ["/mycobot1.jpg"],
    details: [
      "Developed documentation for company on Mycobot 280 robotic arm set-up, Jetson Nano connection, hand-eye calibration, object detection development, robot python API usage",
      "Performed teleoperation and imitation learning of a 6 DOF arm in Isaac Lab",
      "Used Isaac Lab Mimic to generate synthetic data for training",
      "Fine-tuned a vision-language-action model for tray-pushing and page-turning tasks",
      "Deployed the model to a MyCobot 280 robotic arm",
      "Performed hand-eye calibration and visual tracking on physical robot",
      "Trained YOLOv8m model for tray-specific object detection",
      "Worked with containerized deployments using Docker"
    ],
    github: "https://github.com/SerenaL1/Mycobot-280-Jetson-Nano",
    video: "https://youtu.be/L8Mwumi1qXs"
  },
  {
    id: 2,
    title: "Waste Compaction System for Spaceflight ",
    company: "NASA Ames Research Center",
    companyUrl: "https://www.nasa.gov/ames/",
  // description: "Waste management for space missions",
    shortDesc: "NASA Mechanical Engineering Intern",
    technologies: ["Fusion360", "Systems Engineering"],
    images: [
      "/images/mpactor1.png",
      "/images/mpactor2.png",
      "/images/mpactor3.png",
    ],
    galleryLayout: "triptych",
    details: [
      "Designed and tested a Pneumatic Mandrel System to simulate spaceflight lateral trash pressure and aid NASA's development of Mechanical Trash Compactor. Determined optimal parameters for microgravity trash compaction.",
      "Created technical engineering drawings with GD&T, worked with the machine shop for part manufacturing.",
      "Presenting as first author at the 2026 International Conference on Environmental Systems."
    ],
  //  github: "https://github.com/yourusername/project1",
  //  demo: "https://demo-link.com",
  //  video: "https://youtube.com/watch?v=your-video-id" // Optional video link
  },
    {
    id: 3,
    title: "Cascading Linear Slide Robot",
    company: "Harvard John A. Paulson School Of Engineering And Applied Sciences",
    companyUrl: "https://seas.harvard.edu/",
   // description: "Waste management for space missions",
    shortDesc: "Linear Slide Robotics Team Designer",
    technologies: ["SOLIDWORKS", "CNC Milling", "Lathe Operation", "Drilling", "Laser Cutting"],
    images: [
      "/images/ES511.png",
      "/images/ES512.png",
      "/images/ES513.png",
    ],
    galleryLayout: "triptych",
    details: [
      "Worked in a team of 5 to design, manufacture, and build a 10x10x10 inch robot.",
      "Used Solidworks to design a timing belt pulley-based 3-stage cascading linear slide as the robot arm, a spur gear horizontal claw, and a 4-wheel drivetrain.",
      "Manufactured by laser cutting base plate, milling wheel molds, cutting/turning/facing shafts, drilling mount.",
      "Conducted calculations in beam bending/stress strain analysis, motor torque, tipping point analysis, geartrain design."
    ],
    video: "https://youtu.be/bGSX6uxILLk" // Optional video link
  },
  {
    id: 4,
    title: "AI Training platform for Disaster Response Volunteers",
    company: "Disaster Tech Lab",
    companyUrl: "https://disastertechlab.org/",
   // description: "AI training platform for disaster response",
    shortDesc: "Disaster Tech Lab Software Engineer",
    technologies: ["FastAPI", "React", "AI"],
    images: [
      "/images/disastertech1.png",
      "/images/disastertech2.png",
      "/images/disastertech3.png",
    ],
    galleryLayout: "mosaic",
    details: [
      "Built an AI-powered training platform for disaster response volunteers at the Disaster Tech Lab.",
      "Developed CRUD APIs and scenario management systems to streamline volunteer training processes.",
      "Integrated real-time feedback mechanisms to improve training effectiveness.",
    ],
    github: "https://github.com/SerenaL1/Disaster-Tech-Lab-Training-Platform"
    // No video for this project
  },
  {
    id: 5,
    title: "AR Depth-Based Occupancy Mapping and Floor Estimation Project",
   // company: "Disaster Tech Lab",
  //  companyUrl: "https://disastertechlab.org/",
    description: "Built Unity AR pipeline that converts iPhone LiDAR depth data into a log-odds occupancy map, esitmates floor height from occupied voxels, and explores the space via frontier detection",
    shortDesc: "Project Creator",
    technologies: ["Unity", "C#", "AR Foundation","camera intrinsics", "3D Voxel Grid","log-odds Bayesian fusion", "ARKit LiDAR"],
    images: [
      "/images/indoornav1.png",
      "/images/indoornav2.png",
     // "/images/disastertech3.png",
    ],
    galleryLayout: "mosaic",
    details: [
      "Implemented a real-time depth capture pipeline using AR Foundation, calibrated with camera intrinsics, and projected depth pixels into 3D to produce world-frame points",
      "Built a 3D voxel occupancy grid using a hash map, implemented bayesian log-odds updates with distance-weighted confidence",
      "Implemented floor-height-estimation by sampling occupied voxels inside a vertical cylinder around the camera",
      "Working on adding a frontier detection module to aid user exploration"
    ],
    github: "https://github.com/SerenaL1/Navigation-and-Object-Location"
    // No video for this project
  },
    {
    id: 6,
    title: "Biodiversity App",
   // company: "Disaster Tech Lab",
   // companyUrl: "https://disastertechlab.org/",
    description: "Biodiversity App with Species chatbot, wikipedia queries",
    shortDesc: "App Creator",
    technologies: ["FastAPI", "React", "LLM"],
    images: [
      "/images/T4SG1.png",
      "/images/T4SG2.png",
      "/images/T4SG3.png",
    ],
    galleryLayout: "mosaic",
    details: [
      "Built a full-stack species logging platform using Next.js (App Router) + React + TypeScript with a Supabase (Postgres) backend, implementing end-to-end CRUD flows",
      "Developed a Species chatbot by implementing an API route + service layer for LLM responses with input validation, error handling, and guardrails to keep responses species-focused",
      "Implemented Wikipedia-based autofill for species creation (REST calls, async state, toast-based error feedback)",
      "Added author-only editing and deletion for species entries with frontend gating using session identity, backed by Supabase policies; integrated form validation with React Hook Form + Zod"
    ],
    github: "https://github.com/SerenaL1/f25-eng-r2-deliverable"
    // No video for this project
  },
  {
    id: 7,
    title: "Survival Shooter Game",
  //  company: "Disaster Tech Lab",
   // companyUrl: "https://disastertechlab.org/",
    description: "A 2D survival shooter built in Python/Pygame featuring map-driven world loading, wave-based enemy scaling, mouse-aimed combat, and a custom camera + collision system.",
    shortDesc: "Game Developer",
    technologies: ["Python", "Pygame", "Vector Math","Sprite Systems", "Object-Oriented Design", "Collision handling"],
    images: [
      "/images/survivor1.png",
      "/images/survivor2.png",
      "/images/survivor3.png",
    ],
    galleryLayout: "mosaic",
    details: [
      "Built a 2D survival shooter in Python + Pygame with a modular architecture (game loop, entity sprites, UI screens, camera group) and an external tilemap pipeline using Tiled TMX via pytmx",
      "Built a responsive combat system with Mouse-aimed rotating gun anchored using vector math, sprites lifecycle management (spawn offset, velocity integration with dt, time-based despawn) and collision resolution",
      "Implemented a wave-based difficulty system with kill tracking, increasing enemies-per-wave",
      "Built health + damage mechanics with invincibility frames",
      "Implemented a camera + render-sorting system using a custom sprite group that offsets world coordinates around the player and draws sprites in depth order"
    ],
    github: "https://github.com/SerenaL1/Survival-Shooter-Game",
    video: "https://youtu.be/LF20n24ZtN8"
  },
  {
    id: 8,
    title: "SheDriveApp",
    description: "Women-focused ride-sharing application",
    shortDesc: "Safe ride-sharing for women",
    technologies: ["Laravel", "PHP", "MySQL", "Flutter"],
  //  images: ["/project3.jpg"],
    details: `Developed a ride-sharing application prioritizing safety features for women users.
    
Implemented robust backend systems using Laravel and MySQL for reliable service delivery.

Focused on user authentication, real-time tracking, and safety verification systems.`,
    github: "https://github.com/yourusername/project3"
  }
];