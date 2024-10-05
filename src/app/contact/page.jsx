import "./index.css";

const Contact = () => {
  return (
    <main>
      <div className="contact-container container">
        <h2>Contact Us</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your first name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
