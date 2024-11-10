
import Head from 'next/head';

export default function Home() {
  const cards = ['Survey', 'Feedback', 'Contact Us', 'Registration', 'Event RSVP', 'Newsletter Signup']

  return (
    <>
      <Head>
        <title>Form Builder | Create and Share Forms</title>
        <meta name="description" content="Easily create and share forms with our Form Builder app." />
      </Head>
      
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-indigo-600">Form Builder</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#templates" className="text-gray-600 hover:text-indigo-600">Templates</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-50 py-16 md:py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Create Forms Effortlessly
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-4">
            Build and share custom forms in seconds. Gather data and get insights instantly.
          </p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Explore Templates</h3>
          <p className="text-gray-600 text-center mt-2 mb-8">
            Start with one of our templates or create from scratch.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cards.map((template) => (
              <div key={template} className="p-6 border rounded-lg shadow hover:shadow-lg transition-all duration-200">
                <h4 className="text-xl font-semibold text-gray-800">{template}</h4>
                <p className="text-gray-600 mt-2">
                  A template to gather {template.toLowerCase()} data efficiently.
                </p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200">
                  Use Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto text-center px-6">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Form Builder. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
