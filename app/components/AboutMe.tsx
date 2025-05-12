const ProfileCard = () => {
    return (
      <div className="p-8 space-y-4">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">AGNIBHA CHAKRABORTY</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Full Stack Developer with a passion for crafting web applications
            </p>
          </div>
        </div>
  
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          Engineering student at Vellore Institute of Technology (Bhopal) pursuing Integrated MTech in Computer Science Engineering specialization in Cybersecurity with a CGPA of 9.36. I have strong passion to build new things and learn new techlonogies. 
        </p>
  
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Domains</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li>
              Full Stack Developer in Web2 and Web3 domains with proficiency in JavaScript. .  
            </li>
            <li>
              Agentic AI developer building Generative AI applications.
            </li>
            <li>
              Researcher in the field of Cryptography, Quantum Computing and Cybersecurity
            </li> 
          </ul>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Achievements</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li>
              Ranked in the top 3 academically in a batch of 200+ students
            </li>
            <li>
              Secured a top 10 position as a national finalist in the Blockbash Hackathon by Hackerearth
            </li>
            <li>
              Advanced to the university-level finals of the Smart India Hackathon 2023 among 2000+ participants
            </li> 
          </ul>
        </div>
  
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Current Roles</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li>Academic Secretary - Student Council (Student Welfare Office)</li>
            <li>President - Blockchain Club VITB</li>
          </ul>
        </div>
  
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Previous Roles</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li>SDE Intern at myresQR.life</li>
            <li>SDE Intern at turantLo</li>
            {/* <li>Technical Lead - Blockchain Club VITB</li> */}
          </ul>
        </div>
  
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Technical Skills and Interests</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li>
              <strong>Languages:</strong>
              <ul className="list-none list-inside ml-4">
                <li>→ JavaScript</li>
                <li>→ TypeScript</li>
                <li>→ Solidty</li>
                <li>→ C++</li>
                <li>→ Python</li>
                <li>→ Rust</li>
              </ul>
            </li>
            <li>
              <strong>Frameworks & Libraries:</strong>
              <ul className="list-none list-inside ml-4">
                <li>→ Node.js</li>
                <li>→ Express.js</li>
                <li>→ HonoJS</li>
                <li>→ React.js</li>
                <li>→ Next.js</li>
                <li>→ Langchain</li>
                <li>→ Langraph</li>
                <li>→ Recoil</li>
                <li>→ WebSockets</li>
                <li>→ TailwindCSS</li>
                <li>→ Ethereum</li>
                <li>→ Foundry</li>
                <li>→ Ether.js</li>
              </ul>
            </li>
            <li>
              <strong>Tools:</strong>
              <ul className="list-none list-inside ml-4">
                <li>→ Git/GitHub</li>
                <li>→ Appwrite</li>
                <li>→ Postman</li>
                <li>→ Docker</li>
                <li>→ Langfuse</li>
                <li>→ Langsmith</li>
                <li>→ Vercel AI SDK</li>
              </ul>
            </li>
            <li>
              <strong>Databases:</strong>
              <ul className="list-none list-inside ml-4">
                <li>→ MySQL</li>
                <li>→ PostgreSQL</li>
                <li>→ MongoDB</li>
                <li>→ Prisma ORM</li>
                <li>→ Qdrant Vector DB</li>
                <li>→ Neo4j Graph DB</li>
              </ul>
            </li>
            <li>
              <strong>Relevant Coursework:</strong>
              <ul className="list-none list-inside ml-4">
                <li>→ Full Stack Web Development</li>
                <li>→ Generative AI application Development</li>
                <li>→ Object-Oriented Programming</li>
                <li>→ Computer Networks</li>
                <li>→ Database Management Systems</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  