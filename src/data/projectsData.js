export const projects = [
  {
    id: 1,
    title: "Analysis and Evaluation of One-Step Generative Models",
    company: "Kempner Institute for the Study of Natural and Artificial Intelligence",
    companyUrl: "https://kempnerinstitute.harvard.edu/",
   // description: "Fine-tuned a vision-language-action model and deployed to a robotic arm",
    shortDesc: "AI Researcher",
    technologies: ["Diffusion Models", "Flow Matching"],
    images: ["/images/fairbench1.png", "/images/fairbench2.png", "/images/fairbench3.png"],
    details: [
  `Co-first authored an ECCV-submitted paper proposing a controlled benchmark comparing native 
  one-step generative flow models (MeanFlow, iMF, SoFlow) against state-of-the-art multi-step 
  diffusion and flow systems (e.g., Stable Diffusion 3.5, FLUX, Scale-RAE).`,

  `Designed standardized inference protocols controlling classifier-free guidance (CFG) 
  and sampling step count to enable fair cross-model comparison.`,

  `Proposed a composite evaluation objective, MinMax Harmonic Mean (MMHM), integrating 
  FID, Inception Score, CLIP Score, and PickScore to mitigate single-metric optimization bias.`,

  `Conducted large-scale benchmarking experiments on ImageNet, ImageNetV2, and reLAIONet 
  to analyze scaling behavior and qualitative failure modes of emerging one-step generators.`
],
    github: "https://github.com/Harvard-AI-and-Robotics-Lab/FairBenchmarkingFlow",
    paper: "https://arxiv.org/abs/2603.14186v1"
  },
  {
    id: 2,
    title: "Adapting Zero-Shot 3D reconstruction Models to Medical Imaging Data",
    company: "Kempner Institute for the Study of Natural and Artificial Intelligence",
    companyUrl: "https://kempnerinstitute.harvard.edu/",
    shortDesc: "AI Researcher",
    technologies: ["Image-to-3D Generative Models", "Point-Cloud Evaluation Metrics","Medical CT/MRI Imaging","Single-View 3D Reconstruction"],
    images: ["/images/sam3d1.png", "/images/sam3d2.png", "/images/sam3d3.png"],
    details: [
  `Co-first authored a benchmark evaluating zero-shot single-slice-to-3D reconstruction 
  performance of image-to-3D foundation models across medical CT/MRI and natural object datasets.`,

  `Designed a standardized pipeline extracting masked midpoint slices from volumetric scans 
  and comparing predicted 3D point clouds against ground-truth anatomical geometry.`,

  `Quantified domain transfer limitations of natural-image geometric priors using surface 
  distance and voxel-overlap metrics`,

  `Showed that simpler anatomical structures yield stronger coarse shape recovery, while 
  irregular pathological morphologies exhibit severe reconstruction degradation.`,
],
    github: "https://github.com/luoyan407/Benchmark_3D_Generative_Models",
    paper: "https://arxiv.org/abs/2602.09407"
  },
  {
    id: 3,
    title: "Robotic Manipulation via World Model Planning",
    company: "Kempner Institute for the Study of Natural and Artificial Intelligence",
    companyUrl: "https://kempnerinstitute.harvard.edu/",
    shortDesc: "AI Researcher",
    technologies: ["World Models", "Vision-Language-Action Policies","Visual Token Conditioning"],
    images: ["/images/worldmodel1.png"],
    details: [
  `The only undergraduate in my year selected for the 2026 Kempner Undergraduate Research Experience award.`,

  `Developing a hierarchical manipulation framework that leverages a pre-trained world 
  model to generate high-level task plans as goal image tokens, enabling structured 
  long-horizon robotic behavior.`,
  
  `Extending Vision-Language-Action policy inputs during training`,

  `Currently exploring training-free strategies in policy steering`,
],
    github: "Will be released when paper is written",
   // paper: "https://arxiv.org/abs/2602.09407"
  },
  {
    id: 4,
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
    id: 5,
    title: "Clinical Event Recognition with Vision-Language Models",
    company: "Momentous Health",
    companyUrl: "https://momentous-health.com/",
   // description: "Fine-tuned a vision-language-action model and deployed to a robotic arm",
    shortDesc: "Robotics & AI Intern",
    technologies: ["Qwen3-VL",
    "Multimodal LoRA Fine-Tuning",
    "Preference Optimization DPO, GRPO",
    "Prompt Engineering",
    "Edge AI Deployment",
    "Jetson Orin Nano",
    "Synthetic Video Training Pipelines"
  ],
    //images: ["/mycobot1.jpg"],
    details: [
      `Fine-tuned Qwen3-2B VLM for clinical event recognition from memory-care surveillance 
      video, targeting safety-critical behaviors such as falls, wandering, and choking.`,
    `Designed a structured training pipeline combining LoRA-based supervised fine-tuning, 
    direct preference optimization (DPO), and reinforcement-style policy refinement (GRPO) 
    with an LLM-critic-in-the-loop evaluation framework.`,
    `Developed prompt-engineering strategies and taxonomy-constrained chain of thought reasoning to 
    improve classification reliability in low-quality surveillance footage.`,
    `Built synthetic-video data generation and data filtering workflows`,
    `Deploying to Jetson Orin Nano edge device for real-time on-device monitoring.`
  ],
    github: "Will be released following product launch",
    //video: "https://youtu.be/L8Mwumi1qXs"
  },

  {
    id: 6,
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
      "Created technical engineering drawings, familiarity with GD&T, worked with the machine shop for part manufacturing.",
      "Presenting as first author at the 2026 International Conference on Environmental Systems.",
      "Paper will be released following conference presentation."
    ],
  //  github: "https://github.com/yourusername/project1",
  //  demo: "https://demo-link.com",
  //  video: "https://youtube.com/watch?v=your-video-id" // Optional video link
  },
  {
  id: 7,
  title: "AR Soil Analysis and Crop Recommendation System",
  company: "MIT Reality Hack",
  companyUrl: "https://www.realityhackatmit.com/",
  shortDesc: "XR / AI Developer",
  technologies: [
    "OpenAI API",
    "Google Gemini",
    "Unity",
    "AR SDK (RayNeo X3 Pro)",
    "Geospatial APIs (GPS SDK)",
    "Edge-to-Cloud Integration"
  ],
  images: ["/images/mitrealhack.png"],
  details: [
    `https://devpost.com/software/farmer-hand`,
    `Awarded Silver Prize (Best in Hack) and Track Honorable Mention for 
    developing an AI crop decision-support system, deployed on RayNeo X3 Pro glasses.`,
    `Built a multimodal pipeline streaming images from AR glasses to OpenAI vision models 
    for soil feature extraction, with Gemini-based voice interaction for real-time user 
    feedback.`,
    `Designed a quantitative soil evaluation framework computing composite metrics 
    (water retention, drainage, erosion risk) and mapping them to crop-specific suitability
    scores via weighted optimization.`,
    `Integrated geospatial data from on-device GPS SDK to enable location-specific recommendations `,
    `Developed Unity-based visualization to translate model outputs into 
    simulated crop growth outcomes`,
    `Worked with real-time image streaming, asynchronous inference, and rendering feedback
    back onto wearable AR hardware.`
  ],
  //github: "",
  video: "https://youtu.be/km84MQmKFro"
},
    {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
];