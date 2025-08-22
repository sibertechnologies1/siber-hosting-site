const CTASection = () => {
    return (
      <section className="py-20 bg-green-800 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Let's Work Together</h2>
          <p className="text-lg mb-6">
            Looking to build an amazing website? Contact us and let's make it happen.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  