function autoFormatDate(input) {
  let val = input.value.replace(/\D/g, "").slice(0, 8);
  if (val.length >= 5) {
    input.value = val.slice(0, 2) + '/' + val.slice(2, 4) + '/' + val.slice(4);
  } else if (val.length >= 3) {
    input.value = val.slice(0, 2) + '/' + val.slice(2);
  } else {
    input.value = val;
  }
}

function toggleStream(select) {
  const streamWrapper = document.getElementById('streamWrapper');
  if (["10", "11", "12"].includes(select.value)) {
    streamWrapper.style.display = "block";
    document.getElementById('stream').setAttribute('required', 'required');
  } else {
    streamWrapper.style.display = "none";
    document.getElementById('stream').removeAttribute('required');
    document.getElementById('stream').value = "";
  }
}

function toggleCustomGuardian(select) {
  const wrapper = document.getElementById('customGuardianWrapper');
  const input = document.getElementById('customGuardian');
  if (select.value === "Other") {
    wrapper.style.display = "block";
    input.setAttribute('required', 'required');
  } else {
    wrapper.style.display = "none";
    input.removeAttribute('required');
    input.value = "";
  }
}

function showPopup(message) {
  const popup = document.getElementById('popup');
  popup.textContent = message;
  popup.style.display = "block";
  setTimeout(() => popup.style.display = "none", 5000);
}

function validateFileInput(input) {
  return !(input.required && input.files.length === 0);
}

document.getElementById('applicationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  [...this.elements].forEach(el => el.classList.remove('error-border'));

  const requiredFields = [
    'firstNames', 'lastName', 'dob', 'grade', 'idNumber', 'email', 'phone',
    'guardianRelation', 'guardianFullName', 'guardianPhone', 'emergencyPhone',
    'reportCard', 'idCopy', 'parentIdCopy', 'proofResidence'
  ];

  if (document.getElementById('streamWrapper').style.display === 'block') {
    requiredFields.push('stream');
  }
  if (document.getElementById('customGuardianWrapper').style.display === 'block') {
    requiredFields.push('customGuardian');
  }

  let valid = true;

  for (const id of requiredFields) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.type === "file" && !validateFileInput(el)) {
      valid = false;
      el.classList.add('error-border');
    } else if (el.value.trim() === "") {
      valid = false;
      el.classList.add('error-border');
    }
  }

  const genderChecked = [...this.elements['gender']].some(r => r.checked);
  if (!genderChecked) {
    valid = false;
    document.querySelectorAll('input[name="gender"]').forEach(r => {
      r.parentElement.classList.add('error-border');
    });
  } else {
    document.querySelectorAll('input[name="gender"]').forEach(r => {
      r.parentElement.classList.remove('error-border');
    });
  }

  if (!valid) {
    showPopup("Go fill all mandatory areas.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
  document.getElementById('streamWrapper').style.display = "none";
  document.getElementById('customGuardianWrapper').style.display = "none";
});
