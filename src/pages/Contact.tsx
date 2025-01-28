import { Button } from "../components/ui/button";

const Contact = () => {
  return (
    <>
      <section className="contact-wrapper py-5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Reach Out to Us</h1>
            <p className="text-lg mt-2">We are only a step away from you</p>
          </div>
        </div>
      </section>

      <div className="contact-wrapper-details py-5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 text-center items-center">
            <div className="p-3">
              <div className="map rounded shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63826.53634427054!2d37.09345325!3d-1.04201225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e5b27c66117%3A0xb6f8a7e126152c26!2sThika!5e0!3m2!1sen!2ske!4v1668532780442!5m2!1sen!2ske"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[60vh]"
                ></iframe>
              </div>
            </div>
            <div>
              <div className="bg-orange-50 shadow-lg rounded-lg p-6 h-[55vh]">
                <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
                <p className="mb-2">
                  <b>Address:</b> Thika town, Naltex building, 2nd floor
                </p>
                <p className="mb-2">
                  <b>Phone:</b>{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="tel:+1234567890"
                  >
                    Call us at +1 (234) 567-890
                  </a>
                </p>
                <p className="mb-4">
                  <b>Hours:</b> From 8 a.m To 6 p.m
                </p>
                <p className="mb-2">
                  We are here to provide you with the best support and
                  assistance you need. Our team is dedicated to addressing your
                  concerns and making sure you are satisfied with our services.
                </p>
                <p>
                  Contact us for any inquiries or feedback. Visit us during our
                  working hours, and we’ll ensure you get the help you need
                  quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-message py-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-center text-2xl font-bold mb-4">
                Leave Us A Message
              </h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="form-input w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="First name"
                    aria-label="First name"
                  />
                  <input
                    type="text"
                    className="form-input w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="block text-gray-700 mb-2"
                  >
                    Enter Your Email address
                  </label>
                  <input
                    type="email"
                    className="form-input w-full border border-gray-300 rounded px-3 py-2"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="block text-gray-700 mb-2"
                  >
                    Type in your message
                  </label>
                  <textarea
                    className="form-textarea w-full border border-gray-300 rounded px-3 py-2"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button
                    id="button-link"
                    type="submit"
                    className="bg-orange-500 text-white  "
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
