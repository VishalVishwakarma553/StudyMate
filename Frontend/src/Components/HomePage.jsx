import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-[#1a1b41]">
      
      <div className=" bg-[#1a1b41] text-white-900 max-w-auto">
        {/* Hero Section */}
        <div className="hero min-h-screen ">
          <div className="hero-content gap-12 flex-col  lg:flex-row">
            <div className="text-center">
              <h1 className=" sm:text-5xl sm:w-xl text-2xl mt-6 font-bold">
                Level up your carrier by collaborating with others
              </h1>
              <p className="py-6">
                Find the right mentor, collaborate with peers, and enhance your
                skills.
              </p>
              <div className="flex justify-center">
                <Link to="/mentor"><button className="btn btn-primary">Get Started</button></Link>
              </div>
            </div>
            <img
              src="/image.webp"
              className="rounded-lg shadow-2xl w-[400px]   md:max-w-[400px]  h-auto"
              alt="Mentorship"
            />
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 border-b text-center">
          <div className="container mx-auto px-10 text-center">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="card bg-[#353773]  shadow-lg p-6">
                <h3 className="text-xl font-semibold">🎓 Expert Mentors</h3>
                <p>
                  Learn from industry professionals and experienced mentors.
                </p>
              </div>
              <div className="card bg-[#353773] shadow-lg p-6">
                <h3 className="text-xl font-semibold">📞 Live Video Calls</h3>
                <p>Seamless video conferencing for mentorship sessions.</p>
              </div>
              <div className="card bg-[#353773] shadow-lg p-6">
                <h3 className="text-xl font-semibold">📚 Resource Sharing</h3>
                <p>Share notes, links, and documents effortlessly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-b text-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Our Impact</h2>
            <div className="grid grid-cols-3  sm:grid-cols-4 gap-6 mt-8">
              <div className="text-2xl font-medium sm:stat">
                <div className="sm:stat-value">5K+</div>
                <div className="sm:stat-title">Active Users</div>
              </div>
              <div className="font-medium sm:stat">
                <div className="sm:stat-value">1.2K</div>
                <div className="sm:stat-title">Mentorship Sessions</div>
              </div>
              <div className="font-medium sm:stat">
                <div className="sm:stat-value">300+</div>
                <div className="sm:stat-title">Mentors Available</div>
              </div>
              <div className="hidden sm:stat">
                <div className=" sm:stat-value">98%</div>
                <div className="sm:stat-title">User Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className=" py-16 text-center">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <div className="container mx-auto px-4 text-center">
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="card bg-gradient-to-r bg-[#2d31a1] px-6 border-base-300  p-6">
                <p className="text-lg">
                  "This platform helped me find an amazing mentor!"
                </p>
                <div className="mt-2 text-sm font-semibold">
                  - Sarah, Student
                </div>
              </div>
              <div className="card bg-gradient-to-r from-blue-900 to-indigo-900 px-6 border-base-300 shadow-lg p-6">
                <p className="text-lg">
                  "A great way to give back and guide students!"
                </p>
                <div className="mt-2 text-sm font-semibold">- John, Mentor</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16  text-center">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4 max-w-md  mx-auto">
            <details className="bg-[#151bbcaf]  collapse collapse-arrow border border-base-300  rounded-box">
              <summary className="collapse-title  text-xl font-medium">
                How do I become a mentor?
              </summary>
              <div className="collapse-content transition-all duration-300">
                <p>Sign up and complete the mentor verification process.</p>
              </div>
            </details>
            <details className="bg-[#151bbcaf] collapse collapse-arrow border border-base-300  rounded-box">
              <summary className=" collapse-title text-xl font-medium">
                Is this platform free?
              </summary>
              <div className="collapse-content">
                <p>Yes, basic mentorship features are free!</p>
              </div>
            </details>
          </div>
        </section>

        <footer className="footer footer-horizontal border-b-blue-950 footer-center bg-[#050622bc] text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Mentorship</a>
            <a className="link link-hover">Mentor</a>
          </nav>

          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
