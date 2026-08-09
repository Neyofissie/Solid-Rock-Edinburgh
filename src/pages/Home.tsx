import React, { useEffect } from 'react';
import { Coffee, Home, Users, Smartphone, Mail, ExternalLink, CornerUpRight, MapPin, Youtube, Radio, Tv, Play } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import volunteer1Img from '../assets/images/regenerated_image_1778255172663.png';
import volunteer2Img from '../assets/images/regenerated_image_1778255174528.png';
import volunteer3Img from '../assets/images/regenerated_image_1778255176208.png';
import volunteer4Img from '../assets/images/regenerated_image_1778255177689.png';
import welcomeImg from '../assets/images/Pastor Sam.jpg';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 pt-32 md:pt-40 pb-12 md:pb-16 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-black tracking-tight leading-[1.1] mb-6">
          Welcome to RCCG<br />Solid Rock , Edinburgh
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          A vibrant community of faith where lives are transformed<br />
          through the Word, worship, prayer, and love.
        </p>
        <a href="#contact" className="bg-[#9ba1f6] inline-block text-white font-medium px-10 py-3 rounded-lg hover:bg-indigo-400 transition-colors shadow-sm">
          Join Us
        </a>
      </section>

      {/* Image Grid */}
      <section id="volunteers" className="relative z-10 max-w-7xl mx-auto px-6 mb-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Find Your Place to Serve and Grow
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Solid Rock Parish, ministries are where relationships deepen, gifts grow, and lives are impacted. Explore our departments below and connect with a leader to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <img src={volunteer3Img} alt="Choir Department" className="w-full h-[300px] object-cover rounded-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Choir Department</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our Choir Department is a joyful expression of worship, dedicated to glorifying God through music. We lead the congregation in heartfelt praise, blending traditional hymns with contemporary gospel to create a sound that lifts hearts and inspires faith.
            </p>
          </div>
          <div className="flex flex-col">
            <img src={volunteer4Img} alt="Media Department" className="w-full h-[300px] object-cover rounded-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Media Department</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The Media Department is committed to spreading the Gospel through creativity and technology. We support the church through live streaming, video production, graphic design, photography, and social media—making the Word accessible to people near and far.
            </p>
          </div>
          <div className="flex flex-col">
            <img src={volunteer2Img} alt="Technical Department" className="w-full h-[300px] object-cover rounded-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Department</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our Technical Department ensures every service runs smoothly—supporting audio, lighting, sound engineering, and live streaming systems. We work behind the scenes to create a worship environment where the Word is delivered with clarity and excellence.
            </p>
          </div>
          <div className="flex flex-col">
            <img src={volunteer1Img} alt="Children's Church" className="w-full h-[300px] object-cover rounded-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Children's Church</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Children's Church is a fun, safe, and faith-filled environment where children learn about Jesus through engaging worship, interactive Bible lessons, songs, and creative activities. We are passionate about raising a generation rooted in Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Colored Info Blocks */}
      <section className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3">
        <a href="https://maps.google.com/?q=16-18+Queensferry+Rd,+Kirkliston+EH29+9AQ" target="_blank" rel="noopener noreferrer" className="bg-[#e57058] px-6 py-12 md:px-10 md:py-16 text-white flex flex-col justify-end min-h-[250px] md:min-h-[300px] hover:opacity-90 transition-opacity">
          <div className="mb-4">
            <Coffee className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold -tracking-tight">Plan Your Visit</h3>
        </a>
        
        <Link to="/watch-live" className="bg-[#eaa03c] px-6 py-12 md:px-10 md:py-16 text-white flex flex-col justify-end min-h-[250px] md:min-h-[300px] hover:opacity-95 transition-opacity group">
          <div className="mb-4 flex items-center justify-between">
            <Youtube className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
            <span className="bg-white/20 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider text-white backdrop-blur-sm">
              Watch Live
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold -tracking-tight group-hover:translate-x-1 transition-transform">Join Us Online</h3>
          <p className="text-xs text-amber-100 mt-2 font-medium">Watch live services & recent broadcasts &rarr;</p>
        </Link>
        
        <a href="https://www.instagram.com/rccgsolidrockkirkliston/" target="_blank" rel="noopener noreferrer" className="bg-[#9ba1f6] px-6 py-12 md:px-10 md:py-16 text-white flex flex-col justify-end min-h-[250px] md:min-h-[300px] hover:opacity-90 transition-opacity">
          <div className="mb-4">
            <Users className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold -tracking-tight">Get Connected</h3>
        </a>
      </section>

      {/* Blog & Update */}
      <section id="blog-preview" className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">Blog & Update</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-8">
              Embark on a Journey of Discovery with Our Insightful Blog, and Stay 
              Connected with the Latest News and Developments — Where Insights, 
              Inspiration, and Current Updates Converge for a Rich and Engaging 
              Experience.
            </p>
            <Link to="/blog" className="inline-block bg-brand-primary text-white font-medium px-6 py-2.5 rounded hover:bg-green-800 transition-colors">
              Read Our Blog
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" 
              alt="Blog reading" 
              className="w-full h-[400px] object-cover rounded-3xl cursor-pointer"
              onClick={() => window.location.href = '/blog'}
            />
          </div>
        </div>
      </section>

      {/* Welcome Letter */}
      <section id="welcome" className="relative z-10 bg-brand-light py-16 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div className="text-black font-medium leading-[1.65] text-[17px] space-y-6">
            <p>Dear Beloved,<br />
            On behalf of The Redeemed Christian Church of God, Solid 
            Rock Parish, Kirkliston, I warmly welcome you to our church 
            family. I'm delighted you are here, and I believe this is not by 
            accident—God has a purpose for your life, and we are 
            honoured to be part of your journey.</p>
            
            <p>At Solid Rock Parish, we are committed to sharing the love of 
            Jesus Christ, teaching God's Word with clarity, and building a 
            community where people grow in faith, prayer, and purpose. 
            Whether you are visiting for the first time, searching for a 
            place to belong, returning to church, or looking to deepen 
            your walk with God, you are truly welcome here.</p>
            
            <p>Our heart is to see lives transformed by the power of the 
            Gospel. We believe in a church where worship is uplifting, the 
            Word is life-changing, and every person is valued. You will 
            find a warm atmosphere, a diverse and loving congregation, 
            and opportunities to connect through our ministries, prayer 
            meetings, and outreach.</p>
            
            <p>I invite you to worship with us every Sunday from 11:00am to 
            1:00pm, and also join our Tuesday Prayer Meeting on Zoom at 
            9:00pm. Come expecting—God still heals, restores, 
            strengthens, and answers prayers.</p>
            
            <p>Once again, welcome to Solid Rock Parish, Kirkliston—where 
            we stand on the solid rock of faith, building a legacy of hope 
            and transformation. I look forward to meeting you personally.</p>
            
            <p>With love and blessings,<br/>
            Pastor Samuel ...</p>
          </div>
          
          <div className="relative group rounded-3xl overflow-hidden shadow-lg border border-gray-200/80 bg-white p-2.5 transition-all duration-300 hover:shadow-xl">
            <img 
              src={welcomeImg}
              alt="Pastor Samuel - Resident Pastor, RCCG Solid Rock Edinburgh" 
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[640px] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              width="800"
              height="1066"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/80 shadow-md flex items-center justify-between">
              <div>
                <p className="text-base font-bold text-gray-900 tracking-tight">Pastor Samuel</p>
                <p className="text-xs text-brand-primary font-semibold">Resident Pastor, RCCG Solid Rock Edinburgh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">Contact us</h2>
            <p className="text-gray-600 mb-10 max-w-md text-lg">
              Whether you're visiting for the first time, looking for prayer, or ready to 
              join a department, we're here to help. Reach out to us and a member of 
              our team will get back to you as soon as possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="bg-gray-100/80 flex items-center gap-3 px-6 py-4 rounded-xl font-medium text-black whitespace-nowrap">
                <Smartphone className="w-5 h-5 flex-shrink-0 text-black" />
                <span className="truncate">+447365918341</span>
              </div>
              <div className="bg-gray-100/80 flex items-center gap-3 px-6 py-4 rounded-xl font-medium text-black">
                <Mail className="w-5 h-5 flex-shrink-0 text-black" />
                <span className="truncate">solidrockedinburgh@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-gray-100 w-full px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-brand-primary transition-all text-black"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-gray-100 w-full px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-brand-primary transition-all text-black"
              />
            </div>
            <textarea 
              placeholder="Message" 
              rows={6}
              className="bg-gray-100 w-full px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-brand-primary transition-all text-black resize-none"
            ></textarea>
            <button className="bg-brand-primary text-white font-medium w-full py-4 rounded-xl hover:bg-[#084e31] transition-colors mt-2 text-lg">
              Send
            </button>
          </div>
        </div>
        
        {/* Map Snippet Mock */}
        <div className="mt-16 w-full max-w-[500px] bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row gap-4">
           <div className="flex-1 text-center sm:text-left">
             <h4 className="font-bold text-gray-900 mb-1 leading-tight">RCCG Solid Rock<br/>Edinburgh</h4>
             <p className="text-gray-500 text-xs mt-2">16-18 Queensferry Rd, Kirkliston<br/>EH29 9AQ</p>
           </div>
           <div className="flex sm:flex-col justify-center sm:justify-start gap-2 items-center">
              <a href="https://maps.google.com/?q=16-18+Queensferry+Rd,+Kirkliston+EH29+9AQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-blue-500 hover:bg-gray-50 transition-colors">
                 <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://maps.google.com/?q=16-18+Queensferry+Rd,+Kirkliston+EH29+9AQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                 <CornerUpRight className="w-4 h-4" />
              </a>
           </div>
           <div className="w-full sm:w-32 h-32 sm:h-24 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center relative mt-2 sm:mt-0">
             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=300&q=80" alt="map" className="absolute inset-0 w-full h-full object-cover opacity-60" />
             <MapPin className="relative z-10 w-6 h-6 text-red-500 drop-shadow-md" fill="currentColor"/>
           </div>
        </div>
      </section>
    </>
  );
}
