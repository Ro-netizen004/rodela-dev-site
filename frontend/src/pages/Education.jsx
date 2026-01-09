const Education = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="flex flex-col items-center px-6 md:px-20 py-7 max-w-6xl mx-auto gap-4">
        <h1 className="font-bold text-3xl md:text-4xl mb-2">education.</h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black font-thin text-center md:text-left max-w-3xl">
          Here’s a summary of my formal education, degrees, and notable achievements. Each experience has helped me build the skills I use in web development, machine learning, and research.
        </p>
      </section>

      {/* Education Section */}
      <section className="pt-10 pb-6 px-6 md:px-20 max-w-6xl mx-auto">
    
        {/* University */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-32 mb-8">
          {/* Image */}
          <img 
            src="go-bulls.png" 
            alt="USF Logo" 
            className="w-64 h-64 object-contain flex-shrink-0"
          />
          
          {/* Text content */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">University of South Florida</h3>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              Proudly a USF Bull! Pursuing a Bachelor of Science in Computer Science with a focus on full-stack development and machine learning.
            </p>

            {/* GPA and Graduation */}
            <p className="text-gray-700 text-sm md:text-base mb-2">
              GPA: 3.93/4.0 &nbsp; | &nbsp; Expected Graduation: May 2027
            </p>

            <p className="text-gray-700 text-sm md:text-base mb-4">Recipient of the Green and Gold Award.</p>

            <h4 className="text-lg md:text-xl font-semibold mb-2">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2 mb-4">
            {["Data Structures", "Computer Organization", "Probability and Statistics"].map((course) => (
                <span
                key={course}
                className="text-xs md:text-sm font-medium bg-white text-gray-700 px-2 py-1 rounded-full border border-gray-300"
                >
                {course}
                </span>
            ))}
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Education;
