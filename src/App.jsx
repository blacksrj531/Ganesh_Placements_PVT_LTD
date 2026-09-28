import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Eye, FileText, Landmark, BadgeCheck, ShieldCheck, Menu, X, ChevronRight, CheckCircle2, Star, User, Users, Building, Globe, Compass, ClipboardList, Settings, Gauge, FileCheck, LogOut, MapPin, Phone, Mail, Briefcase, Target, TrendingUp, Send, Search, Clock, DollarSign, UploadCloud, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaApple, FaMicrosoft, FaArrowLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function AuthPage({ type, onBack, onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    
    if (type === 'Employer') {
      if (isLogin) {
        // Read credentials from .env for security in client handoff
        const validEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@ganeshplacements.com';
        const validPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
        
        if (email === validEmail && password === validPassword) {
          if (onLogin) onLogin(type);
        } else {
          setErrorMsg("Invalid credentials. Please contact support if your account is pending approval.");
        }
      } else {
        setSuccessMsg("Registration successful! Your employer account is pending verification. You will be notified once approved.");
        setIsLogin(true);
        setEmail('');
        setPassword('');
      }
    } else {
      if (isLogin) {
        setErrorMsg("Employee Dashboard coming soon! Please use the 'Explore Jobs' page to apply directly for now.");
      } else {
        setSuccessMsg("Signup received! You can now log in.");
        setIsLogin(true);
        setEmail('');
        setPassword('');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 relative z-10"
      >
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-6"
        >
          <FaArrowLeft /> Back to Home
        </button>

        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          {type} {isLogin ? 'Login' : 'Signup'}
        </h2>
        <p className="text-slate-500 mb-8">
          {isLogin ? 'Welcome back! Please enter your details.' : 'Create an account to get started.'}
        </p>

        <AnimatePresence>
          {errorMsg && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 flex items-start gap-2 border border-red-100">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMsg}</span>
            </motion.div>
          )}
          {successMsg && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-green-50 text-green-700 p-3 rounded-lg text-sm mb-6 flex items-start gap-2 border border-green-100">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{successMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email, Phone, or User ID</label>
            <input 
              type="text" 
              placeholder="Enter your credential" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
          </div>

          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">Forgot password?</a>
            </div>
          )}

          <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
          <div className="relative px-4 bg-white text-sm text-slate-400">or continue with</div>
        </div>

        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 font-medium">
            <FcGoogle className="text-xl" /> Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 font-medium">
            <FaApple className="text-xl" /> Apple ID
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 font-medium">
            <FaMicrosoft className="text-blue-600 text-xl" /> Outlook ID
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-slate-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 font-bold hover:underline"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </motion.div>
    </div>
  );
}

function ServicesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const services = [
    {
      title: "Man Power Recruitment Services",
      desc: "Bridging the gap between job seekers and employers for seamless career growth.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Security Services",
      desc: "Aim to create a safe and secure environment for individuals, organizations, and information by implementing various measures and technologies to prevent and address threats.",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      bg: "bg-indigo-50"
    },
    {
      title: "Facility Services",
      desc: "Aim to maintain and manage a facility's environment to ensure safety, efficiency and comfort including things like cleaning, maintenance, and security.",
      icon: <Building className="w-8 h-8 text-cyan-600" />,
      bg: "bg-cyan-50"
    },
    {
      title: "Emigration / E-Migrate Services",
      desc: "Committed to provide our clients with the highest quality service and support with experienced & dedicated professionals to help our clients achieve their goals by the latest technology and best practices in the industry.",
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-50"
    },
    {
      title: "Tour and Travel Services",
      desc: "Aims to achieve several key objectives to ensure the efficient & effective performance of providing high-quality services to meet the diverse needs and preferences of travellers, experience of connecting with nature and native communities, ensuring customer satisfaction and loyalty.",
      icon: <Compass className="w-8 h-8 text-orange-600" />,
      bg: "bg-orange-50"
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-7xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
        >
          <div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
            <h2 className="text-3xl font-bold text-slate-900">Explore our services</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <X className="w-6 h-6 text-slate-500" />
            </button>
          </div>
          
          <div className="p-6 md:p-8 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Staffing & RPO Detailed Section */}
            <div className="mt-12 pt-12 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 pr-0 lg:pr-8">
                <h3 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-wide">
                  Temporary Staffing with Permanent Staffing & Recruitment Process Outsourcing (RPO)
                </h3>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900 uppercase">Temporary Staffing</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Providing your organization a flexible workforce on an 'As-needed' basis.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900 uppercase">Permanent Staffing</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Mapping, Identifying and recruiting the people who will make a difference to your company's growth. We provide the best in class workforce to achieve your business and technological targets. We do this by trying to have a complete understanding about your industry.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900 uppercase">Recruitment Process Outsourcing (RPO)</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    We make sure that our RPO (Recruitment Process Outsourcing) support services are brought to you with minimal cost, time, and effort.
                  </p>
                </div>
              </div>

              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-[600px] relative bg-slate-100">
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply z-10 pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Professionals working together" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function AboutUsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const approaches = [
    { title: "Surveys for Employees", icon: <ClipboardList className="w-5 h-5 text-emerald-600" /> },
    { title: "Tools for Culture Assessment", icon: <Settings className="w-5 h-5 text-emerald-600" /> },
    { title: "Assessing Organizational Culture", icon: <Gauge className="w-5 h-5 text-emerald-600" /> },
    { title: "Scorecard for Business Requirements", icon: <FileCheck className="w-5 h-5 text-emerald-600" /> },
    { title: "Scale for Observing Behaviors", icon: <Eye className="w-5 h-5 text-emerald-600" /> },
    { title: "Group Discussions", icon: <Users className="w-5 h-5 text-emerald-600" /> },
    { title: "Surveys Upon Departure", icon: <LogOut className="w-5 h-5 text-emerald-600" /> }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
        >
          <div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
            <h2 className="text-3xl font-bold text-slate-900">About Us</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <X className="w-6 h-6 text-slate-500" />
            </button>
          </div>
          
          <div className="p-6 md:p-12 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Approaches Hexagon-style Grid */}
              <div className="bg-emerald-50/50 rounded-[3rem] p-8 md:p-12 border border-emerald-100/50">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">APPROACHES TO</h3>
                  <h3 className="text-3xl font-black text-emerald-600 tracking-wide">EVALUATING CORPORATE CULTURE</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {approaches.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 flex items-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all ${index === 6 ? 'sm:col-span-2 sm:mx-auto sm:w-1/2' : ''}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold text-slate-700 leading-tight">
                        {item.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side: Text Content */}
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                  Ganesh Placement Services Pvt. Ltd. is the Premier, Global retained executive search and human capital recruitment firm with well-established offices in PAN India since 2005
                </h3>
                
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our primary objective is to understand our client's requirements and ensure that we deliver on our promises. We are absolutely committed to finding and placing candidates into the best possible roles with companies based on their interests.
                </p>
                <p className="text-lg font-semibold text-slate-800 leading-relaxed bg-blue-50/50 p-6 rounded-2xl border border-blue-100 border-l-4 border-l-blue-600">
                  We Blend Innovation with Intelligence to Transform Recruitment in Your Organization.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function ContactUsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-slate-100 backdrop-blur-md shadow-sm transition-colors"
          >
            <X className="w-6 h-6 text-slate-500" />
          </button>
          
          <div className="flex flex-col lg:flex-row h-full overflow-y-auto">
            {/* Left Image Side */}
            <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-full relative bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Customer Service Representative" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right Content Side */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch With Us</h2>
              
              <div className="space-y-6">
                
                {/* Location Card */}
                <div className="bg-[#f8f8ff] rounded-2xl p-6 flex items-start gap-6 border border-indigo-50/50">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-indigo-500 flex items-center justify-center shadow-md shadow-indigo-200">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-slate-700 leading-relaxed text-sm space-y-2">
                    <p>
                      <strong className="text-slate-900">Registered Office:</strong> Plot No. 461, Nuasahi, Nayapalli, Unit - VIII, Bhubaneswar- 12, Odisha
                    </p>
                    <p>
                      <strong className="text-slate-900">Corporate Office:</strong><br/>
                      Hyderabad<br/>
                      Pan India Presence...
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-[#fff5f5] rounded-2xl p-6 flex items-center gap-6 border border-rose-50/50">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-rose-500 flex items-center justify-center shadow-md shadow-rose-200">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-slate-700 leading-relaxed text-sm">
                    <p>+0674 - 2563363 (Land line)</p>
                    <p>+08480612906</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-[#f0f4ff] rounded-2xl p-6 flex items-center gap-6 border border-blue-50/50">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500 flex items-center justify-center shadow-md shadow-blue-200">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-slate-700 leading-relaxed text-sm">
                    <p>info@ganeshplacements.com</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function ResumeUploadModal({ isOpen, onClose, onMatch, jobs }) {
  const [step, setStep] = useState('upload'); // upload -> scanning -> result -> nomatch
  const [file, setFile] = useState(null);
  const [extractedRole, setExtractedRole] = useState('Senior Software Engineer');

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setStep('upload'); setFile(null); setExtractedRole('Senior Software Engineer'); }, 300);
    }
  }, [isOpen]);

  const handleFileUpload = (e) => {
    e.preventDefault();
    const uploadedFile = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
    if (uploadedFile) {
      // Validate File Type
      const validExtensions = ['.pdf', '.doc', '.docx'];
      const isValidType = validExtensions.some(ext => uploadedFile.name.toLowerCase().endsWith(ext));
      
      if (!isValidType) {
        alert("Security Alert: Invalid file type. Please upload a PDF or DOCX file.");
        return;
      }

      // Validate File Size (Max 5MB)
      if (uploadedFile.size > 5 * 1024 * 1024) {
        alert("Security Alert: File is too large. Maximum size allowed is 5MB.");
        return;
      }

      setFile(uploadedFile);
      setStep('scanning');
      // Simulate AI Scanning Delay
      setTimeout(() => {
        setStep('result');
      }, 2500);
    }
  };

  const handleMatch = () => {
    const hasMatch = jobs.some(job => job.title.toLowerCase().includes(extractedRole.toLowerCase()) || job.company.toLowerCase().includes(extractedRole.toLowerCase()));
    
    if (hasMatch) {
      onMatch(extractedRole);
    } else {
      setStep('nomatch');
      setTimeout(() => {
        const subject = `Application: ${extractedRole} - Resume Submission`;
        const body = `Hello Ganesh Placements,\n\nOur system detected a new candidate looking for a "${extractedRole}" position.\n\nThey did not find a direct match on the live job board and are forwarding their resume for future opportunities.\n\n[Candidate: Please attach your resume to this email before sending!]`;
        window.location.href = `mailto:info@ganeshplacements.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        onClose();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={step !== 'scanning' ? onClose : undefined} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"></motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col p-8">
          {step !== 'scanning' && (
            <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-50 hover:bg-slate-100 transition-colors">
              <X className="w-5 h-5 text-slate-500" />
            </button>
          )}

          {step === 'upload' && (
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <UploadCloud className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Upload your Resume</h3>
              <p className="text-slate-500 mb-8 text-sm px-4">Our AI will scan your document, extract your key skills, and instantly match you with the perfect role.</p>
              
              <label className="border-2 border-dashed border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer group">
                <FileText className="w-10 h-10 text-slate-300 group-hover:text-blue-500 mb-4 transition-colors" />
                <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">Click to upload or drag and drop</span>
                <span className="text-xs text-slate-400 mt-2">PDF, DOCX up to 5MB</span>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
              </label>
            </div>
          )}

          {step === 'scanning' && (
            <div className="text-center py-10">
              <div className="relative w-20 h-20 mx-auto mb-8">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-blue-600"></motion.div>
                <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-blue-600 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">AI is scanning...</h3>
              <p className="text-slate-500 text-sm">Extracting your experience, skills, and ideal role.</p>
            </div>
          )}

          {step === 'result' && (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Scan Complete!</h3>
              <p className="text-slate-500 mb-6 text-sm">We've identified your primary professional profile. You can refine it if needed.</p>
              
              <div className="text-left mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Extracted Role / Expertise</label>
                <input type="text" value={extractedRole} onChange={(e) => setExtractedRole(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium text-slate-900 text-center text-lg" />
              </div>

              <button onClick={handleMatch} className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group transition-all">
                <Search className="w-5 h-5" />
                Find My Perfect Match
              </button>
            </div>
          )}

          {step === 'nomatch' && (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">No Exact Matches found</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We don't currently have active listings for <strong>"{extractedRole}"</strong>.
              </p>
              <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-800 text-left mb-6 border border-blue-100">
                <p><strong>Don't worry!</strong> We are forwarding your profile directly to our executive recruiters. Preparing your email client...</p>
              </div>
              <Loader2 className="w-6 h-6 text-blue-600 animate-spin mx-auto" />
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function ExploreJobsPage({ onBack, jobs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = job.location.toLowerCase().includes(locationTerm.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <ResumeUploadModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
        onMatch={(role) => {
          setSearchTerm(role);
          setIsResumeModalOpen(false);
        }}
        jobs={jobs}
      />
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex items-center cursor-pointer" onClick={onBack}>
          <button className="p-2 rounded-full hover:bg-slate-100 transition-colors mr-4 group">
            <FaArrowLeft className="w-5 h-5 text-slate-600 group-hover:-translate-x-1 transition-transform" />
          </button>
          <img src="/logo.png" alt="Ganesh Placements Logo" className="h-10 w-auto object-contain" />
          <span className="ml-3 text-lg font-bold text-slate-800">Ganesh Placements</span>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-blue-900/90 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80" 
              alt="Office space" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Discover your next big opportunity.
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                Explore premium roles at top-tier organizations. Your dream job is just a search away.
              </p>
              
              <div className="flex flex-col sm:flex-row max-w-2xl mx-auto bg-white rounded-full p-2 shadow-2xl">
                <div className="flex-grow flex items-center px-4 border-b sm:border-b-0 sm:border-r border-slate-200">
                  <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Job title, keywords, or company" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-3 text-slate-800 outline-none placeholder:text-slate-400" 
                  />
                  {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="p-1 hover:bg-slate-100 rounded-full">
                      <X className="w-4 h-4 text-slate-400" />
                    </button>
                  )}
                </div>
                <div className="flex-grow flex items-center px-4">
                  <MapPin className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Location" 
                    value={locationTerm}
                    onChange={(e) => setLocationTerm(e.target.value)}
                    className="w-full py-3 text-slate-800 outline-none placeholder:text-slate-400" 
                  />
                  {locationTerm && (
                    <button onClick={() => setLocationTerm('')} className="p-1 hover:bg-slate-100 rounded-full">
                      <X className="w-4 h-4 text-slate-400" />
                    </button>
                  )}
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shrink-0 mt-2 sm:mt-0">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Job Listings */}
            <div className="flex-grow space-y-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  {searchTerm || locationTerm ? 'Search Results' : 'Recommended Roles'}
                </h2>
                <span className="text-sm font-semibold text-slate-500">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
                </span>
              </div>

              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, idx) => (
                    <motion.div 
                      key={`${job.title}-${job.company}-${idx}`}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all cursor-pointer group mb-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex gap-6 items-start">
                          <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 group-hover:border-blue-100 transition-all">
                            <Briefcase className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{job.title}</h3>
                            <p className="text-slate-600 font-medium mb-4">{job.company}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{job.location}</span>
                              <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" />{job.salary}</span>
                              <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" />{job.type}</span>
                              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{job.posted}</span>
                            </div>
                          </div>
                        </div>
                        <button className="px-6 py-2.5 rounded-xl text-blue-600 font-bold bg-blue-50 hover:bg-blue-600 hover:text-white transition-colors shrink-0">
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-center py-20 bg-white rounded-3xl border border-slate-200 border-dashed"
                  >
                    <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">This position is not available</h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                      We couldn't find any roles matching "{searchTerm || locationTerm}". Try adjusting your search criteria or explore other opportunities.
                    </p>
                    <button 
                      onClick={() => { setSearchTerm(''); setLocationTerm(''); }}
                      className="mt-6 px-6 py-2.5 rounded-full font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      Clear Search
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar / Upload Resume */}
            <div className="w-full lg:w-96 shrink-0 space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-xl shadow-blue-500/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <UploadCloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h3>
                <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                  Upload your resume to our confidential database. Our executive recruiters will contact you when a matching role opens up.
                </p>
                <button onClick={() => setIsResumeModalOpen(true)} className="w-full py-3.5 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-lg shadow-black/10">
                  Upload Resume
                </button>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Popular Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Retail', 'Logistics'].map(tag => (
                    <span 
                      key={tag} 
                      onClick={() => setSearchTerm(tag)}
                      className="px-4 py-2 rounded-lg bg-slate-50 text-slate-600 text-sm font-semibold border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

function FindTalentPage({ onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const company = formData.get('company');
    const role = formData.get('role');

    const subject = `New Talent Request from ${firstName} ${lastName}`;
    const body = `Hello Ganesh Placements Team,

You have received a new talent request from the website. Here are the details:

First Name: ${firstName}
Last Name: ${lastName}
Work Email: ${email}
Company Name: ${company}
Role Hiring For: ${role}

Best regards,
Ganesh Placements Website`;

    window.location.href = `mailto:info@ganeshplacements.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex items-center cursor-pointer" onClick={onBack}>
          <button className="p-2 rounded-full hover:bg-slate-100 transition-colors mr-4 group">
            <FaArrowLeft className="w-5 h-5 text-slate-600 group-hover:-translate-x-1 transition-transform" />
          </button>
          <img src="/logo.png" alt="Ganesh Placements Logo" className="h-10 w-auto object-contain" />
          <span className="ml-3 text-lg font-bold text-slate-800">Ganesh Placements</span>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="relative bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Build your dream team with top-tier talent.
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Stop sifting through hundreds of resumes. Let our expert recruiters connect you with pre-vetted, high-impact professionals perfectly aligned with your company culture and goals.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Why partner with us?</h2>
                <div className="space-y-6">
                  {[
                    { icon: <Target className="w-6 h-6 text-blue-600" />, title: "Precision Matching", desc: "We don't just match skills; we match values, culture, and long-term potential." },
                    { icon: <TrendingUp className="w-6 h-6 text-blue-600" />, title: "Faster Time-to-Hire", desc: "Our extensive global network allows us to source the right candidates in days, not months." },
                    { icon: <Briefcase className="w-6 h-6 text-blue-600" />, title: "Industry Expertise", desc: "Specialized recruiters who deeply understand the technical nuances of your sector." }
                  ].map((item, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Tell us what you need</h3>
                <p className="text-slate-500 mb-8 text-sm">Fill out the form below and an executive search consultant will contact you within 24 hours.</p>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">First Name</label>
                      <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Last Name</label>
                      <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Work Email</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Company Name</label>
                    <input type="text" name="company" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="Acme Corp" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Role You're Hiring For</label>
                    <input type="text" name="role" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="e.g. Senior Software Engineer" />
                  </div>

                  <button className="w-full mt-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group transition-all">
                    <span>Submit Request</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const initialJobs = [
  { title: "Senior Cloud Architect", company: "TechNova Solutions", location: "Bangalore, India (Hybrid)", salary: "₹35L - ₹45L", type: "Full-time", posted: "2 days ago" },
  { title: "VP of Engineering", company: "FinTech Global", location: "Mumbai, India", salary: "₹60L - ₹80L", type: "Full-time", posted: "1 week ago" },
  { title: "Product Marketing Manager", company: "GrowthX", location: "Remote", salary: "₹20L - ₹30L", type: "Full-time", posted: "3 days ago" },
  { title: "Lead Data Scientist", company: "AI Innovations", location: "Hyderabad, India", salary: "₹40L - ₹55L", type: "Full-time", posted: "5 days ago" },
  { title: "Cybersecurity Analyst", company: "SecureCore", location: "Pune, India (Hybrid)", salary: "₹18L - ₹25L", type: "Contract", posted: "Just now" }
];

function EmployerDashboard({ jobs, setJobs, candidates, setCandidates, onLogout }) {
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs' or 'candidates'
  const [newJob, setNewJob] = useState({ title: '', company: '', location: '', salary: '', type: 'Full-time' });

  const handleAddJob = (e) => {
    e.preventDefault();
    setJobs([{ ...newJob, posted: 'Just now' }, ...jobs]);
    setNewJob({ title: '', company: '', location: '', salary: '', type: 'Full-time' });
    alert('Job posted successfully! It is now live on the Explore Jobs page.');
  };

  const updateCandidateStatus = (id, newStatus) => {
    setCandidates(candidates.map(c => c.id === id ? { ...c, status: newStatus } : c));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="Ganesh Placements Logo" className="h-10 w-auto object-contain" />
            <span className="ml-3 text-lg font-bold text-slate-800">Employer Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-slate-100 p-1 rounded-xl flex gap-1 mr-4">
              <button onClick={() => setActiveTab('jobs')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'jobs' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>Manage Jobs</button>
              <button onClick={() => setActiveTab('candidates')} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'candidates' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>Applicants</button>
            </div>
            <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-full transition-colors">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {activeTab === 'jobs' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Post a New Job</h2>
              <form className="space-y-4" onSubmit={handleAddJob}>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Job Title</label>
                  <input type="text" required value={newJob.title} onChange={e => setNewJob({...newJob, title: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="e.g. Senior Developer" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Company Name</label>
                  <input type="text" required value={newJob.company} onChange={e => setNewJob({...newJob, company: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="e.g. TechCorp" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Location</label>
                  <input type="text" required value={newJob.location} onChange={e => setNewJob({...newJob, location: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="e.g. Remote, India" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Salary Range</label>
                  <input type="text" required value={newJob.salary} onChange={e => setNewJob({...newJob, salary: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="e.g. ₹20L - ₹30L" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Job Type</label>
                  <select value={newJob.type} onChange={e => setNewJob({...newJob, type: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
                <button type="submit" className="w-full mt-4 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                  Publish Job
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Live Job Listings</h2>
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                    <p className="text-slate-500 text-sm">{job.company} • {job.location}</p>
                    <div className="flex gap-3 mt-2 text-xs font-semibold text-slate-600">
                      <span className="bg-slate-100 px-2 py-1 rounded">{job.salary}</span>
                      <span className="bg-slate-100 px-2 py-1 rounded">{job.type}</span>
                      <span className="bg-slate-100 px-2 py-1 rounded text-blue-600">{job.posted}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setJobs(jobs.filter((_, i) => i !== idx))}
                    className="px-4 py-2 text-sm font-bold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-rose-100 shrink-0"
                  >
                    Delete Post
                  </button>
                </div>
              ))}
              {jobs.length === 0 && (
                <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 border-dashed">
                  <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-500 font-medium">No live job listings. Add one to see it here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Manage Applicants</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                    <th className="p-4 font-semibold rounded-tl-xl">Candidate Name</th>
                    <th className="p-4 font-semibold">Applied Role</th>
                    <th className="p-4 font-semibold">Date Applied</th>
                    <th className="p-4 font-semibold text-center">Status</th>
                    <th className="p-4 font-semibold rounded-tr-xl">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {candidates.map(candidate => (
                    <tr key={candidate.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <td className="p-4">
                        <div className="font-bold text-slate-900">{candidate.name}</div>
                        <div className="text-sm text-slate-500">{candidate.email}</div>
                      </td>
                      <td className="p-4 font-medium text-slate-700">{candidate.role}</td>
                      <td className="p-4 text-slate-500 text-sm">{candidate.appliedDate}</td>
                      <td className="p-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          candidate.status === 'New' ? 'bg-blue-100 text-blue-700' :
                          candidate.status === 'Interviewing' ? 'bg-amber-100 text-amber-700' :
                          candidate.status === 'Hired' ? 'bg-green-100 text-green-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {candidate.status}
                        </span>
                      </td>
                      <td className="p-4 flex items-center gap-2">
                        <select 
                          value={candidate.status} 
                          onChange={(e) => updateCandidateStatus(candidate.id, e.target.value)}
                          className="bg-white border border-slate-200 text-sm rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-blue-500/20"
                        >
                          <option>New</option>
                          <option>Interviewing</option>
                          <option>Hired</option>
                          <option>Rejected</option>
                        </select>
                        <button 
                          onClick={() => {
                            if(window.confirm("Are you sure you want to permanently delete this candidate? This will revoke their access.")) {
                              setCandidates(candidates.filter(c => c.id !== candidate.id));
                            }
                          }}
                          className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors border border-transparent hover:border-rose-100"
                          title="Delete Candidate"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {candidates.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-500">No applicants found.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const initialCandidates = [
  { id: 1, name: "Rahul Sharma", role: "Senior Cloud Architect", status: "New", appliedDate: "2 days ago", email: "rahul.s@example.com" },
  { id: 2, name: "Priya Patel", role: "VP of Engineering", status: "Interviewing", appliedDate: "1 week ago", email: "priya.p@example.com" },
  { id: 3, name: "Amit Kumar", role: "Lead Data Scientist", status: "Hired", appliedDate: "2 weeks ago", email: "amit.k@example.com" }
];

const secureStorage = {
  setItem: (key, value) => {
    try { localStorage.setItem(key, btoa(JSON.stringify(value))); } catch (e) {}
  },
  getItem: (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(atob(data)) : null;
    } catch (e) { return null; }
  }
};

function App() {
  const [currentUser, setCurrentUser] = useState(() => secureStorage.getItem('ganesh_user') || null);
  const [jobs, setJobs] = useState(() => secureStorage.getItem('ganesh_jobs') || initialJobs);
  const [candidates, setCandidates] = useState(() => secureStorage.getItem('ganesh_candidates') || initialCandidates);

  useEffect(() => { secureStorage.setItem('ganesh_user', currentUser); }, [currentUser]);
  useEffect(() => { secureStorage.setItem('ganesh_jobs', jobs); }, [jobs]);
  useEffect(() => { secureStorage.setItem('ganesh_candidates', candidates); }, [candidates]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (currentView === 'find-talent') {
    return <FindTalentPage onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'explore-jobs') {
    return <ExploreJobsPage onBack={() => setCurrentView('home')} jobs={jobs} />;
  }

  if (currentView === 'employer-dashboard') {
    if (!currentUser || currentUser.role !== 'Employer') {
      return <AuthPage type="Employer" onBack={() => setCurrentView('home')} onLogin={(type) => { setCurrentUser({ role: type }); setCurrentView('employer-dashboard'); }} />;
    }
    return <EmployerDashboard jobs={jobs} setJobs={setJobs} candidates={candidates} setCandidates={setCandidates} onLogout={() => { setCurrentUser(null); setCurrentView('home'); }} />;
  }

  if (currentView !== 'home') {
    return <AuthPage type={currentView === 'employee-auth' ? 'Employee' : 'Employer'} onBack={() => setCurrentView('home')} onLogin={(type) => { setCurrentUser({ role: type }); setCurrentView(type === 'Employer' ? 'employer-dashboard' : 'home'); }} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-cyan-500 selection:text-white overflow-hidden">
      <ServicesModal isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
      <AboutUsModal isOpen={isAboutUsOpen} onClose={() => setIsAboutUsOpen(false)} />
      <ContactUsModal isOpen={isContactUsOpen} onClose={() => setIsContactUsOpen(false)} />
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/60 backdrop-blur-md border-b border-slate-200/50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] py-4 transition-all duration-300">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <motion.button 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentView('home')}
          >
            <img src="/logo.png" alt="Ganesh Placements Logo" className="h-12 w-auto object-contain" />
            <span className="text-xl font-bold tracking-tight text-slate-800 hidden sm:block">
              Ganesh Placements
            </span>
          </motion.button>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600"
          >
            {['Home', 'About Us', 'Services', 'Industries', 'Careers'].map((item) => (
              <a 
                key={item} 
                href={item === 'Services' ? '#services' : item === 'About Us' ? '#about' : item === 'Industries' ? '#industries' : '#'}
                onClick={(e) => {
                  if (item === 'Services') {
                    e.preventDefault();
                    setIsServicesOpen(true);
                  } else if (item === 'About Us') {
                    e.preventDefault();
                    setIsAboutUsOpen(true);
                  } else if (item === 'Careers') {
                    e.preventDefault();
                    setCurrentView('explore-jobs');
                  } else if (item === 'Industries') {
                    const section = document.getElementById('industries');
                    if (section) {
                      e.preventDefault();
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="relative group hover:text-blue-600 transition-colors py-1"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-5"
          >
            <div className="block relative lg:border-r lg:border-slate-200 lg:pr-5" ref={profileRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)} 
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none flex items-center justify-center shadow-sm"
              >
                <motion.div 
                  animate={{ rotate: isProfileOpen ? 360 : 0 }} 
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <User className="w-5 h-5 text-slate-700" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scaleY: 0.5 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -10, scaleY: 0.5 }}
                    style={{ originY: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute right-0 lg:right-5 mt-4 w-48 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex flex-col z-50"
                  >
                    <button 
                      onClick={() => { setCurrentView('employee-auth'); setIsProfileOpen(false); }} 
                      className="px-4 py-3.5 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-left border-b border-slate-50 flex items-center gap-2"
                    >
                      <User className="w-4 h-4 opacity-50" />
                      Employee Login
                    </button>
                    <button 
                      onClick={() => { setCurrentView('employer-auth'); setIsProfileOpen(false); }} 
                      className="px-4 py-3.5 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-left flex items-center gap-2"
                    >
                      <Landmark className="w-4 h-4 opacity-50" />
                      Employer Login
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => setIsContactUsOpen(true)} className="hidden md:block relative px-6 py-2.5 rounded-full font-semibold text-white overflow-hidden group shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-shadow">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center gap-2 text-sm">
                Contact Us 
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </button>
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl border border-white/60 p-2"
            >
              <div className="flex flex-col space-y-1">
                {['Home', 'About Us', 'Services', 'Industries', 'Careers'].map((item, i) => (
                  <motion.a 
                    key={item}
                    href={item === 'Services' ? '#services' : item === 'About Us' ? '#about' : item === 'Industries' ? '#industries' : '#'}
                    onClick={(e) => {
                      if (item === 'Services') {
                        e.preventDefault();
                        setIsServicesOpen(true);
                        setIsMobileMenuOpen(false);
                      } else if (item === 'About Us') {
                        e.preventDefault();
                        setIsAboutUsOpen(true);
                        setIsMobileMenuOpen(false);
                      } else if (item === 'Careers') {
                        e.preventDefault();
                        setCurrentView('explore-jobs');
                        setIsMobileMenuOpen(false);
                      } else if (item === 'Industries') {
                        const section = document.getElementById('industries');
                        if (section) {
                          e.preventDefault();
                          section.scrollIntoView({ behavior: 'smooth' });
                          setIsMobileMenuOpen(false);
                        }
                      }
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-blue-50/80 hover:text-blue-600 transition-colors group"
                  >
                    {item}
                    <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2 pb-1 px-2"
                >
                  <button 
                    onClick={() => {
                      setIsContactUsOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden group shadow-lg shadow-blue-500/30"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500"></span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Contact Us 
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-16 lg:py-0" style={{ backgroundImage: 'radial-gradient(at 0% 0%, hsla(210, 100%, 95%, 1) 0, transparent 50%), radial-gradient(at 100% 100%, hsla(200, 100%, 90%, 1) 0, transparent 50%)' }}>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] mb-6 border border-blue-100"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">An ISO 9001-2015 Certified Company</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-slate-900"
            >
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Careers</span>,<br/>
              Driving <span className="relative inline-block">
                Growth.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-400/40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" fill="none"/></svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl"
            >
              We redefine organizational recruitment backed by data, research, and decades of experience. Discover the perfect synergy between top-tier talent and industry-leading enterprises Globally.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => setCurrentView('find-talent')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1"
              >
                Find Top Talent
              </button>
              <button 
                onClick={() => setCurrentView('explore-jobs')}
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold shadow-sm transition-all flex items-center gap-2 group"
              >
                Explore Jobs
                <svg className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </motion.div>
          </div>

          {/* Visual Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative block h-[400px] lg:h-[600px] mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300/30 to-blue-500/30 rounded-[2rem] transform rotate-3 blur-md"></div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white shadow-2xl bg-white"
            >
              <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Corporate Team" className="w-full h-full object-cover opacity-90" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 top-20 bg-white/60 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-white/80 p-5 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">50k+</div>
                  <div className="text-xs font-semibold text-slate-500">Placements Made</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative z-10 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-orange-50/40 hover:bg-orange-50/80 rounded-[2rem] p-8 flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 border border-orange-100/50 hover:shadow-xl hover:shadow-orange-100"
            >
              <div className="w-16 h-16 shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                <BarChart3 className="w-7 h-7" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  We work hard every day to make Ganesh Placement the India's most respected service placement who supports every state & union territory
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-rose-50/40 hover:bg-rose-50/80 rounded-[2rem] p-8 flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 border border-rose-100/50 hover:shadow-xl hover:shadow-rose-100"
            >
              <div className="w-16 h-16 shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Eye className="w-7 h-7" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our vision</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  Our vision is always the same to embellish the company with an efficient, productive and cost effective HR department.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-indigo-50/40 hover:bg-indigo-50/80 rounded-[2rem] p-8 flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 border border-indigo-100/50 hover:shadow-xl hover:shadow-indigo-100"
            >
              <div className="w-16 h-16 shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                <FileText className="w-7 h-7" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Core Value</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  Our core values drive us to redefine the organizational recruitment process backed by data, research, experience & concepts.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-200/60">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our Accreditations
            </motion.h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            
            {/* GeM Association */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-48 h-24 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img src="/gem.png" alt="GeM Association Logo" className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">GeM Association</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Bidding opportunities on the Government e-Marketplace should be concise, informative, and emphasize the benefits of participating in State Govt.Dept., Central Govt.Dept. & Public Sector Undertaking on E-tendering.
              </p>
            </motion.div>

            {/* ISO Certified */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="w-48 h-24 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img src="/iso.jpg" alt="ISO Certified Logo" className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ISO certified</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Company's systems and processes to meet internationally recognized standards for quality, efficiency and sustainability.
              </p>
            </motion.div>

            {/* PSARA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center group"
            >
              <div className="w-48 h-24 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img src="/psara.jpg" alt="PSARA Logo" className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">PSARA</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Ensuring compliance with various regulations, associations engaged with giving security administrations including preparing of security services.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Pivotal Aspect & Key Points Section */}
      <section className="py-24 bg-white relative z-10 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Pivotal Aspect */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Pivotal Aspect
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Success is achieved by teamwork. Be it any industry sector or a company of any size, what matters most is having the right team with the right attitude and the right efforts. Our strength is based on our best practice expertise of our teams. This enables us to provide innovative and practical solutions for our clients that are active in different sectors.
                </p>
                <p>
                  We aim to provide the relevant support & timely service to companies which aim high. We want to discover, strategize, act and celebrate success with our clientele.
                </p>
                <p>
                  <strong className="text-slate-800">"Ganesh Placement"</strong> has established itself as one of the leading Human Resource consultants of India. This has happened because of our firm belief that it is our assignment to provide the best possible manpower to our clients. As such our professional approach to screening and short-listing the right candidates has resulted in a very satisfied client list.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Key Points */}
            <div className="bg-slate-50 rounded-[2rem] p-8 lg:p-10 border border-slate-200/60 shadow-xl shadow-slate-200/40">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-slate-900 mb-8"
              >
                Key Points:
              </motion.h3>
              
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                {[
                  "Providing services Globally.",
                  "An ISO 9001-2015 Certified Company.",
                  "An ISO 14001:2015 Certified Company.",
                  "An ISO 45001:2018 Certified Company.",
                  "Contract Labour (Regulation and Abolition) Act, 1970",
                  "Private Security Agencies (Regulation) Act, 2005",
                  "Committed to providing services in stipulated time frames.",
                  "Illuminated with best experience, employees and infrastructure.",
                  "Ensured quality, confidentially and cost effective Adherence to compliances.",
                  "Transparency in operations & professional code of conduct.",
                  "Quick & Dynamic execution of cumbersome formalities.",
                  "Proactive & ethical approach to identify & understand client's requirements",
                  "Hiring of quality candidates",
                  "Reduced hiring time",
                  "Comprehensive candidate screening",
                  "Pool of talent",
                  "High value sourcing solutions"
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 text-sm font-medium leading-snug group-hover:text-slate-900 transition-colors">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section id="industries" className="py-24 bg-slate-900 relative z-10 overflow-hidden">
        {/* Subtle background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Industries We Serve
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Automobile", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80" },
              { name: "Steel & Mines", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=600&q=80" },
              { name: "HVAC / Heavy Machinery", img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { name: "Infrastructure & EPC", img: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { name: "Oil, Gas & Power", img: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=600&q=80" },
              { name: "Solar", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80" },
              { name: "Water Treatment", img: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=600&q=80" },
              { name: "Telecom", img: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { name: "Electronics & Automation", img: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { name: "IT (Software/Hardware)", img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { name: "Cargo Logistics", img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80" },
              { name: "Shipping & Marine", img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c15663?auto=format&fit=crop&w=600&q=80" },
              { name: "Aerospace & Defence", img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80" },
              { name: "Media & Entertainment", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80" },
              { name: "Pharma & Healthcare", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/20"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${industry.img})` }}
                ></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Text Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-center z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-sm tracking-wide leading-snug drop-shadow-lg">
                    {industry.name}
                  </h3>
                  <div className="w-0 h-0.5 bg-cyan-400 mx-auto mt-3 group-hover:w-1/2 transition-all duration-500 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Logos Section */}
      <section className="py-16 bg-white relative z-10 border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-10 text-center">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Trusted By Leading Organizations
          </h2>
        </div>
        
        {/* Marquee Wrapper */}
        <div className="relative flex overflow-hidden">
          {/* Gradient Fades for edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex w-max items-center gap-16 px-8"
          >
            {/* Render array twice to create seamless infinite scroll loop */}
            {[
              "bpcl.jpg", "cag.jpg", "drdo.png", "fin.jpg", "govt.jpg", 
              "health.jpg", "nyks.jpg", "organic-farming.jpg", "rec.png",
              "bpcl.jpg", "cag.jpg", "drdo.png", "fin.jpg", "govt.jpg", 
              "health.jpg", "nyks.jpg", "organic-farming.jpg", "rec.png"
            ].map((logo, index) => (
              <div key={index} className="w-40 h-24 flex items-center justify-center shrink-0">
                <img 
                  src={`/Scrolling/${logo}`} 
                  alt="Partner Logo" 
                  className="max-w-full max-h-full object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-200/60 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                What Our Clients Say
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600"
              >
                We let our track record speak for itself. Here is what leading enterprises and candidates have to say about partnering with Ganesh Placements.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="https://share.google/To3nbzRpaPMcBIKTU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 rounded-full font-semibold shadow-lg shadow-slate-200 border border-slate-200 transition-all hover:-translate-y-1"
              >
                <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-5 h-5 object-contain" />
                View all on Google
              </a>
            </motion.div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "HR Director, Manufacturing",
                text: "Ganesh Placements completely transformed our hiring pipeline. We were struggling to find skilled engineers for our new plant, and they delivered top-tier talent within weeks.",
                rating: 5
              },
              {
                name: "Priya Sharma",
                role: "Operations Head, Logistics",
                text: "The professionalism and dedication shown by the team is unmatched. They understand the industry deeply and only short-list candidates that perfectly align with our company culture.",
                rating: 5
              },
              {
                name: "Amit Desai",
                role: "CEO, Tech Solutions",
                text: "A truly seamless experience. From understanding our complex technical requirements to final onboarding, they handled everything flawlessly. Highly recommended for PAN India recruitment.",
                rating: 5
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative group"
              >
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 text-lg font-medium">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xl uppercase">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">{review.name}</h4>
                    <p className="text-slate-500 text-sm">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-white pt-0 border-t border-slate-200">
        {/* Endless Scrolling Fraud Warning */}
        <div className="bg-[#12c2f4] overflow-hidden flex py-3 relative z-20 w-full shadow-md">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex w-max items-center"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-white font-bold tracking-wide px-12 text-sm md:text-base shrink-0">
                Be aware of fraud Recruitment! Ganesh Placement never charges fees from job seekers for recruitment!
              </span>
            ))}
          </motion.div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Column 1: Contact Info */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-lg mb-6">Ganesh Placement Services Pvt. Ltd.</h4>
              <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
                <div>
                  <span className="font-bold text-slate-800 block mb-1">Registered Office:</span> 
                  Plot No. 461, Nuasahi, Nayapalli Unit - VIII, Bhubaneswar-12, Odisha
                </div>
                <div>
                  <span className="font-bold text-slate-800 block mb-1">Corporate Office:</span> 
                  Hyderabad<br />Pan India Presence...
                </div>
                <div>
                  <span className="font-bold text-slate-800">Email :</span> info@ganeshplacements.com
                </div>
                <div>
                  <span className="font-bold text-slate-800">Land Line :</span> +91-0674 (2563363)
                </div>
                <div>
                  <span className="font-bold text-slate-800">Whatsapp :</span> +91-8480612906
                </div>
              </div>
            </div>

            {/* Column 2: The Company */}
            <div>
              <h4 className="font-bold text-slate-900 text-lg mb-6">The Company</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {['About Us', 'Mission and vision', 'Pivotal Aspects', 'From Founder Desk', 'Key Behind Our Success'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-blue-600 transition-colors inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Offering Solutions */}
            <div>
              <h4 className="font-bold text-slate-900 text-lg mb-6">Offering Solutions</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {['Man Power Recruitment Services', 'Security Services', 'Facility Services', 'Emigration/ E-Migrate Services', 'Tour and Travel Services'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-blue-600 transition-colors inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Quick Links & Socials */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  {['Blogs', 'Privacy policy', 'Cookie policy', 'Disclaimer', 'FAQ'].map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-blue-600 transition-colors inline-block">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12 lg:mt-auto flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Ganesh Placement Services Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;





