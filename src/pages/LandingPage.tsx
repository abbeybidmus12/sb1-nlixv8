import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <MapPin className="text-primary-500 mr-2" size={24} />
          <h1 className="text-2xl font-bold text-gray-800">NewUK</h1>
        </div>
        <nav className="space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/resources" className="text-gray-600 hover:text-gray-800">Resources</Link>
          <Link to="/events" className="text-gray-600 hover:text-gray-800">Events</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold mb-6 text-gray-800">
          Fly through<br />
          your UK journey
        </h2>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Get twice the support with half the effort.
          You'll wonder how you managed on your own.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-grow px-4 py-2 rounded-l-full border-2 border-r-0 border-gray-300 focus:outline-none focus:border-primary-500"
            />
            <button className="bg-primary-500 text-white px-6 py-2 rounded-r-full hover:bg-primary-600 transition duration-300">
              Get Started
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">Free to Use • No Credit Card Required</p>
        </div>
      </main>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Ready to start building your new life in the UK?
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Turn your dreams into actionable steps for a smooth transition!
          </p>
          <div className="text-center">
            <Link
              to="/register"
              className="bg-primary-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-600 transition duration-300"
            >
              14-DAY FREE TRIAL
            </Link>
            <p className="text-sm text-gray-500 mt-2">* no credit card required</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Speed up your UK integration process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🚀"
              title="Easy to Start"
              description="Create an account, access resources, and start your UK journey with ease."
            />
            <FeatureCard
              icon="🔧"
              title="Super Flexible"
              description="Customize your experience and access the information you need, when you need it."
            />
            <FeatureCard
              icon="🛡️"
              title="Ultra Secure"
              description="Your data is protected with strong safeguards, so you can focus on your new life."
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Got questions? We're here to help!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FAQItem question="How can NewUK help me settle in the UK?" />
            <FAQItem question="What resources are available for job seekers?" />
            <FAQItem question="How can I connect with other immigrants in my area?" />
            <FAQItem question="What support is available for learning English?" />
            <FAQItem question="How can I navigate the UK healthcare system?" />
            <FAQItem question="What are the steps to obtain a UK driver's license?" />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FAQItem = ({ question }: { question: string }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h5 className="font-semibold text-gray-800">{question}</h5>
    <button className="text-primary-500 mt-2">Learn More</button>
  </div>
);

export default LandingPage;