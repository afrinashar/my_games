import React, { useState, useEffect } from 'react';
import bg from "../src/assets/escaperoom.jpg";
import './EscapeRoom.css'; // Import custom CSS for styling

const EscapeRoom = () => {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [hint, setHint] = useState('');
  const [validCommand, setValidCommand] = useState('');

  // Valid commands for each step
  const commands = [
    { step: 0, valid: ['open', 'look around', 'inspect door', 'examine', 'feel the walls', 'shout', 'turn on light', 'search room', 'knock on door', 'check corners'], message: 'The room is dark and cold. What will you do?' },
    { step: 1, valid: ['unlock', 'use key', 'pick lock', 'break lock', 'disable lock', 'smash the door', 'wiggle handle', 'turn knob', 'force open', 'move door'], message: 'You see a locked door. Maybe you need to unlock it?' },
    { step: 2, valid: ['escape', 'leave', 'exit', 'run out', 'dash out', 'break free', 'push door', 'step out', 'flee', 'get out'], message: 'The door is unlocked! You can escape now.' }
  ];

  // Randomly choose a command from the valid commands for the current step
  useEffect(() => {
    setValidCommand(
      commands[step].valid[Math.floor(Math.random() * commands[step].valid.length)]
    );
    setMessage(commands[step].message);
  }, [step]);

  const handleSubmit = () => {
    const command = input.toLowerCase().trim();

    // Check if the input matches any valid command for the current step
    if (commands[step].valid.includes(command)) {
      if (step === 2) {
        alert('Congratulations! You have escaped the room!');
        resetGame();
      } else {
        setStep(step + 1);
      }
      setHint('');
    } else {
      setHint(`Hint: Try using '${validCommand}' or something similar.`);
    }

    setInput('');
  };

  const resetGame = () => {
    setStep(0);
    setInput('');
    setHint('');
  };

  return (
    <div className="escape-room-container">
      <p className="escape-room-step">Step {step + 1}</p>
      <p className="escape-room-message">{message}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Try typing: ${validCommand}`}
        className="escape-room-input"
      />
      <button onClick={handleSubmit} className="escape-room-button">Submit</button>
      {hint && <p className="escape-room-hint">{hint}</p>}
      {step === 2 && <p className="escape-room-congrats">}
      You're almost there, just escape!</p>}
    </div>
  );
};

export default EscapeRoom;
