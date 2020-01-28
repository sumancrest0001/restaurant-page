export default function addContact() {
  const addContactSection = `<div class="contact-section">
  <h4 align="center" class="contact-title">Send us your queries</h4>
  <form>Name:<br /><input type="text" name="name" placeholder="Enter your name" />
  <br />Email:<br /><input type="email" name="email" placeholder="Enter your Email" />
  <br />Enquiry:<br /><input type="textarea" name="enquiry" placeholder= "Write your Enquiry"/>
  <br /><input type="submit" value="Contact Us" /></form></div>`;
  return addContactSection;
}
