<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Peter Mkwawa - Professional Image Gallery</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background-color: #f8fafc;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 70%, #0f3460 100%);
            color: white;
            padding: 4rem 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
        }

        .hero-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            align-items: center;
        }

        .hero-text h1 {
            font-size: clamp(2rem, 5vw, 4rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #e0e0e0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-text p {
            font-size: clamp(1rem, 3vw, 1.4rem);
            color: #b0b0b0;
            margin-bottom: 2rem;
            max-width: 600px;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .btn {
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            min-height: 44px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            border: none;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: #e0e0e0;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.6);
        }

        /* Responsive Image Styles */
        .responsive-image {
            width: 100%;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            object-fit: cover;
        }

        .responsive-image:hover {
            transform: scale(1.02);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .hero-image-container {
            position: relative;
            max-width: 500px;
            margin: 0 auto;
        }

        .hero-image {
            aspect-ratio: 4/3;
        }

        /* Section Styles */
        .section {
            padding: 4rem 0;
        }

        .section-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .section-header h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin-bottom: 1rem;
            color: #1a1a1a;
        }

        .section-header p {
            font-size: 1.2rem;
            color: #4a5568;
            margin-top: 0.5rem;
        }

        .section-divider {
            width: 80px;
            height: 4px;
            background: linear-gradient(135deg, #4c68d7 0%, #6b46c1 100%);
            margin: 1rem auto 2rem;
            border-radius: 2px;
        }

        /* Image Gallery Grid */
        .image-gallery {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .gallery-item:hover {
            transform: translateY(-5px);
        }

        .gallery-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-image {
            transform: scale(1.05);
        }

        .image-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            color: white;
            padding: 2rem;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }

        .gallery-item:hover .image-overlay {
            transform: translateY(0);
        }

        .image-overlay h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .image-overlay p {
            font-size: 0.9rem;
            opacity: 0.9;
        }

        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }

        .stat-card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: #4c68d7;
            display: block;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            color: #4a5568;
            font-weight: 500;
        }

        /* Services Grid */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: white;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-align: center;
        }

        .service-card:hover {
            transform: translateY(-5px);
        }

        .service-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #4c68d7 0%, #6b46c1 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 2rem;
            color: white;
        }

        .service-card h3 {
            margin-bottom: 1rem;
            color: #1a1a1a;
        }

        .service-card ul {
            list-style: none;
            text-align: left;
        }

        .service-card li {
            padding: 0.5rem 0;
            color: #4a5568;
            position: relative;
            padding-left: 1.5rem;
        }

        .service-card li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #4c68d7;
            font-weight: bold;
        }

        /* Partnership Section */
        .partnership-section {
            background: #f8fafc;
        }

        .partnership-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: center;
        }

        .partnership-image-container {
            max-width: 600px;
            margin: 0 auto;
        }

        .partnership-text {
            text-align: center;
        }

        .partnership-title {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #1a1a1a;
        }

        .partnership-description {
            color: #4a5568;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .partnership-list {
            list-style: none;
            max-width: 400px;
            margin: 0 auto;
            text-align: left;
        }

        .partnership-list li {
            padding: 0.5rem 0;
            color: #4a5568;
            position: relative;
            padding-left: 1.5rem;
        }

        .partnership-list li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #4c68d7;
            font-weight: bold;
        }

        /* Contact Section */
        .contact-section {
            background: #f8fafc;
        }

        .contact-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
        }

        .contact-buttons a {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        /* Responsive Design */
        @media (min-width: 768px) {
            .hero-content {
                grid-template-columns: 1fr 1fr;
                gap: 4rem;
            }

            .hero-text {
                text-align: left;
            }

            .hero-buttons {
                justify-content: flex-start;
            }

            .image-gallery {
                grid-template-columns: repeat(2, 1fr);
            }

            .gallery-image {
                height: 250px;
            }

            .featured-image-container {
                max-width: 500px;
                margin: 0 auto;
            }

            .about-content {
                max-width: 800px;
                margin: 0 auto;
                text-align: center;
            }

            .about-description {
                font-size: 1.1rem;
                color: #4a5568;
                margin-bottom: 2rem;
            }

            .partnership-content {
                grid-template-columns: 1fr 1fr;
            }

            .partnership-image-container {
                max-width: 300px;
            }

            .partnership-text {
                text-align: left;
            }

            .services-grid {
                grid-template-columns: repeat(3, 1fr);
            }

            .gallery-image {
                height: 300px;
            }
        }

        @media (min-width: 1024px) {
            .container {
                padding: 0 2rem;
            }

            .image-gallery {
                grid-template-columns: repeat(3, 1fr);
            }

            .gallery-image {
                height: 300px;
            }
        }

        @media (max-width: 480px) {
            .hero {
                padding: 2rem 0;
                min-height: auto;
            }

            .hero-buttons {
                flex-direction: column;
            }

            .btn {
                width: 100%;
                justify-content: center;
            }

            .gallery-image {
                height: 200px;
            }
        }

        /* Loading Animation */
        .loading {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }

        .loading.loaded {
            opacity: 1;
            transform: translateY(0);
        }

        /* Image Lazy Loading Placeholder */
        .image-placeholder {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }

        @keyframes loading {
            0% {
                background-position: 200% 0;
            }
            100% {
                background-position: -200% 0;
            }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>Let's Turn Your Vision Into Action</h1>
                    <p>Comprehensive solutions tailored to African markets and global partnerships</p>
                    <div class="hero-buttons">
                        <a href="#contact" class="btn btn-primary">Work With Me</a>
                        <a href="#portfolio" class="btn btn-secondary">View Projects</a>
                    </div>
                </div>
                <div class="hero-image-container">
                    <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0psdktnKpdB2VEv0gHDW6HGUOuzGD6.png" 
                        alt="Professional business consultation and strategy session"
                        class="responsive-image hero-image loading"
                        loading="lazy"
                    >
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="section" id="about">
        <div class="container">
            <div class="section-header">
                <h2>Vision-Driven Foundation</h2>
                <div class="section-divider"></div>
            </div>

            <!-- Featured Image -->
            <div class="featured-image-container">
                <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/six.jpg-WHygRePPJoCDooNd84iFDTk8F4IK3n.jpeg" 
                    alt="Professional networking and business presentation at Women@Web event"
                    class="responsive-image featured-image loading"
                    loading="lazy"
                >
            </div>

            <div class="about-content">
                <p class="about-description">
                    Peter Mkwawa is a Tanzanian strategy consultant and program designer with 10 years of experience 
                    shaping public-private partnerships, donor-funded initiatives, and tech-for-impact programs across Africa.
                </p>
                <p class="about-description">
                    He has worked with organizations such as USAID, DW Akademie, GIZ, and leading African startups 
                    including Ramani and SparkCraft.
                </p>
            </div>

            <!-- Stats Grid -->
            <div class="stats-grid">
                <div class="stat-card loading">
                    <span class="stat-number">500+</span>
                    <span class="stat-label">SMEs Trained</span>
                </div>
                <div class="stat-card loading">
                    <span class="stat-number">$250M</span>
                    <span class="stat-label">Loan Portfolio</span>
                </div>
                <div class="stat-card loading">
                    <span class="stat-number">10</span>
                    <span class="stat-label">Years Experience</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Partnership Section -->
    <section class="section partnership-section">
        <div class="container">
            <div class="section-header">
                <h2>Strategic Partnerships & Collaboration</h2>
                <div class="section-divider"></div>
            </div>

            <div class="partnership-content">
                <div class="partnership-image-container">
                    <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/four.jpg-MXoF4j0ay02m5PwtdIhE7MCVhLYTkT.jpeg" 
                        alt="Professional handshake and partnership agreement at Ramani fintech event"
                        class="responsive-image partnership-image loading"
                        loading="lazy"
                    >
                </div>
                <div class="partnership-text">
                    <h3 class="partnership-title">
                        Building Meaningful Business Relationships
                    </h3>
                    <p class="partnership-description">
                        Through strategic partnerships and collaborative approaches, we create lasting value 
                        for organizations across Africa. Our network spans fintech, development organizations, 
                        and government institutions.
                    </p>
                    <ul class="partnership-list">
                        <li>Multi-stakeholder partnerships</li>
                        <li>Public-private collaborations</li>
                        <li>Cross-sector alliance building</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="section services-section" id="services">
        <div class="container">
            <div class="section-header">
                <h2>Comprehensive Solutions</h2>
                <div class="section-divider"></div>
            </div>

            <div class="services-grid">
                <div class="service-card loading">
                    <div class="service-icon">📊</div>
                    <h3>Strategic Advisory</h3>
                    <ul>
                        <li>Business model development</li>
                        <li>Go-to-market strategy</li>
                        <li>Growth & scale planning</li>
                        <li>Policy & regulatory engagement</li>
                    </ul>
                </div>
                <div class="service-card loading">
                    <div class="service-icon">🤝</div>
                    <h3>Partnerships & Fundraising</h3>
                    <ul>
                        <li>Multi-stakeholder partnerships</li>
                        <li>Grant writing & donor relations</li>
                        <li>Public-private collaborations</li>
                        <li>Fundraising strategies</li>
                    </ul>
                </div>
                <div class="service-card loading">
                    <div class="service-icon">💡</div>
                    <h3>Program & Product Design</h3>
                    <ul>
                        <li>Digital product roadmaps</li>
                        <li>M&E frameworks</li>
                        <li>Human-centered design</li>
                        <li>Market shaping and innovation</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact-section" id="contact">
        <div class="container">
            <div class="section-header">
                <h2>Ready to Transform Your Vision?</h2>
                <p class="contact-subtitle">Let's discuss how we can work together to achieve your goals</p>
                <div class="section-divider"></div>
            </div>
            
            <div class="contact-buttons">
                <a href="mailto:hello@petermkwawa.com" class="btn btn-primary">
                    📧 Send Email
                </a>
                <a href="https://wa.me/+255123456789" class="btn btn-secondary">
                    📱 WhatsApp
                </a>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
