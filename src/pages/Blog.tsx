import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import { findPost, postUrl, posts } from "@/lib/blogFiles";
import { outlets } from "@/lib/outlets";

const SITE = "https://www.moaiveg.com";
const day = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

// /blog/ — every post, brand-wide and per outlet.
export const BlogIndex = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Journal | MOAI, Pure Veg Fine Dining in Bengaluru"
      description="Notes from MOAI's kitchens in Jayanagar and Koramangala: vegetarian food, occasions and evenings in Bengaluru."
      canonical={`${SITE}/blog/`}
      noindex={posts.length === 0}
    />
    <header><Navigation /></header>
    <main id="main-content" className="container mx-auto max-w-5xl px-6 pb-24 pt-32">
      <h1 className="text-5xl font-bold text-primary md:text-6xl">Journal</h1>
      {posts.length === 0 ? (
        <p className="mt-6 text-lg text-muted-foreground">New stories from our kitchens are on their way.</p>
      ) : (
        <ul className="mt-12 grid gap-12 md:grid-cols-2">
          {posts.map((p) => (
            <li key={`${p.outlet}-${p.slug}`}>
              <Link to={postUrl(p)} className="group block">
                <img src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                <p className="mt-4 text-sm text-muted-foreground">
                  <time dateTime={p.datePublished}>{day(p.datePublished)}</time>
                  {p.outlet && outlets[p.outlet] ? `, ${outlets[p.outlet].name}` : ""}
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-primary group-hover:underline group-hover:underline-offset-4">{p.title}</h2>
                <p className="mt-2 text-muted-foreground">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
    <footer><Footer /><Credits /></footer>
  </div>
);

// /blog/<slug>/ and /locations/<outlet>/blog/<slug>/
export const BlogPost = () => {
  const { slug = "", outlet: outletSlug } = useParams();
  const post = findPost(slug, outletSlug);
  if (!post) return <NotFound />;
  const outlet = post.outlet ? outlets[post.outlet] : undefined;
  const url = `${SITE}${postUrl(post)}`;
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${post.title} | MOAI${outlet ? ` ${outlet.area}` : ""}`}
        description={post.description}
        canonical={url}
        ogImage={`${SITE}${post.image}`}
        ogType="article"
        breadcrumbs={[
          { name: "Home", item: `${SITE}/` },
          ...(outlet ? [{ name: outlet.area, item: `${SITE}/locations/${outlet.slug}/` }] : [{ name: "Journal", item: `${SITE}/blog/` }]),
          { name: post.title, item: url },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.datePublished,
          image: `${SITE}${post.image}`,
          mainEntityOfPage: url,
          keywords: post.keywords.join(", "),
          author: { "@type": "Organization", name: post.author || "MOAI" },
          publisher: { "@type": "Organization", name: "MOAI", url: `${SITE}/` },
          ...(outlet ? { about: { "@id": `${SITE}/locations/${outlet.slug}/#restaurant` } } : {}),
        }}
      />
      <header><Navigation /></header>
      <main id="main-content">
        <article className="container mx-auto max-w-3xl px-6 pb-24 pt-32">
          <p className="text-muted-foreground">
            <time dateTime={post.datePublished}>{day(post.datePublished)}</time>
            {outlet && <>, <Link to={`/locations/${outlet.slug}/`} className="underline underline-offset-4">{outlet.name}</Link></>}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-primary md:text-5xl">{post.title}</h1>
          <img src={post.image} alt={post.imageAlt} decoding="async" className="mt-10 aspect-[16/10] w-full rounded-2xl object-cover" />
          {post.sections.map((s) => (
            <section key={s.heading} className="mt-12">
              <h2 className="text-3xl font-semibold text-primary">{s.heading}</h2>
              {s.paragraphs.map((t) => <p key={t} className="mt-4 text-lg leading-relaxed text-foreground/90">{t}</p>)}
              {s.list && <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-foreground/90">{s.list.map((t) => <li key={t}>{t}</li>)}</ul>}
            </section>
          ))}
          {outlet && (
            <p className="mt-14">
              <a href={outlet.booking} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-[#80664d] px-7 py-3.5 font-medium text-white hover:bg-[#735c45] transition-transform duration-150 ease-out active:scale-[0.97]">
                Reserve a table at {outlet.name}
              </a>
            </p>
          )}
        </article>
      </main>
      <footer><Footer /><Credits /></footer>
    </div>
  );
};
