const Timeline = () => {
  const events = [
    
    { year: "August 2025", title: "Peer Health Educator", description: "Promoted student well-being through workshops, events, and peer education focused on mental health, stress, sleep, and overall wellness, gained valuable communication skills."
    },
    {
        year: "August 2025",
        title: "Web Developer @ WICSE",
        description:
            "Joined Women in Computer Science and Engineering (WICSE) at USF as the lead web developer, currently building their full official website from the ground up and assisting during organizational events."
    },

    {
        year: "August 2024",
        title: "Started my B.S. in Computer Science at USF",
        description:
            "Began my CS journey as an Honors student at the University of South Florida as a Green & Gold Presidential Award recipient Expected graduation: Spring 2027."
    },
     {
        year: "December 2023",
        title: "Teaching assistant at Academia (Bangladesh)",
        description:
            "Supported teachers at my high school in planning and delivering lessons, edited and prepared mock examination papers using PDF XChange Editor, reviewed completed papers, and invigilated exams to ensure students followed proper protocols."
    }

  ];

  return (
    <div id= "timeline" className="w-full bg-black text-white py-16 px-6 scroll-mt-24">

      {/* Layout: image on top (mobile), timeline on bottom (mobile), side-by-side on desktop */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-10">

        {/* IMAGE — on mobile it's on TOP because of flex-row-reverse */}
        <div className="flex justify-center w-full md:w-1/2">
            <img
                src="snaphshots.jpg"
                className="max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-contain"
            />
        </div>


        {/* TIMELINE */}
        <div className="relative w-full md:w-1/2">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-white"></div>

          <div className="space-y-10 pl-10">
            {events.map((e, i) => (
              <div key={i} className="relative">

                {/* Text */}
                <p className="text-sm text-gray-400">{e.year}</p>
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{e.description}</p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;
