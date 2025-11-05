import { Home, Book, FileText, Newspaper, Library, GraduationCap, Compass, Info, Clock, HelpCircle } from 'lucide-react';

export default function Sidebar() {
  const mainLinks = [
    { label: 'Home', icon: Home },
    { label: 'Books & E-books', icon: Book },
    { label: 'Journals & Articles', icon: FileText },
    { label: 'Magazines & News', icon: Newspaper },
    { label: 'Academic Databases', icon: Library },
    { label: 'Theses & Dissertations', icon: GraduationCap },
    { label: 'Research Guides', icon: Compass },
  ];
  const secondary = [
    { label: 'About the Library', icon: Info },
    { label: 'Hours & Locations', icon: Clock },
    { label: 'Help & FAQ', icon: HelpCircle },
  ];

  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 shrink-0 border-r border-neutral-200 bg-white h-[calc(100vh-64px)] sticky top-[64px]">
      <nav className="w-full p-4 overflow-y-auto">
        <div className="space-y-1">
          {mainLinks.map(({ label, icon: Icon }) => (
            <button key={label} className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-neutral-700 hover:bg-neutral-50">
              <Icon className="w-4 h-4 text-neutral-500" />
              <span>{label}</span>
            </button>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-neutral-200 space-y-1">
          {secondary.map(({ label, icon: Icon }) => (
            <button key={label} className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-neutral-700 hover:bg-neutral-50">
              <Icon className="w-4 h-4 text-neutral-500" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
