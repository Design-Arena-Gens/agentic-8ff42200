export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-content">
          <div className="logo">OAKMONT ACADEMY</div>
          <ul className="nav-links">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#programs">PROGRAMS</a></li>
            <li><a href="#values">VALUES</a></li>
            <li><a href="#testimonials">TESTIMONIALS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>OAKMONT ACADEMY</h1>
          <p className="hero-subtitle">Excellence in Education Since 1895</p>
          <p className="hero-tagline">Nurturing Minds, Shaping Futures</p>
          <a href="#about" className="cta-button">DISCOVER MORE</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>A Legacy of Excellence</h2>
              <p>
                For over a century, Oakmont Academy has stood as a beacon of educational
                excellence, cultivating the minds of tomorrow's leaders. Our distinguished
                institution combines timeless traditions with innovative approaches to learning.
              </p>
              <p>
                We believe in nurturing not just academic brilliance, but also character,
                creativity, and compassion. Every student at Oakmont is encouraged to explore
                their passions and reach their fullest potential.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">COLLEGE ACCEPTANCE</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12:1</div>
                  <div className="stat-label">STUDENT-TEACHER RATIO</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">45+</div>
                  <div className="stat-label">COUNTRIES REPRESENTED</div>
                </div>
              </div>
            </div>
            <div className="about-image"></div>
          </div>
        </div>
      </section>

      <section id="programs" className="programs">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">📚</div>
              <h3>Academic Excellence</h3>
              <p>
                Our rigorous curriculum combines classical education with cutting-edge
                methodologies, preparing students for the world's finest universities.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🎨</div>
              <h3>Arts & Creativity</h3>
              <p>
                From visual arts to performing arts, we provide state-of-the-art facilities
                and expert instruction to nurture creative expression.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">⚡</div>
              <h3>Athletics</h3>
              <p>
                Our comprehensive athletics program develops physical fitness, teamwork,
                and leadership through diverse sports and activities.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🔬</div>
              <h3>STEM Innovation</h3>
              <p>
                Advanced laboratories and technology centers foster scientific inquiry
                and innovation, preparing students for tomorrow's challenges.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🌍</div>
              <h3>Global Citizenship</h3>
              <p>
                Through international programs and cultural exchanges, we cultivate
                global awareness and cross-cultural understanding.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🎯</div>
              <h3>Leadership</h3>
              <p>
                Our leadership programs empower students to develop the skills and
                confidence to make meaningful contributions to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Embracing new ideas and approaches to education while honoring proven traditions.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>Fostering honesty, responsibility, and ethical behavior in all aspects of life.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>Cultivating empathy and service to others within our community and beyond.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎓</div>
              <h3>Excellence</h3>
              <p>Striving for the highest standards in academics, arts, athletics, and character.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Community Says</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Oakmont Academy provided my daughter with not just an exceptional education,
                but a transformative experience. The faculty's dedication and the school's
                commitment to holistic development are truly remarkable."
              </p>
              <div className="testimonial-author">Sarah Mitchell</div>
              <div className="testimonial-role">Parent, Class of 2023</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "The opportunities I had at Oakmont shaped who I am today. From research
                projects to leadership roles, every experience prepared me for success at
                university and beyond."
              </p>
              <div className="testimonial-author">James Chen</div>
              <div className="testimonial-role">Alumni, Stanford University</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "What sets Oakmont apart is the genuine care for each student's individual
                journey. The small class sizes and personalized attention have allowed my
                son to thrive academically and personally."
              </p>
              <div className="testimonial-author">Dr. Robert Williams</div>
              <div className="testimonial-role">Parent, Current Student</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Teaching at Oakmont for fifteen years has been the highlight of my career.
                The collaborative culture and commitment to excellence create an environment
                where both students and faculty flourish."
              </p>
              <div className="testimonial-author">Prof. Elizabeth Harper</div>
              <div className="testimonial-role">Senior Faculty Member</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Get in Touch</h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--dark-blue)', marginBottom: '3rem'}}>
              We invite you to visit our campus and experience the Oakmont difference firsthand.
              Schedule a tour or reach out to learn more about our admissions process.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <h3>Visit Us</h3>
                <p>123 Academy Drive<br/>Oakmont, CA 94561</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <h3>Call Us</h3>
                <p>(555) 123-4567<br/>Mon-Fri, 8am-5pm</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <h3>Email Us</h3>
                <p>admissions@oakmont.edu<br/>info@oakmont.edu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Oakmont Academy. All rights reserved. | A tradition of excellence since 1895.</p>
        </div>
      </footer>
    </>
  )
}
