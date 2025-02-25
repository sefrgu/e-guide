const permits = {
    "Birth Certificate": {
        requirements: ["Valid ID", "Affidavit of Birth", "Parent's Marriage Certificate"],
        fees: "Fee: ₱365.00 per copy",
        steps: [
            "Prepare necessary documents.",
            "Visit the municipal office.",
            "Fill out the application form.",
            "Submit the form with required documents.",
            "Pay the processing fee.",
            "Wait for processing and claim the document."
        ],
        blankForm: "sample_application_form.pdf",
        filledForm: "sample_application_form.pdf"
    },
    "Business Permit": {
        requirements: ["DTI Registration", "Barangay Clearance", "Lease Agreement", "Fire Safety Certificate","Sanitary Permit", "Community Tax Certificate (Cedula)"],
        fees: "₱5,000 to ₱15,000 or more",
        steps: [
            "Prepare necessary business documents.",
            "Visit the Business Permits and Licensing Office (BPLO).",
            "Submit your application form with all required documents.",
            "Pay the required fees.",
            "Wait for evaluation and approval.",
            "Claim your business permit."
        ],
        blankForm: "sample_business_permit.pdf",
        filledForm: "sample_business_permit.pdf"
    },
    "Barangay Clearance": {
        requirements: ["Completed Application Form", "DTI/SEC Registration", "Lease Contract or Land Title", "Community Tax Certificate (Cedula)"],
        fees: "Fee: ₱200 to ₱1,000",
        steps: [
            "Go to the barangay hall where your business is located.",
            "Fill out an application form.",
            "Submit valid ID, proof of address, and business details.",
            "Pay the fee (varies per barangay).",
            "Claim the clearance after processing."

        ],
        blankForm: "Barangay_Clearance.pdf",
        filledForm: "Barangay_Clearance.pdf"
    },
    "DTI Business Name Registration": {
        requirements: ["Completed Application Form", "Valid Identification (ID)", "Proposed Business Names"],
        fees: "Fee: ₱200 to ₱1,000",
        steps: [
            "Visit the DTI Business Name Registration System or a DTI office.",
            "Search and reserve your business name.",
            "Fill out the registration form.",
            "Pay the registration fee (₱200–₱2,000 depending on scope).",
            "Download or receive your Certificate of Business Name Registration."
           
        ],
        blankForm: "DTI_Registration.pdf",
        filledForm: "DTI_Registration.pdf"
    },
    "SEC Registration": {
        requirements: ["Name Verification Slip", "Articles of Incorporation or Partnership", "By-laws: For corporations.", "Treasurer's Affidavit", "Joint Affidavit of Two Incorporators"],
        fees: "Total Estimated Cost: ₱6,750",
        steps: [
            "Visit the SEC’s Company Registration System or an SEC office.",
            "Check the availability of your company name.",
            "Submit required documents (Articles of Incorporation, By-Laws, etc.).",
            "Pay registration fees based on capital.",
            "Wait for approval and receive your SEC Certificate of Registration."
            
        ],
        blankForm: "SEC_Registration.pdf",
        filledForm: "SEC_Registration.pdf"
    },
    "BIR Certificate": {
        requirements: ["Completed BIR Form 1901 or 1903", "DTI/SEC Registration", "Mayor's Permit", "Lease Contract or Land Title", "Valid Identification"],
        fees: "Total Estimated Cost: ₱4,275",
        steps: [
            "Visit the BIR office where your business is registered.",
            "Fill out BIR Form 1901 (sole proprietor) or Form 1903 (corporation).",
            "Submit DTI/SEC registration, Barangay Clearance, lease contract (if applicable).",
            "Pay the registration fee and documentary stamp tax.",
            "Attend a briefing and get your Certificate of Registration.",
            "Apply for official receipts and books of accounts."
        ],
        blankForm: "BIR_2303.pdf",
        filledForm: "BIR_2303.pdf"
    },
    "Sanitary Permit": {
        requirements: ["Mayor's Permit Application", "DTI/SEC Registration", "Location Sketch", "Health Certificates"],
        fees: "Fee: ₱300 to ₱1,000",
        steps: [
            "Visit your local city/municipal health office.",
            "Submit a business permit application and medical certificates of employees.",
            "Pay the necessary fee.",
            "Health inspectors will conduct an inspection.",
            "Receive your Sanitary Permit after approval."
            
        ],
        blankForm: "Sanitary_Permit.pdf",
        filledForm: "Sanitary_Permit.pdf"
    },
    "Fire Safety Inspection Certificate": {
        requirements: ["Fire Safety Evaluation Clearance", "Building Permit", "Fire Insurance Policy: If required.", "Emergency Evacuation Plan"],
        fees: "Fee: ₱500 to ₱10,000",
        steps: [
            "Go to the Bureau of Fire Protection (BFP) office.",
            "Submit a Fire Safety Evaluation Clearance (FSEC) and business permit application.",
            "Pay the fire inspection fee.",
            "A fire safety inspection will be conducted.",
            "Receive your Fire Safety Inspection Certificate."
            
        ],
        blankForm: "Fire_Safety_Certificate.pdf",
        filledForm: "Fire_Safety_Certificate.pdf"
    },
    "Zoning Clearance": {
        requirements: ["DTI/SEC Registration", "Location Sketch", "Lease Contract or Land Title", "Barangay Clearance"],
        fees: "Fee: Starts at ₱500",
        steps: [
            "Go to the local municipal or city planning office.",
            "Submit your business location details, land title/lease contract, and barangay clearance.",
            "Pay the fee based on your business type.",
            "Wait for inspection and approval.",
            "Get your Zoning Clearance."
            
        ],
        blankForm: "Zoning_Clearance.pdf",
        filledForm: "Zoning_Clearance.pdf"
    },
    "Occupational Permit": {
        requirements: ["Duly Accomplished Application Form", "Barangay Clearance", "Community Tax Certificate (Cedula)", "Valid Government-issued ID", "Health or Medical Certificate", "Police or NBI Clearance", "Company Endorsement or Certificate of Employment", "Proof of Payment "],
        fees: "Fee: Varies",
        steps: [
            "Visit the local municipal/city hall.",
            "Submit medical exam results, barangay clearance, and valid ID.",
            "Pay the permit fee.",
            "Claim the Occupational Permit."
            
        ],
        blankForm: "Occupational_Permit.pdf",
        filledForm: "Occupational_Permit.pdf"
    },
    "Environmental Compliance Certificate": {
        requirements: ["Project Description Report (PDR) or Initial Environmental Examination (IEE)", "Environmental Impact Assessment (EIA)", "Site Development Plan or Vicinity Map", "Proof of Ownership or Lease Agreement", "Barangay Clearance and LGU Endorsement", "Photographs of the Project Site", "Application Fee"],
        fees: "Fee: Varies",
        steps: [
            "Go to the Department of Environment and Natural Resources - Environmental Management Bureau (DENR-EMB).",
            "Submit an Environmental Impact Assessment (EIA) or Project Description Report.",
            "Wait for assessment and approval.",
            "Receive the ECC."
            
        ],
        blankForm: "ECC.pdf",
        filledForm: "ECC.pdf"
    },
    "Community Tax Certificate": {
        requirements: ["Valid Identification (ID)", "Taxpayer’s Identification Number (TIN)", "Declared Annual Income or Gross Sales (for businesses)", "Application Fee"],
        fees: "Fee: Based on gross receipts/sales for the preceding year, generally at a rate of ₱1.00 for every ₱1,000.00.",
        steps: [
            "Go to the barangay hall or municipal/city treasurer's office.",
            "Provide your business details and income declaration.",
            "Pay the cedula fee (amount depends on declared income).",
            "Receive your Community Tax Certificate."
        ],
        blankForm: "Cedula.pdf",
        filledForm: "Cedula.pdf"
    }
};

function showDetails(docType) {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('details-section').style.display = 'block';
    document.getElementById('details-title').innerText = docType + " Application Process";
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.back-btn').style.display = 'block';
    
    const data = permits[docType];
    if (data) {
        document.getElementById('requirements').innerHTML = data.requirements.map(item => `<li>${item}</li>`).join('');
        document.getElementById('fees').innerText = data.fees;
        document.getElementById('steps').innerHTML = data.steps.map(step => `<li>${step}</li>`).join('');
        document.getElementById('blank-form-link').href = data.blankForm;
        document.getElementById('filled-form-link').href = data.filledForm;
        document.getElementById('filled-form-preview').src = data.filledForm;
    }
}

function goBack() {
    document.getElementById('details-section').style.display = 'none';
    document.getElementById('main-content').style.display = 'grid';
    document.querySelector('.header').style.display = 'block';
    document.querySelector('.back-btn').style.display = 'none';
}