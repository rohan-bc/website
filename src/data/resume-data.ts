// src/data/resume-data.ts
import type { ResumeData } from './resume-data.d'; // Import the interface

// Resume data based on the provided text
export const resumeData: ResumeData = {
  name: "ROHAN BC",
  title: "AI & Robotics Engineer",
  lastUpdated: "March 31st, 2025", // From resume header
  contact: {
    email: "rohanbc6540@gmail.com",
    linkedin: "https://linkedin.com/in/rohan-bc",
    github: "https://github.com/rohan-bc",
    website: "https://rohan-bc.com", // Keep placeholder or update if available
  },
  education: [
    {
      institution: "Vellore Institute of Technology, Chennai",
      degree: "BTECH",
      field: "Computer Science and Engineering with Specialization in AI and Robotics",
      years: "2021–2025",
    },
    {
      institution: "DAV International School, Kharghar",
      degree: "Higher Secondary Certificate (CBSE)",
      field: "Science",
      years: "2021",
    },
    {
      institution: "DAV International School, Kharghar",
      degree: "Secondary Education (CBSE)",
      field: "", // No field specified
      years: "2019",
    },
  ],
  skills: {
    languages: ["C", "C++", "Python", "R", "ROS"],
    tools: ["GitHub", "VS Code", "LTSpice", "Arduino IDE", "Raspberry Pi", "Microsoft Excel", "TinkerCAD", "AWS", "UiPath", "SolidWorks"], // Added SolidWorks from experience
    frameworks: ["Scikit-learn", "Flask", "PyTorch", "Matplotlib", "Pandas", "Numpy", "SQL", "OpenCV", "TensorFlow", "Librosa", "MediaPipe", "YOLOv8", "IoT frameworks", "Gemini AI", "OpenGL"], // Merged Libraries/Frameworks, added from projects/experience
  },
  projects: [
     {
        id: "motionai",
        title: "MotionAI: Intelligent Motion Analysis for Athlete Training",
        technologies: ["Python", "MediaPipe", "ConvLSTM", "Phyphox", "TensorFlow", "OpenCV", "Gemini AI", "OpenGL", "Dynamic Time Warping"], // From resume project section
        date: "Apr. 2025",
        description: [
            "Developed an AI-powered system for real-time athletic motion analysis using pose estimation (MediaPipe) and sensor fusion (accelerometer/gyroscope).",
            "Designed a hybrid ConvLSTM model achieving 92.39% accuracy in classifying 10 athletic actions (e.g., push-ups, boxing) from the UCF101 dataset.",
            "Integrated smartphone sensors via Phyphox for multi-modal tracking and implemented Dynamic Time Warping (DTW) for form deviation detection.",
            "Built an interactive 3D visualization (OpenGL) and AI coaching feedback system using Gemini AI for real-time corrective guidance."
        ],
        githubLink: "https://github.com/rohan-bc/Motional-AI-Based-Motion-Analysis-System-for-Athlete-Training", // Updated link
     },
     {
        id: "emotion-audio",
        title: "Emotional Analysis of Audio Using Deep Learning",
        technologies: ["Python", "TensorFlow", "Librosa", "CNN", "LSTM", "Data Augmentation"], // From resume project section
        date: "Jan 2024",
        description: [
            "Developed a deep learning-based system for real-time classification of emotions (e.g., happiness, sadness, anger) from audio.",
            "Key Components: Feature Extraction (MFCCs, Mel spectrograms via Librosa), Hybrid 1D CNN-LSTM model, Data augmentation (pitch shifting, noise injection).",
            "Trained on RAVDESS, TESS, CREMA-D, and SAVEE datasets for diverse emotional representation.",
            "Applications include empathetic AI, customer sentiment analysis, and mental health diagnostics.",
            "Achieved high accuracy and noise resilience, adaptable for real-world applications."
        ],
         githubLink: "https://github.com/rohan-bc/Emotion-Analysis-Audio", // Assuming based on pattern
     },
      {
        id: "drone-attendance",
        title: "Real-Time Class Attendance System using Drones",
        technologies: ["Machine Learning", "Python", "OpenCV", "Raspberry Pi", "Facial Recognition", "Drone Technology", "Edge Computing"], // From resume project section, added Drone tech and Edge
        date: "Jun. 2024",
        description: [
            "Designed and developed a real-time class attendance system using drone-mounted cameras and facial recognition to automate student attendance with minimal human intervention.",
            "Built and trained a machine learning model using Python and OpenCV, deployed on a Raspberry Pi attached to the drone, to detect and recognize student faces in real-time directly from captured images.",
            "Automated attendance recording by matching recognized faces to a database, demonstrating the integration of AI, computer vision, and edge computing to streamline classroom administrative tasks."
        ],
         githubLink: "https://github.com/rohan-bc/Drone-Attendance-System", // Assuming based on pattern
      },
      {
        id: "waste-segregation-arm",
        title: "Robotic Arm for Waste Segregation",
        technologies: ["Arduino", "Servo Motors", "Sensors", "C++"], // From resume project section
        date: "Jun. 2023",
        description: [
          "Developed a robotic arm that segregates metal waste from general waste using an inductive proximity sensor.",
          "Programmed the Arduino to control servo motors for precise movement and positioning of the robotic arm.",
          "Implemented an efficient algorithm to detect and sort metal waste, enhancing recycling processes."
        ],
         githubLink: "https://github.com/rohan-bc/Robotic-Waste-Segregation", // Assuming based on pattern
      },
      {
        id: "face-tracking-drone",
        title: "Real-Time Face-Tracking Drone System",
        technologies: ["YOLOv8", "Python", "OpenCV", "Drone Technology"], // From resume project section
        date: "Jun. 2024",
        description: [
          "Developed a drone system capable of real-time face-tracking using advanced computer vision techniques.",
          "Utilized YOLOv8 for accurate and fast object detection, enabling the drone to identify and follow human faces.",
          "Integrated drone controls with a Python-based application, leveraging OpenCV for image processing and analysis.",
          "Implemented robust face-tracking algorithms to maintain focus on the target even in dynamic environments."
        ],
         githubLink: "https://github.com/rohan-bc/Face-Tracking-Drone", // Assuming based on pattern
      },
  ],
  experience: [
    {
       id: "caddware",
      company: "CADDWARE, Franchisee of CADD CENTRE TRAINING SERVICES P LIMITED", // Updated company name
      title: "Intern",
      date: "May 2024 – Jul 2024",
      responsibilities: [
        "Worked on the project titled “Multi-Terrain Self-Balancing Robotic Vehicle.”",
        "Developed the structural framework of the robot using SolidWorks.",
        "Performed kinematic and dynamic analysis to optimize stability and movement.",
        "Conducted stress analysis to assess durability under varying load conditions.",
        "Utilized CAD modeling and motion simulation techniques for real-time adaptability on different terrains.",
        "Collaborated with a team to solve complex design challenges and enhance system performance.",
      ],
       certificateLink: "https://drive.google.com/file/d/19fbGz03D7WwVN11oaG7g1f0FkFhk5oDs/view",
    },
    {
       id: "lexdash",
      company: "Lexdash Technologies LLP",
      title: "Intern",
      date: "Aug 2023 – Oct 2023",
      responsibilities: [
        "Worked on the project titled “Proximity Warning Alert System (PWAS): A Smart Site Safety Solution.”",
        "Designed the system architecture for the PWAS to enhance site safety.",
        "Integrated sensors and developed real-time alerts using Python, IoT frameworks, Computer Vision, and Machine Learning.",
        "Ensured the reliability and performance of the system through rigorous testing and optimization.",
        "Demonstrated excellent problem-solving skills and collaborated effectively with the team.",
      ],
       certificateLink: "https://drive.google.com/file/d/1M6yn7_riNK1qJZyv7ABZyQrr8qL8tTSX/view",
    },
  ],
  certifications: [
     { id: "workato1", name: "Workato Automation Pro I certificate", date: "Dec. 2023", certificateLink: "https://drive.google.com/file/d/1uj4Hsfis3dsMqVn1K3vOuovv-gJ1aibv/view?usp=sharing" }, // Added certificate link
     { id: "workato2", name: "Enterprise Automation certificate", date: "Dec. 2023" }, // No separate link provided
     { id: "aws_ccp", name: "AWS Certified Cloud Practitioner CLF (SAA-C02)", date: "Dec. 2023", validationNumber: "4KE7QEFJQMQ417SL", link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/4KE7QEFJQMQ417SL", certificateLink: "https://drive.google.com/file/d/1Q8rDoa3bSYsgWCW9eDHI1XihSldTtU-p/view?usp=sharing" }, // Updated SAA-C02 to CLF based on description
     { id: "aws_saa", name: "AWS Certified Solutions Architect - Associate (SAA-C03)", date: "Feb. 2024", validationNumber: "0f07b618493544e4aa7dd982c6130e90", link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/0f07b618493544e4aa7dd982c6130e90", certificateLink: "https://drive.google.com/file/d/1d_emLOxP-TfhClOqh5FLDEUXOyReTHF8/view?usp=sharing" },
  ],
   achievements: [
     {
      id: "robo_soccer",
      name: "Robo Soccer Event Organizer (TechnoVIT'24)",
      date: "Sep 2024",
      description: "Successfully organized and managed the Robo Soccer technical event as part of TechnoVIT'24, VIT Chennai's international tech fest (Sept 19-21). Oversaw all aspects from planning and building to execution under the guidance of Dr. Muthukumaran K.",
      certificateLink: "https://drive.google.com/file/d/1dRmtB7Ls26i-f4jFPTUZRA89UokqCkCw/view?usp=sharing",
    },
    {
      id: "hod",
      name: "House of Developers (2 Day Hackathon)",
      date: "2022",
      description: "Cleared halfway through my first hackathon", // Shortened description from resume
    },

  ],
  coursework: [
    "Object-Oriented Programming",
    "Embedded Systems",
    "Artificial Intelligence",
    "Cryptography and Network Security",
    "Robotic Perception",
    "Autonomous Drones",
  ],
};