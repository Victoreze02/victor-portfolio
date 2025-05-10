import { Github, Twitter, Linkedin,Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-600 py-6 bg-white border-t mt-12">
      <div className="flex justify-center space-x-6 mb-2">
        <a href="https://github.com/Victoreze02" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/victor-ezemokwe-97a350245" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600"><Linkedin size={20} /></a>
        <a href="https://x.com/EzemokweVictor" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600"><Twitter size={20} /></a>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ezemokwev@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600"><Mail size={20} /></a>
      </div>
      © {new Date().getFullYear()} Ezemokwe Victor. All rights reserved.
    </footer>
  );
}
