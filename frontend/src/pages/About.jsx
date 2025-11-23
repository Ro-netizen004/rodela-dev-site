const About = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-6 md:px-20 py-16 max-w-6xl mx-auto gap-8">
        {/* Left side: picture and "about." */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <h1 className="font-bold text-3xl mb-4">about.</h1>
          <img 
            src="Jumping.jpg" 
            alt="Rodela" 
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>

        {/* Right side: text */}
        <div className="md:w-2/3 text-center md:text-left">
            <img src = "Intro.png" className="mb-2"/>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black font-thin">
            I'm a CS student at USF who loves building cool web apps, messing around with game design, and dabbling in machine learning. I’m always learning new tech, experimenting with projects, and trying to make things a little more fun.
          </p>
        </div>
      </section>

      {/* Skills / Interests Section */}
      <section className="py-24 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
          What I’m Into
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-gray-400 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Web Stuff</h3>
            <p className="text-gray-700 text-sm">
              React, Node.js, Express, Tailwind, Supabase—basically building apps that actually work.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-gray-400 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-gray-700 text-sm">
              Playing with Python, scikit-learn, and creating models that predict stuff.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-gray-400 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Game Design</h3>
            <p className="text-gray-700 text-sm">
              Unity, 2D/3D projects, and just having fun with interactive design.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-gray-400 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Hackathons</h3>
            <p className="text-gray-700 text-sm">
              AI Cancer Cell Classifier, Bocky the Book, Origami Bot—basically building stuff fast and learning a ton.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-gray-400 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Other Fun Stuff</h3>
            <p className="text-gray-700 text-sm">
              Art, my YouTube channel, volunteering, and just trying new things.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-gray-400 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Chess</h3>
            <p className="text-gray-700 text-sm">
              I love chess! Have been playing for two years now, improving ever since.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
