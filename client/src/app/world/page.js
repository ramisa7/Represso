// the legal info is not complete 
// the contact info is not aligned properly 
// font check 
// src/app/world/page.js
import React from "react";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 p-8">
      
    {/* Brand Name */}
        <div className="flex flex-col items-center justify-center" style={{ paddingTop: "10px" }}>
        <h1
          className="font-serif text-[20vw] text-center"
          style={{
            color: "rgb(89, 91, 142)",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          REPRESSO
        </h1>

        {/* Contact Information */}
        <div className="text-center mt-4 mb-12">
          <p className="text-xl font-serif mb-14">@repress.o</p>
          <p className="text-xl font-serif">hey@represso.world</p>
        </div>
      </div>

      {/* Scrollable Legal Text */}
      <div class="legal-text">
        <h1>Website REPRESSO Legal, Terms, Privacy Policy</h1>
        <p>
            This Privacy Policy clarifies the nature, scope, and purpose of the processing of personal data (hereinafter referred to as "Data") within our online offering and the related websites, features and content, as well as external online presence, e.g., our Social Media Profile (collectively referred to as the "Online Offering"). With regard to the terminology used, e.g., "Processing" or "Responsible", we refer to the definitions in Article 4 of the General Data Protection Regulation (GDPR).
        </p>
        <h2>Responsible / Imprint</h2>
        <p>
            David Luu / REPRESSO e.K.<br/>
            Sandstr. 47<br/>
            13593 Berlin<br/>
            Germany<br/>
            <a href="mailto:hey@represso.world">hey@represso.world</a>
        </p>
        
        <h2>Types of Processed Data</h2>
        <ul>
            <li>Inventory data (e.g., names, addresses).</li>
            <li>Contact information (e.g., e-mail).</li>
            <li>Content data (e.g., text input).</li>
            <li>Usage data (e.g., websites visited, interest in content, access times).</li>
            <li>Meta / communication data (e.g., device information, IP addresses).</li>
        </ul>

        <h2>Categories of Affected Persons</h2>
        <p>Visitors and users of the online offer (hereinafter we refer to the affected persons as "users").</p>

        <h2>Purpose of Processing</h2>
        <ul>
            <li>Provision of the online offer, its functions, and contents.</li>
            <li>Answering contact requests and communicating with users.</li>
            <li>Safety measures.</li>
            <li>Reach measurement / marketing.</li>
        </ul>

        <h2>Used Terms</h2>
        <p>
            "Personal data" means any information relating to an identified or identifiable natural person (hereinafter the "data subject"); a natural person is considered as identifiable, which can be identified directly or indirectly, in particular by means of assignment to an identifier such as a name, to an identification number, to location data, to an online identifier (e.g., cookie) or to one or more special features, that express the physical, physiological, genetic, mental, economic, cultural, or social identity of this natural person.
        </p>
        <p>
            "Processing" means any process performed with or without the aid of automated procedures or any such process associated with personal data. The term goes far and includes virtually every handling of data.
        </p>
        <p>
            "Pseudonymisation" means the processing of personal data in such a way that the personal data can no longer be assigned to a specific data subject without additional information being provided, provided that such additional information is kept separate and subject to technical and organizational measures to ensure that the personal data not assigned to an identified or identifiable natural person.
        </p>
        <p>
            "Profiling" means any kind of automated processing of personal data which involves the use of such personal data to evaluate certain personal aspects relating to a natural person, in particular aspects relating to job performance, economic situation, health, personal To analyze or predict preferences, interests, reliability, behavior, whereabouts or relocation of that natural person.
        </p>
        <p>
            "Responsible person" means the natural or legal person, public authority, body, or body that decides, alone or in concert with others, on the purposes and means of processing personal data.
        </p>
        <p>
            "Processor" means a natural or legal person, public authority, agency, or other body that processes personal data on behalf of the controller.
        </p>

        <h2>Relevant Legal Bases</h2>
        <p>
            In accordance with Art. 13 GDPR, we inform you about the legal basis of our data processing. Unless the legal basis in the data protection declaration is mentioned, the following applies: The legal basis for obtaining consent is Article 6 (1) lit. a and Art. 7 DSGVO, the legal basis for the processing for the performance of our services and the execution of contractual measures as well as the response to inquiries is Art. 6 (1) lit. b DSGVO, the legal basis for processing in order to fulfill our legal obligations is Art. 6 (1) lit. c DSGVO, and the legal basis for processing in order to safeguard our legitimate interests is Article 6 (1) lit. f DSGVO. 
        </p>

       
         
        </div>
    </div>


  );
}
