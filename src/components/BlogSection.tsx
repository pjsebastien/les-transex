import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Notre Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conseils, guides et actualites sur les rencontres trans
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image placeholder avec gradient */}
              <div className="h-40 bg-gradient-to-br from-pink-400 to-purple-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/30 text-6xl font-bold">{post.title.charAt(0)}</span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{post.readTime} de lecture</span>
                  <span className="text-pink-600 font-medium group-hover:underline">
                    Lire l&apos;article
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
