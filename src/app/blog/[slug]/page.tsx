import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import BlogPostBody from "@/components/BlogPostBody";
import { BUSINESS } from "@/lib/constants";
import { BLOG_POSTS, getAllBlogSlugs, getBlogPost } from "@/lib/blogPosts";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found | Gallachers Car Garage" };
  }

  return {
    title: `${post.title} | Gallachers Car Garage`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        datePublished={post.date}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-neutral-950 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/50 text-sm hover:text-white/80 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Posts
          </Link>
          <div className="flex items-center gap-3 text-xs text-white/40 mb-4">
            <span className="uppercase tracking-wide font-semibold text-primary">
              {post.category}
            </span>
            <span>&middot;</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <BlogPostBody blocks={post.body} />
        </div>
      </section>

      {/* More posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-extrabold text-neutral-900 mb-6">More from the Blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-white p-5"
                >
                  <span className="uppercase tracking-wide font-semibold text-primary text-xs">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mt-2">{p.title}</h3>
                  <p className="text-neutral-500 mt-1.5 text-sm leading-relaxed">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase">Need a Hand?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Get in touch today</h2>
          <p className="text-white/50 mt-3 text-lg">Free, no-obligation quotes. Call us or send an enquiry.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Send Enquiry
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
