import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const testimonials = [
    {
      text: "The Mindspark program has completely transformed how my students learn mathematics. They are more engaged and confident than ever before.",
      name: "Priya Sharma",
      role: "Mathematics Teacher",
      school: "Government High School, Hyderabad",
      category: "Teacher"
    },
    {
      text: "Our school's learning outcomes have improved significantly since implementing PAL. The personalized approach really makes a difference.",
      name: "Dr. Rajesh Kumar",
      role: "Principal",
      school: "TSWREIS School, Warangal",
      category: "Principal"
    },
    {
      text: "I love using the learning app! It helps me understand difficult concepts through games and interactive lessons.",
      name: "Aisha Begum",
      role: "Grade 7 Student",
      school: "TGTWREIS School, Medak",
      category: "Student"
    },
    {
      text: "Educational Initiatives has been instrumental in bridging the digital divide in our tribal schools. Their impact is remarkable.",
      name: "Smt. Kavitha Reddy",
      role: "District Education Officer",
      school: "Department of Education, Telangana",
      category: "Government Official"
    },
    {
      text: "The training and support provided by the EI team has empowered our teachers to use technology effectively in classrooms.",
      name: "Mohammed Hassan",
      role: "Academic Coordinator",
      school: "MJPTBCWREIS School, Nizamabad",
      category: "Principal"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Teacher': return 'bg-blue-100 text-blue-800';
      case 'Principal': return 'bg-green-100 text-green-800';
      case 'Student': return 'bg-purple-100 text-purple-800';
      case 'Government Official': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from teachers, students, principals, and government officials about 
            the impact of our educational programs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex items-start mb-8">
              <Quote className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentSlide].text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {testimonials[currentSlide].name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentSlide].school}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(testimonials[currentSlide].category)}`}>
                    {testimonials[currentSlide].category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors shadow-md"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors shadow-md"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;