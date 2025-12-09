'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<'calendar' | 'form'>('calendar');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentMonth, setCurrentMonth] = useState(11); // December (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('12h');
  
  // Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const timeSlots12h = ['3:30pm', '4:00pm', '4:30pm', '5:00pm', '5:30pm', '6:00pm'];
  const timeSlots24h = ['15:30', '16:00', '16:30', '17:00', '17:30', '18:00'];
  const timeSlots = timeFormat === '12h' ? timeSlots12h : timeSlots24h;

  useEffect(() => {
    if (isOpen && modalRef.current && contentRef.current) {
      // Animate modal in
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)', delay: 0.1 }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current && contentRef.current) {
      gsap.to(contentRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      });
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          onClose();
          // Reset state
          setCurrentStep('calendar');
          setSelectedDate(null);
          setSelectedTime('');
          setFormData({ name: '', email: '', phone: '', notes: '' });
          setSubmitStatus('idle');
        }
      });
    }
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setCurrentStep('form');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/book-meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: `${months[currentMonth]} ${selectedDate}, ${currentYear}`,
          time: selectedTime,
          timezone: 'Asia/Kolkata'
        }),
      });

      await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  if (!isOpen) return null;

  // Generate calendar days
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDay = new Date(currentYear, currentMonth, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#1a1a1a] rounded-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          type="button"
          className="absolute top-6 right-6 z-10 w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
        >
          ✕
        </button>

        {/* Header */}
        <div className="px-8 py-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold">CODESAGE</div>
            </div>
            <div className="text-sm text-gray-400">
              [IND] {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' })} | हिंदी
            </div>
          </div>
        </div>

        {/* Main Content */}
        {currentStep === 'calendar' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
          {/* Left Section - Meeting Info */}
          <div className="lg:col-span-1 bg-[#0f0f0f] p-8 flex flex-col">
            <div className="mb-6">
              <div className="text-xs text-gray-500 mb-2">CS</div>
              <div className="text-lg font-semibold mb-1">CodeSage Studio</div>
              <div className="text-2xl font-light mb-4">30 Min Meeting</div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>⏱</span>
                <span>30m</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <span>📹</span>
                <span>Cal Video</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>🌍</span>
                <span>Asia/Kolkata ▼</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="mt-auto space-y-2 text-sm text-gray-400">
              <div className="hover:text-white cursor-pointer transition-colors">EXPERTISE</div>
              <div className="hover:text-white cursor-pointer transition-colors">WHY US</div>
              <div className="hover:text-white cursor-pointer transition-colors">WORKS</div>
              <div className="hover:text-white cursor-pointer transition-colors">CONTACT</div>
            </div>
          </div>

          {/* Middle Section - Calendar */}
          <div className="lg:col-span-1 p-8 border-l border-r border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">{months[currentMonth]} {currentYear}</h3>
              <div className="flex gap-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevMonth();
                  }}
                  type="button"
                  className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                >
                  ‹
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextMonth();
                  }}
                  type="button"
                  className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                <div key={day} className="text-xs text-gray-500 text-center py-2">
                  {day}
                </div>
              ))}
              
              {/* Empty cells for days before month starts */}
              {Array.from({ length: startDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              
              {/* Calendar days */}
              {days.map((day) => {
                const isSelected = selectedDate === day;
                const today = new Date();
                const dayDate = new Date(currentYear, currentMonth, day);
                const isAvailable = dayDate >= today;
                
                return (
                  <button
                    key={day}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isAvailable) setSelectedDate(day);
                    }}
                    disabled={!isAvailable}
                    type="button"
                    className={`
                      aspect-square rounded-lg text-sm font-medium transition-all
                      ${isSelected ? 'bg-white text-black' : ''}
                      ${!isSelected && isAvailable ? 'bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white' : ''}
                      ${!isAvailable ? 'text-gray-600 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Section - Time Slots */}
          <div className="lg:col-span-1 p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">
                {selectedDate ? `${months[currentMonth].slice(0, 3)} ${selectedDate}` : 'Select Date'}
              </h3>
              <div className="flex gap-2 text-sm">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setTimeFormat('12h');
                  }}
                  type="button"
                  className={`px-3 py-1 rounded transition-colors ${
                    timeFormat === '12h' ? 'bg-white/10' : 'hover:bg-white/10'
                  }`}
                >
                  12h
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setTimeFormat('24h');
                  }}
                  type="button"
                  className={`px-3 py-1 rounded transition-colors ${
                    timeFormat === '24h' ? 'bg-white/10' : 'hover:bg-white/10'
                  }`}
                >
                  24h
                </button>
              </div>
            </div>

            {/* Time Slots */}
            <div className="space-y-3 mb-6">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTime(time);
                  }}
                  type="button"
                  className={`
                    w-full py-3 px-4 rounded-lg text-sm font-medium transition-all
                    ${selectedTime === time ? 'bg-white text-black' : 'bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white'}
                  `}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* Continue Button */}
            {selectedDate && selectedTime && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleContinue();
                }}
                type="button"
                className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all"
              >
                Continue →
              </button>
            )}
          </div>
        </div>
        ) : (
          /* Form Step */
          <div className="p-8 min-h-[500px]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentStep('calendar');
              }}
              type="button"
              className="mb-6 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              ← Back to calendar
            </button>

            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-light mb-2">Enter your details</h2>
              <p className="text-gray-400 mb-6">
                Selected: {months[currentMonth]} {selectedDate}, {currentYear} at {selectedTime}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Additional notes (optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                    ✓ Booking confirmed! We'll send you a confirmation email shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                    ✕ Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="px-8 py-6 border-t border-white/10 bg-[#0f0f0f]">
          <div className="flex items-center justify-center gap-8">
            <div className="text-lg font-semibold">Cal.com</div>
            <div className="text-xs text-gray-500">Trusted by 10+ clients</div>
            <div className="flex gap-6 text-gray-600">
              <span>PICASSO</span>
              <span>solarterra</span>
              <span>picasso</span>
              <span>RESHNI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
