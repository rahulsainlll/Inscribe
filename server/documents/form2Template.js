module.exports = (formData) => {
  return `
   <!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
    }

    .container {
      width: 595px; /* A4 width in pixels (210mm converted to pixels at 96dpi) */
      height: 842px; /* A4 height in pixels (297mm converted to pixels at 96dpi) */
      margin: 0 auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .heading {
      height: 24px;
      background-color: red;
      width: 100%;
    }

    .header {
      color: black;
      padding: 20px;
      text-align: center;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header img {
      max-width: 100px;
      margin-right: 20px;
    }

    .content {
      padding: 20px;
      width: 100%;
    }

    .table-container {
      width: 100%;
      margin: 0 auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      text-align: left;
      padding: 8px;
      border: 1px solid black;
    }

    .footer {
      background-color: #dc3545;
      color: white;
      padding: 20px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      position: relative;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    .footer div {
      flex: 1;
    }

    .naac-logo {
      margin-left: 20px;
    }
  </style>
</head>
<body>

<div class="container">
  <div class="heading"></div>
  <div class="header">
    <img style="height: 100px; width: 700px;" src="./chandigarh_university_logo_cu_freelogovectors.net_.png" alt="Chandigarh University Logo">
    <div>
      <h1>PVC-ACADEMIC AFFAIRS Team</h1>
      <h2>Professionalism. Efficiency. Humility</h2>
      <h1>CLUB FACULTY/CO-FACULTY ADVISOR: APPLICATION FORM</h1>
      <p><strong>Ref No.</strong> PRO-VC/2024-25/CL-F/</p>
    </div>
    <div class="naac-logo">
      <p><img style="height: 100px; width: 700px;" src="./main-qimg-a1057e4a569c3866fc060ce2b9daf38d.jpg" alt="NAAC Logo"></p>
    </div>
  </div>

  <div class="content">
    <h3>General Points:</h3>
    <ol>
      <li><strong>Eligibility:</strong>
        <ol type="a">
          <li>Faculty Advisor: Minimum of 1-year experience in Chandigarh University [Ph.D not required].</li>
          <li>Faculty Co-Advisor: Any Fresher who has recently joined Chandigarh University [Ph.D not required].</li>
        </ol>
      </li>
      <li><strong>Required Documents:</strong> Updated Resume, Achievement proofs, Coordinator-ship proofs, etc.</li>
      <li>Club may be picked up from the attached document [Club List]</li>
    </ol>
    <h3>Club Information:</h3>
    <div class="table-container">
      <table>
        <tr>
          <th>Club Name</th>
          <td>${formData.clubName}</td>
          <th>Applied Date</th>
          <td>${formData.appliedDate}</td>
        </tr>
        <tr>
          <th>Nature of Club</th>
          <td>${formData.natureOfClub}</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    <h3>Faculty Advisor/ Faculty Co-Advisor Details:</h3>
    <div class="table-container">
      <table>
        <tr>
          <th>Position Applied For</th>
          <td>${formData.position}</td>
          <td></td>
          <td></td>
        </tr>
        <!-- More rows here -->
      </table>
    </div>
    <hr>
    <div>
      <p>[For Pro-Vice Chancellor Academic Affairs Office Use Only]</p>
    </div>
    <p>Document Verified</p>
    <p>Registration Code:</p>
    <p>Approved/ Not Approved</
    <p>[Yes/No]</p>
    <p>Signature</p>
    <p>PVC Academic Affairs</p>
  </div>
  <div class="footer">
    <div>Advisor Application</div>
    <div>Version1@cu</div>
    <div>Last Updated on: 27/06/2024</div>
  </div>
</div>
</body>
</html>
  `;
};
