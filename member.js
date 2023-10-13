function skillsMember() {
  var member = document.querySelector(".member");
  var memberInfo = document.querySelector(".member-info");
  var memberSkills = document.querySelector(".member-skills");
  var memberContact = document.querySelector(".member-contact");
  var memberSkillsButton = document.querySelector(".member-skills-button");
  var memberContactButton = document.querySelector(".member-contact-button");
  var memberInfoButton = document.querySelector(".member-info-button");

  memberSkillsButton.addEventListener("click", function() {
    memberInfo.classList.remove("member-info-active");
    memberSkills.classList.add("member-skills-active");
    memberContact.classList.remove("member-contact-active");
    memberInfoButton.classList.remove("member-info-button-active");
    memberSkillsButton.classList.add("member-skills-button-active");
    memberContactButton.classList.remove("member-contact-button-active");
  });

  memberInfoButton.addEventListener("click", function() {
    memberInfo.classList.add("member-info-active");
    memberSkills.classList.remove("member-skills-active");
    memberContact.classList.remove("member-contact-active");
    memberInfoButton.classList.add("member-info-button-active");
    memberSkillsButton.classList.remove("member-skills-button-active");
    memberContactButton.classList.remove("member-contact-button-active");
  });

  memberContactButton.addEventListener("click", function() {
    memberInfo.classList.remove("member-info-active");
    memberSkills.classList.remove("member-skills-active");
    memberContact.classList.add("member-contact-active");
    memberInfoButton.classList.remove("member-info-button-active");
    memberSkillsButton.classList.remove("member-skills-button-active");
    memberContactButton.classList.add("member-contact-button-active");
  });
}

//ctrl+enter to view all suggestions