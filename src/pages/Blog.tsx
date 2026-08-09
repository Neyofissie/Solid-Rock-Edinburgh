import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
      {/* Blog Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-black mb-6 leading-[1.1]">
              Blog & Update
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Embark on a Journey of Discovery with Our Insightful Blog, and Stay 
              Connected with the Latest News and Developments — Where Insights, 
              Inspiration, and Current Updates Converge for a Rich and Engaging 
              Experience."
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" 
              alt="Person reading on tablet" 
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-3xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
             <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer flex flex-col">
               <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                 <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 uppercase tracking-wider">
                   {post.category}
                 </div>
               </div>
               <div className="text-gray-500 text-sm mb-3 font-medium">
                 {post.date}
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                 {post.title}
               </h3>
               <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                 {post.excerpt}
               </p>
               <div className="mt-auto flex items-center text-brand-primary font-medium group-hover:text-green-800 transition-colors">
                 Read Article <ArrowRight className="ml-2 w-4 h-4" />
               </div>
             </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
