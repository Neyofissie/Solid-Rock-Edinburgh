import React, { useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();

  // Find the post based on ID
  const post = useMemo(() => {
    return blogPosts.find(p => p.id === id);
  }, [id]);

  const otherPosts = useMemo(() => {
    return blogPosts.filter(p => p.id !== id).slice(0, 3);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="relative w-full pb-16 md:pb-32">
      {/* Blog Post Header Info */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pt-32 md:pt-40 pb-8 md:pb-12 text-center">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-brand-primary font-medium hover:text-green-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
        <div className="inline-block bg-brand-light px-4 py-1.5 rounded-full text-brand-primary text-sm font-semibold uppercase tracking-wider mb-6">
          {post.category}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="text-gray-500 font-medium">
          {post.date}
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 mb-16">
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-sm">
          <img 
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="prose prose-lg prose-green max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </section>

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section className="relative z-10 max-w-7xl mx-auto px-6 mt-16 md:mt-32">
          <div className="border-t border-gray-100 pt-10 md:pt-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-8 md:mb-10">Read More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherPosts.map((relatedPost) => (
                <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group cursor-pointer flex flex-col">
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 uppercase tracking-wider">
                      {relatedPost.category}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm mb-3 font-medium">
                    {relatedPost.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <div className="mt-auto flex items-center text-brand-primary font-medium group-hover:text-green-800 transition-colors pt-4">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
