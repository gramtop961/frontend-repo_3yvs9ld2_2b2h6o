import { Sparkles, ArrowRight, Star, ExternalLink } from 'lucide-react';

export default function DiscoveryHub({ isLoggedIn, user }) {
  const newArrivals = [
    {
      title: 'Designing Data-Intensive Applications',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg',
    },
    {
      title: 'Deep Learning',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/71cQWYVtcBL.jpg',
    },
    {
      title: 'Clean Code',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/518FqJvR9aL._SX377_BO1,204,203,200_.jpg',
    },
    {
      title: 'Introduction to Algorithms',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/61Pgdn8HfML.jpg',
    },
  ];

  const popular = [
    { name: 'IEEE Xplore', type: 'Database', url: '#' },
    { name: 'ScienceDirect', type: 'Database', url: '#' },
    { name: 'ACM Digital Library', type: 'Database', url: '#' },
    { name: 'Nature', type: 'Journal', url: '#' },
    { name: 'SpringerLink', type: 'Database', url: '#' },
    { name: 'ProQuest', type: 'Database', url: '#' },
  ];

  const activities = [
    { label: 'Current Borrows', value: '3 items due soon' },
    { label: 'Active Holds', value: '1 item ready for pickup' },
    { label: 'Saved Items', value: '7 saved' },
  ];

  return (
    <main className="flex-1 min-h-[calc(100vh-64px)] bg-neutral-50">
      <div className="mx-auto max-w-[1200px] px-6 py-6 space-y-8">
        {/* Welcome Banner */}
        <section className="w-full rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white p-6 flex items-center justify-between">
          <div>
            <p className="text-sm/6 opacity-90">Welcome{isLoggedIn && user?.name ? `, ${user.name}` : ''}</p>
            <h2 className="text-2xl font-semibold mt-1">What are you researching today?</h2>
          </div>
          <Sparkles className="w-8 h-8 opacity-90" />
        </section>

        {/* New Arrivals */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-neutral-900">New Arrivals</h3>
            <button className="text-sm text-red-600 hover:text-red-700 inline-flex items-center gap-1">View all <ArrowRight className="w-4 h-4" /></button>
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-full">
              {newArrivals.map((b) => (
                <a
                  key={b.title}
                  href="#"
                  className="w-36 sm:w-40 shrink-0 group"
                  title={b.title}
                >
                  <div className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-neutral-200 bg-white">
                    <img src={b.cover} alt={b.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
                  </div>
                  <p className="mt-2 text-sm text-neutral-800 line-clamp-2 group-hover:text-red-600">
                    {b.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-neutral-900">Popular Resources</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popular.map((r) => (
              <a
                key={r.name}
                href={r.url}
                className="group rounded-lg border border-neutral-200 bg-white p-4 hover:border-red-500 hover:shadow-sm transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-neutral-900 group-hover:text-red-600">{r.name}</p>
                    <p className="text-sm text-neutral-500">{r.type}</p>
                  </div>
                  <Star className="w-4 h-4 text-amber-500" />
                </div>
                <div className="mt-3 text-sm text-red-600 inline-flex items-center gap-1">
                  Open <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* My Activity */}
        {isLoggedIn && (
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-neutral-900">My Activity</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activities.map((a) => (
                <div key={a.label} className="rounded-lg border border-neutral-200 bg-white p-4">
                  <p className="text-sm text-neutral-500">{a.label}</p>
                  <p className="mt-1 font-medium text-neutral-900">{a.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* News & Announcements */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-neutral-900">Library News & Announcements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-sm text-red-600 font-medium">Event</p>
              <h4 className="mt-1 font-semibold text-neutral-900">Workshop: Research Data Management</h4>
              <p className="mt-1 text-sm text-neutral-600">Join our session on best practices for organizing and citing datasets.</p>
            </article>
            <article className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-sm text-red-600 font-medium">Update</p>
              <h4 className="mt-1 font-semibold text-neutral-900">New database trial: Scopus access</h4>
              <p className="mt-1 text-sm text-neutral-600">Explore Scopus for a limited time and share your feedback with the library team.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
