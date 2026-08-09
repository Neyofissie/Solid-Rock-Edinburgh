import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Youtube, 
  Radio, 
  Tv, 
  ExternalLink, 
  Play, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  Share2, 
  HeartHandshake, 
  MessageCircle,
  Bell
} from 'lucide-react';

export default function WatchLivePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'RCCG Solid Rock Edinburgh Live Stream',
        text: 'Join RCCG Solid Rock Edinburgh live worship service!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb & Navigation Back */}
      <div className="mb-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors active:scale-[0.96]"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Stream</span>
          </button>
        </div>
      </div>

      {/* Hero Stream Banner Card */}
      <div className="bg-gradient-to-br from-gray-950 via-neutral-900 to-slate-950 text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-800 mb-12">
        {/* Stream Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 shadow-inner flex-shrink-0">
              <Youtube className="w-8 h-8" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Live Stream & Last Upload
                </span>
                <span className="text-xs text-gray-400 font-medium">@SolidRockEdinburgh</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                RCCG Solid Rock Edinburgh Live
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="https://www.youtube.com/@SolidRockEdinburgh?sub_confirmation=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 text-sm shadow-lg shadow-red-600/25 active:scale-[0.96]"
            >
              <Bell className="w-4 h-4 fill-current" />
              <span>Subscribe on YouTube</span>
            </a>
            <a 
              href="https://www.youtube.com/@SolidRockEdinburgh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 text-sm border border-white/10 active:scale-[0.96]"
            >
              <span>Visit Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Video Player + Information Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Embedded YouTube Player */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-gray-800 shadow-2xl">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/live_stream?channel=SolidRockEdinburgh"
                title="RCCG Solid Rock Edinburgh YouTube Channel Live Stream & Latest Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-400 px-1">
              <span className="flex items-center gap-2 text-gray-300">
                <Radio className="w-4 h-4 text-red-500 animate-pulse flex-shrink-0" />
                <span>Automatically plays the live broadcast or most recent video upload from our YouTube Channel.</span>
              </span>
              <a 
                href="https://www.youtube.com/@SolidRockEdinburgh/streams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors flex-shrink-0"
              >
                <span>Full Broadcast History</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Sidebar Schedule & Interactive Links */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Service Broadcast Schedule */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Tv className="w-5 h-5 text-amber-400" />
                <span>Live Service Schedule</span>
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-5">
                Join our live online congregation for uplifting worship, transformative word, and powerful prayer.
              </p>

              <div className="space-y-4 border-t border-white/10 pt-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 mt-0.5 flex-shrink-0 ring-4 ring-emerald-400/20"></div>
                  <div>
                    <p className="font-bold text-white text-sm">Sunday Worship Service</p>
                    <p className="text-gray-300 font-medium flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Every Sunday • 11:00 AM UK Time</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-indigo-400 mt-0.5 flex-shrink-0 ring-4 ring-indigo-400/20"></div>
                  <div>
                    <p className="font-bold text-white text-sm">Tuesday Digging Deep & Prayer</p>
                    <p className="text-gray-300 font-medium flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Every Tuesday • 9:00 PM UK Time</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md flex flex-col gap-3">
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">Connect & Participate</h4>
              
              <Link 
                to="/#contact" 
                className="flex items-center justify-between p-3.5 rounded-xl bg-brand-primary/80 hover:bg-brand-primary transition-all text-xs text-white font-semibold group shadow-md active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-amber-300" />
                  <span>Send Prayer Request / Giving</span>
                </div>
                <ArrowLeft className="w-3.5 h-3.5 rotate-180 transition-transform group-hover:translate-x-1" />
              </Link>

              <a 
                href="https://www.youtube.com/@SolidRockEdinburgh/streams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-xs text-gray-200 group border border-white/5"
              >
                <div className="flex items-center gap-2.5">
                  <Play className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="font-medium group-hover:text-amber-300 transition-colors">Past Sermon Archives</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-300 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Channel Information & FAQ Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-2">Live Chat & Interaction</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Participate in real-time fellowship by engaging in the live chat directly on YouTube during our streamed Sunday services and special events.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-2">Physical Service Attendance</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Visiting Edinburgh or nearby Kirkliston? You are warmly welcome to worship with us in person at Kirkliston Community Centre.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold mb-4">
            <MessageCircle className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-2">Need Help or Counseling?</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Our pastorate and counseling team are available to pray with you and provide guidance. Reach out anytime via our contact form.
          </p>
        </div>
      </div>
    </div>
  );
}
