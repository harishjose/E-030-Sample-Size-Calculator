let dataChoice = null;
let riskProfile = null;
let specification = null;

// Handle Data Choice (Qualitative or Quantitative)
function handleDataChoice(choice) {
    dataChoice = choice;
    document.getElementById('question-container').classList.add('hidden');
    
    // Clear any previous selections
    document.getElementById('risk-container').classList.add('hidden');
    document.getElementById('specification-container').classList.add('hidden');
    document.getElementById('quantitative-tables').classList.add('hidden');
    document.getElementById('result-container').classList.add('hidden');
    
    if (choice === 'Qualitative') {
        showQualitativeRiskProfile();
    } else if (choice === 'Quantitative') {
        showQuantitativeRiskProfile();
    }
}

// Show Qualitative Risk Profile Options
function showQualitativeRiskProfile() {
    // Show the Qualitative Risk Profile
    document.getElementById('risk-container').classList.remove('hidden');
    document.getElementById('risk-question').innerText = "What is the risk profile for the characteristic you want to analyze?";
    document.getElementById('risk-options').innerHTML = `
        <button class="option-button" onclick="handleQualitativeRiskProfile('Low')">Low</button>
        <button class="option-button" onclick="handleQualitativeRiskProfile('Medium')">Medium</button>
        <button class="option-button" onclick="handleQualitativeRiskProfile('High')">High</button>
    `;
}

// Handle Qualitative Risk Profile Selection
function handleQualitativeRiskProfile(profile) {
    riskProfile = profile;
    document.getElementById('risk-container').classList.add('hidden'); // Hide risk profile question
    
    // Show Sample Size Statement for Qualitative Data
    showQualitativeResults();
}

// Show Qualitative Results
function showQualitativeResults() {
    document.getElementById('result-container').classList.remove('hidden');
    let sampleSizeStatement = '';
    
    // Display sample size statement based on risk profile for Qualitative
    if (riskProfile === 'Low') {
        sampleSizeStatement = "The Low risk profile corresponds to >= 90% reliability at 90% confidence level. This equates to 22 samples and 0 rejects.";
    } else if (riskProfile === 'Medium') {
        sampleSizeStatement = "The Medium risk profile corresponds to >= 95% reliability at 95% confidence level. This equates to 59 samples and 0 rejects.";
    } else if (riskProfile === 'High') {
        sampleSizeStatement = "The High risk profile corresponds to >= 99% reliability at 95% confidence level. This equates to 299 samples and 0 rejects.";
    }
    
    document.getElementById('result-container').innerText = sampleSizeStatement;
}

// Show Quantitative Risk Profile Options
function showQuantitativeRiskProfile() {
    // Show the Quantitative Risk Profile options
    document.getElementById('risk-container').classList.remove('hidden');
    document.getElementById('risk-question').innerText = "What is the risk profile for the characteristic you want to analyze?";
    document.getElementById('risk-options').innerHTML = `
        <button class="option-button" onclick="handleQuantitativeRiskProfile('Low')">Low</button>
        <button class="option-button" onclick="handleQuantitativeRiskProfile('Medium')">Medium</button>
        <button class="option-button" onclick="handleQuantitativeRiskProfile('High')">High</button>
    `;
}

// Handle Quantitative Risk Profile Selection
function handleQuantitativeRiskProfile(profile) {
    riskProfile = profile;
    document.getElementById('risk-container').classList.add('hidden'); // Hide risk profile question
    
    // Show the specification options for Quantitative data
    document.getElementById('specification-container').classList.remove('hidden');
}

// Handle Specification Selection for Quantitative Data
function handleSpecification(spec) {
    specification = spec;
    
    // Hide the specification buttons after selection
    document.getElementById('specification-container').classList.add('hidden');
    
    // Show the appropriate table based on risk and specification
    document.getElementById('quantitative-tables').classList.remove('hidden');
    showQuantitativeTable();
}

// Show Quantitative Tables
function showQuantitativeTable() {
    // Hide all tables initially
    document.getElementById('low-one-sided').classList.add('hidden');
    document.getElementById('medium-one-sided').classList.add('hidden');
    document.getElementById('high-one-sided').classList.add('hidden');
    document.getElementById('low-two-sided').classList.add('hidden');
    document.getElementById('medium-two-sided').classList.add('hidden');
    document.getElementById('high-two-sided').classList.add('hidden');
    
    // Logic for showing the appropriate table based on risk profile and specification
    if (riskProfile === 'Low' && specification === 'One-Sided') {
        document.getElementById('low-one-sided').classList.remove('hidden');
    } else if (riskProfile === 'Medium' && specification === 'One-Sided') {
        document.getElementById('medium-one-sided').classList.remove('hidden');
    } else if (riskProfile === 'High' && specification === 'One-Sided') {
        document.getElementById('high-one-sided').classList.remove('hidden');
    } else if (riskProfile === 'Low' && specification === 'Two-Sided') {
        document.getElementById('low-two-sided').classList.remove('hidden');
    } else if (riskProfile === 'Medium' && specification === 'Two-Sided') {
        document.getElementById('medium-two-sided').classList.remove('hidden');
    } else if (riskProfile === 'High' && specification === 'Two-Sided') {
        document.getElementById('high-two-sided').classList.remove('hidden');
    }
}

// Go Back
function goBack() {
    // Reset everything and show the initial question
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('risk-container').classList.add('hidden');
    document.getElementById('specification-container').classList.add('hidden');
    document.getElementById('quantitative-tables').classList.add('hidden');
    document.getElementById('result-container').classList.add('hidden');
}
