import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  ArrowUpRight, 
  Sparkles, 
  MapPin, 
  Phone, 
  AlertCircle, 
  Info 
} from "lucide-react";
import confetti from "canvas-confetti";
import { profileData } from "../data/profile";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#6366F1", "#8B5CF6", "#06B6D4", "#10B981"]
      });
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = profileData.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const sanitizedName = formData.name.trim();
    const sanitizedEmail = formData.email.trim();
    const sanitizedSubject = formData.subject.trim();
    const sanitizedMessage = formData.message.trim();

    const formattedSubject = `Portfolio Contact — ${sanitizedSubject}`;
    const formattedBody = `Hello Muntasir,\n\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}\n\nBest regards,\n${sanitizedName}`;

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formattedSubject
    )}&body=${encodeURIComponent(formattedBody)}`;

    setSubmissionFeedback(
      `Opening your email client with your message for ${profileData.email}. Please review and hit Send in your email app!`
    );

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 border-t border-white/[0.06] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-mono mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>07 / CONNECT</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Let's build something real together.
          </h2>

          <p className="text-zinc-400 text-base sm:text-xl leading-relaxed font-light">
            Whether you're looking for an applied AI engineer to deploy models into production, a full-stack teammate for your startup, or a technical consultation, I'd love to connect.
          </p>
        </div>

        {/* Contact Layout: Left Details / Quick CTAs + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact Methods & Direct Actions */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            
            {/* Primary Email Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#161624] via-[#14141A] to-[#101015] border border-indigo-500/35 shadow-2xl">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-indigo-300 block mb-3 font-semibold">
                Primary Contact Email
              </span>
              
              <div className="mb-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-heading text-2xl sm:text-3xl font-bold text-white hover:text-indigo-300 transition-colors break-all"
                >
                  {profileData.email}
                </a>
              </div>

              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
                Direct inbox monitored daily. Best for AI/ML engineering roles, technical advisory, and consulting inquiries.
              </p>

              {/* Two Direct Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/30 hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl border text-sm font-medium transition-all ${
                    copied
                      ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                      : "bg-[#181820] border-white/10 text-zinc-300 hover:text-white hover:border-indigo-400 hover:bg-white/[0.05]"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Quick Details Card */}
            <div className="p-8 rounded-3xl bg-[#141418]/90 border border-white/[0.08] space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400 block font-medium">
                    Location
                  </span>
                  <span className="text-base font-medium text-white">
                    {profileData.location}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-400 block mt-1">
                    Available for Remote worldwide &amp; Onsite relocation
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/[0.06]">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400 block font-medium">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="text-base font-medium text-white font-mono">
                    {profileData.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/[0.06]">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-emerald-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400 block font-medium">
                    Direct Profiles
                  </span>
                  <div className="flex flex-wrap gap-3 mt-1.5">
                    <a
                      href={profileData.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-indigo-300 hover:text-white underline font-mono flex items-center gap-1"
                    >
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-zinc-600">•</span>
                    <a
                      href={profileData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-indigo-300 hover:text-white underline font-mono flex items-center gap-1"
                    >
                      <span>GitHub Work</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#141418]/95 border border-white/[0.08] shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Send a Message
                  </h3>
                  <p className="text-sm text-zinc-400 font-light mt-1">
                    Pre-formats your note and opens your email application to deliver it to Muntasir.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] text-zinc-400">
                  <Send className="w-5 h-5 text-indigo-400" />
                </div>
              </div>

              {/* Informative notice on mailto dispatch */}
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-xs sm:text-sm flex items-start gap-3 mb-8">
                <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Client-Side Dispatch:</strong> Submitting will validate your fields and open your default email app (Apple Mail, Gmail, Outlook) with the draft ready to send.
                </span>
              </div>

              {submissionFeedback && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3 mb-8 animate-in fade-in">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{submissionFeedback}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-300 mb-2">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#09090D] border text-base text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors ${
                        errors.name ? "border-rose-500" : "border-white/10"
                      }`}
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-300 mb-2">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#09090D] border text-base text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors ${
                        errors.email ? "border-rose-500" : "border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={e => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="e.g. AI / ML Engineering Role or Project Collaboration"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#09090D] border text-base text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors ${
                      errors.subject ? "border-rose-500" : "border-white/10"
                    }`}
                  />
                  {errors.subject && (
                    <span className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={e => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell me about your team, the AI challenge, or the timeline..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#09090D] border text-base text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors resize-none ${
                      errors.message ? "border-rose-500" : "border-white/10"
                    }`}
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-base transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
