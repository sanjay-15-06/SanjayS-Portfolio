import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { sfx } from '../utils/sfx';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  cmd: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [matrixMode, setMatrixMode] = useState(false);
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: 'welcome',
      output: (
        <div className="space-y-1 text-cyan-300 font-mono text-xs">
          <div>====================================================================</div>
          <div>NEXUS DEV-OS // COMMAND LINE INTERFACE (v2.4.0-release)</div>
          <div>Type <span className="text-yellow-300 font-bold">'help'</span> to view available system commands.</div>
          <div>====================================================================</div>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const commandText = inputVal.trim().toLowerCase();
    if (!commandText) return;

    sfx.playTerminalType();

    let response: React.ReactNode = null;

    switch (commandText) {
      case 'help':
        response = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <div className="text-cyan-400 font-bold">AVAILABLE COMMANDS:</div>
            <div><span className="text-yellow-300 w-24 inline-block font-bold">whoami</span> - Display developer profile summary</div>
            <div><span className="text-yellow-300 w-24 inline-block font-bold">skills</span> - List technical & database competencies</div>
            <div><span className="text-yellow-300 w-24 inline-block font-bold">projects</span> - View high-impact software projects</div>
            <div><span className="text-yellow-300 w-24 inline-block font-bold">exp</span> - Display internship & academic education timeline</div>
            <div><span className="text-yellow-300 w-24 inline-block font-bold">contact</span> - Output email, phone & social profiles</div>
            <div><span className="text-yellow-300 w-24 inline-block font-bold">matrix</span> - Toggle Cyber Matrix visual effect</div>
            <div><span className="text-yellow-300 w-24 inline-block font-bold">clear</span> - Clear terminal logs</div>
            <div><span className="text-yellow-300 w-24 inline-block font-bold">sudo</span> - Request root system privileges</div>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="text-xs font-mono text-slate-200 space-y-1">
            <div><span className="text-cyan-400">NAME:</span> SANJAY S</div>
            <div><span className="text-cyan-400">ROLE:</span> Software Developer (Java 17, Spring Boot, Python, SQL)</div>
            <div><span className="text-cyan-400">DEGREE:</span> B.Sc. Computer Science @ KG College of Arts and Science (2024-Present)</div>
            <div><span className="text-cyan-400">LOCATION:</span> Coimbatore, Tamil Nadu, India</div>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="text-xs font-mono text-cyan-300 space-y-1">
            <div>[PROGRAMMING] Java 17, Core Java, Python, C++</div>
            <div>[DATABASES]   MySQL, MongoDB</div>
            <div>[WEB TECH]    HTML5, CSS3, JavaScript ES6+, React.js, Node.js</div>
            <div>[CLOUD/TOOLS] AWS Basics, Git, VS Code, Eclipse, MySQL Workbench</div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <div className="border-l-2 border-cyan-400 pl-2">
              <div className="text-cyan-300 font-bold">1. JWT AUTHENTICATION & USER MANAGEMENT SYSTEM</div>
              <div>Tech: Java 17, Spring Boot, Spring Security, JWT, MySQL, Maven</div>
            </div>
            <div className="border-l-2 border-purple-400 pl-2">
              <div className="text-purple-300 font-bold">2. SMART TOURIST MANAGEMENT SYSTEM</div>
              <div>Tech: Python, HTML, CSS, JavaScript, PyQt5, Django</div>
            </div>
          </div>
        );
        break;

      case 'exp':
        response = (
          <div className="text-xs font-mono space-y-1.5 text-slate-300">
            <div className="text-emerald-400 font-bold">[INTERNSHIP] Java Developer Intern @ AMDOX Technologies (1 Month)</div>
            <div>[EDUCATION] B.Sc. Computer Science @ KG College of Arts and Science (2024 - Present)</div>
            <div>[HIGHER SEC] Higher Secondary Certificate @ Ruby Matric Hr Sec School (2023 - 2024)</div>
            <div>[SECONDARY] SSLC Certificate @ Ruby Matric Hr Sec School (2021 - 2022)</div>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs font-mono text-cyan-300 space-y-1">
            <div>Email: sanjusan1506@gmail.com</div>
            <div>Phone: +91 9361136053</div>
            <div>LinkedIn: linkedin.com/in/sanjay-s-b44539320</div>
            <div>GitHub: github.com/sanjayS1506</div>
          </div>
        );
        break;

      case 'matrix':
        setMatrixMode(!matrixMode);
        response = (
          <div className="text-xs font-mono text-emerald-400">
            [MATRIX MODE] {matrixMode ? 'DEACTIVATED' : 'ACTIVATED'} - Neural Green Stream Toggled.
          </div>
        );
        break;

      case 'sudo':
        response = (
          <div className="text-xs font-mono text-red-400 font-bold">
            [ACCESS DENIED] sanjay is not in the sudoers file. This incident will be reported to Sanjay S.
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        response = (
          <div className="text-xs font-mono text-red-400">
            Command not recognized: '{commandText}'. Type <span className="text-yellow-300">'help'</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output: response }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className={`relative w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden text-left border transition-colors ${
        matrixMode ? 'bg-[#03120b] border-emerald-500/50' : 'bg-[#080b12] border-purple-500/40'
      }`}>
        {/* Title Bar */}
        <div className={`px-4 py-3 border-b flex items-center justify-between ${
          matrixMode ? 'bg-[#051c11] border-emerald-500/30' : 'bg-[#0f1422] border-purple-500/30'
        }`}>
          <div className="flex items-center space-x-2">
            <TerminalIcon className={`w-4 h-4 ${matrixMode ? 'text-emerald-400' : 'text-purple-400'}`} />
            <span className={`font-mono text-xs font-bold ${matrixMode ? 'text-emerald-300' : 'text-purple-300'}`}>
              NEXUS_CLI // SANJAY_DEV_TERMINAL
            </span>
          </div>
          <button
            onClick={() => {
              sfx.playClick();
              onClose();
            }}
            className="text-slate-400 hover:text-white p-1 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-96 overflow-y-auto font-mono text-xs space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              {item.cmd !== 'welcome' && (
                <div className="flex items-center space-x-2 text-cyan-400">
                  <span className="text-purple-400 font-bold">sanjay@nexus-os:~$</span>
                  <span>{item.cmd}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Command Form */}
        <form onSubmit={handleCommand} className="p-3 border-t border-slate-800 bg-[#0a0e1a] flex items-center gap-2">
          <span className="text-purple-400 font-mono text-xs font-bold">sanjay@nexus-os:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent text-xs font-mono text-slate-100 focus:outline-none placeholder-slate-600"
            autoFocus
          />
          <button type="submit" className="text-cyan-400 p-1 hover:text-cyan-300">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
