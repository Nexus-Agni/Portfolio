import React, { useState } from 'react'
import { useTheme } from "../contexts/ThemeContext";

const Terminal: React.FC = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>(['Welcome to the portfolio terminal!', 'Type "help" for a list of commands.'])
  const [gameStarted, setGameStarted] = useState(false)
  const [targetNumber, setTargetNumber] = useState<number | null>(null)
  const [attempts, setAttempts] = useState(0)
  const { theme, toggleTheme } = useTheme();

  const startGame = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    setTargetNumber(randomNumber)
    setAttempts(0)
    setGameStarted(true)
  }

  const clearTerminal = () => {
    setOutput(['Welcome to the portfolio terminal!', 'Type "help" for a list of commands.'])
  }

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase()
      let response: string

      if (gameStarted && !isNaN(Number(input))) {
        const guess = Number(input)
        setAttempts(prev => prev + 1)

        if (guess < targetNumber!) {
          response = 'Too low! Try again.'
        } else if (guess > targetNumber!) {
          response = 'Too high! Try again.'
        } else {
          response = `Correct! You guessed the number in ${attempts + 1} attempts.  Congo U can Guess it in log(100) complexity every time  with the help of Binary Search .Type "game" to play again.`
          setGameStarted(false)
          setTargetNumber(null)
        }
      } else {
        switch (command) {
          case 'help':
            response = 'Available commands: about, skills,  contact, game, clear, toggleTheme'
            break
          case 'about':
            response = `Engineering student at Vellore Institute of Technology (Bhopal) pursuing Integrated MTech in Computer Science Engineering specialization in Cybersecurity with a CGPA of 9.36. I have strong passion to build useful web applications and learn new techlonogies.`
            break
            case 'skills':
              response = `
                      → JavaScript,
                      → TypeScript,
                      → Python,
                      → C,
                      → C++,
                      → Solidity,
                      → Rust,
                      → Node.js,
                      → Express.js,
                      → HonoJS,
                      → React.js,
                      → Next.js,
                      → Recoil,
                      → Langchain,
                      → Langraph,
                      → MCP Server,
                      → WebSockets,
                      → Zod,
                      → TailwindCSS,
                
                  
                      → Git/GitHub,
                      → Langfuse 
                      → Langsmith,
                      → Docker,
                    
                 
                      → MySQL,
                      → PostgreSQL,
                      → MongoDB,
                      → Prisma ORM,
                      → Qdrant Vector DB,
                      → Neo4j Graph DB,
                 
                  
                    `;
              break;
            
          case 'contact':
            response = 'Email: agnibhachakraborty12@gmail.com | GitHub: github.com/Nexus-agni | Twitter: @NeilChakrabort3'
            break
          case 'game':
            if (!gameStarted) {
              startGame()
              response = 'Welcome to the number guessing game! I have chosen a number between 1 and 100. Try to guess it!'
            } else {
              response = 'You are already in a game! Make a guess.'
            }
            break
          case 'clear':
            clearTerminal()
            response = ''
            break
            case 'toggletheme':
              toggleTheme()
              response = `Theme toggled to ${theme === 'dark' ? 'light' : 'dark'}.`
              break
            
          default:
            response = `Command not recognized: ${command}`
        }
      }

      if (response) {
        setOutput(prevOutput => [...prevOutput, `$ ${input}`, response])
      }
      setInput('')
    }
  }

  return (
    <div className="bg-inherit dark:text-green-400 text-black p-2 sm:p-4 rounded-lg shadow-lg w-full h-full font-mono text-xs sm:text-sm overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto mb-2">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className="flex items-center">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          className="bg-transparent outline-none flex-1"
          autoFocus
        />
      </div>
    </div>
  )
}

export default Terminal
