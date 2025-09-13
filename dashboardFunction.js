function showDashboard() {
    setActiveLink("Dashboard");
    const main = document.getElementById("mainContent");

    // Count verified and unverified documents
    const verifiedDocs = documents.filter(doc => doc.status === "Verified").length;
    const unverifiedDocs = documents.filter(doc => doc.status === "Unverified").length;

    const verifiedCerts = certificates.filter(cert => cert.status === "Verified").length;
    const unverifiedCerts = certificates.filter(cert => cert.status === "Unverified").length;

    main.innerHTML = `
        <h1>Dashboard</h1>
        
        <!-- Top Section: Profile Summary -->
        <div style="display:flex; gap:20px; margin-bottom:30px; align-items:center;">
            <div>
                <img src="https://wallpapercave.com/wp/wp3090421.jpg" 
                     alt="Student Photo" 
                     style="border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.2); width:120px; height:120px; object-fit:cover;">
            </div>
            <div style="flex:1; display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                <div class="card"><strong>Name:</strong> ${studentInfo.name}</div>
                <div class="card"><strong>Branch:</strong> ${studentInfo.branch}</div>
                <div class="card"><strong>College:</strong> ${studentInfo.college}</div>
                <div class="card"><strong>Year:</strong> ${studentInfo.year}</div>
                <div class="card"><strong>GPA:</strong> ${studentInfo.stats.gpa}</div>
                <div class="card"><strong>Completed Credits:</strong> ${studentInfo.stats.completedCredits}</div>
                <div class="card"><strong>Ongoing Projects:</strong> ${studentInfo.stats.ongoingProjects}</div>
                <div class="card"><strong>Address:</strong> 123, Main Street, City, State, PIN-123456</div>
            </div>
        </div>

        <!-- Middle Section: Clubs & Achievements -->
        <div style="display:flex; gap:20px; margin-bottom:30px; flex-wrap:wrap;">
            <div class="card" style="flex:1; min-width:200px;"><strong>Clubs:</strong> ${studentInfo.clubs.join(", ")}</div>
            <div class="card" style="flex:2; min-width:300px;"><strong>Achievements:</strong> ${studentInfo.achievements.join(", ")}</div>
        </div>

        <!-- Quick Links Section -->
        <div style="display:flex; gap:20px; flex-wrap:wrap; margin-bottom:30px;">
            <!-- Certificates Card -->
            <div class="quick-card" onclick="showCertificates()" style="flex:1; min-width:220px;">
                <h3>🎓 Certificates</h3>
                <p><strong>Total:</strong> ${certificates.length}</p>
                <p><span style="color:green;"><strong>Verified:</strong> ${verifiedCerts}</span></p>
                <p><span style="color:red;"><strong>Unverified:</strong> ${unverifiedCerts}</span></p>
            </div>

            <!-- Documents Card -->
            <div class="quick-card" onclick="showDocuments()" style="flex:1; min-width:220px;">
                <h3>📄 Documents</h3>
                <p><strong>Total:</strong> ${documents.length}</p>
                <p><span style="color:green;"><strong>Verified:</strong> ${verifiedDocs}</span></p>
                <p><span style="color:red;"><strong>Unverified:</strong> ${unverifiedDocs}</span></p>
            </div>

            <!-- Jobs Card -->
            <div class="quick-card" onclick="showJobs()" style="flex:1; min-width:220px;">
                <h3>💼 Jobs & Internships</h3>
                <p>Explore opportunities based on your profile</p>
                <p style="color:#003366;"><strong>+ Trending Roles</strong></p>
            </div>
        </div>

        <!-- Trending News Section -->
        <div style="margin-bottom:30px;">
            <h2>📢 Trending Tech News</h2>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:20px;">
                <div class="card">
                    <img src="https://picsum.photos/200?random=11" style="width:100%;border-radius:8px;">
                    <p><strong>AI Revolution:</strong> Major breakthrough in natural language processing.</p>
                </div>
                <div class="card">
                    <img src="https://picsum.photos/200?random=12" style="width:100%;border-radius:8px;">
                    <p><strong>Cybersecurity Alert:</strong> Protect your data with new encryption standards.</p>
                </div>
                <div class="card">
                    <img src="https://picsum.photos/200?random=13" style="width:100%;border-radius:8px;">
                    <p><strong>Space Tech:</strong> Private companies to launch next-gen satellites in 2025.</p>
                </div>
            </div>
        </div>

        <!-- Upcoming Events Section -->
        <div style="margin-bottom:30px;">
            <h2>📅 Upcoming Events & Deadlines</h2>
            <ul style="list-style:none; padding:0;">
                <li class="card" style="margin-bottom:10px;"><strong>20th Sept:</strong> Internship application deadline for Google STEP.</li>
                <li class="card" style="margin-bottom:10px;"><strong>25th Sept:</strong> College Hackathon registrations close.</li>
                <li class="card" style="margin-bottom:10px;"><strong>30th Sept:</strong> Resume building workshop by Microsoft.</li>
            </ul>
        </div>

        <!-- Recommended Skills -->
        <div style="margin-bottom:30px;">
            <h2>🚀 Recommended Skills</h2>
            <div style="display:flex; gap:15px; flex-wrap:wrap;">
                <div class="card" style="flex:1; min-width:180px;">Machine Learning</div>
                <div class="card" style="flex:1; min-width:180px;">Cloud Computing</div>
                <div class="card" style="flex:1; min-width:180px;">Data Structures</div>
                <div class="card" style="flex:1; min-width:180px;">Blockchain</div>
                <div class="card" style="flex:1; min-width:180px;">Cybersecurity</div>
            </div>
        </div>

        <!-- Motivational Quote Section -->
        <div class="card" style="text-align:center; font-style:italic; background:#f7f7f7;">
            "The future belongs to those who prepare for it today." – Malcolm X
        </div>
    `;

    // Apply dynamic hover effect to quick links
    const quickCards = document.querySelectorAll(".quick-card");
    quickCards.forEach(card => {
        card.style.background = "#fff";
        card.style.borderRadius = "12px";
        card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        card.style.padding = "20px";
        card.style.textAlign = "center";
        card.style.cursor = "pointer";
        card.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-3px)";
            card.style.boxShadow = "0 6px 18px rgba(0,0,0,0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        });
    });
}