interface ContactIcon {
  dark: string;
  light: string;
}

interface Contact {
  type: "GitHub" | "Phone" | "Email";
  username?: string; // for GitHub
  number?: string;   // for Phone
  address?: string;  // for Email
  icon: ContactIcon;
  url?: string;     
}

const oshinContacts: Contact[] = [
  {
    type: "GitHub",
    username: "JaoShiGitHub",
    icon: { dark: "/images/icons/contacts/github_logo2.png", light: "/images/icons/contacts/github_logo.png" },
    url: "https://github.com/JaoShiGitHub"
  },
  {
    type: "Phone",
    number: "0984876577",
    icon: { dark:  "/images/icons/contacts/phone_icon2.png", light:  "/images/icons/contacts/phone_icon.png" }
  },
  {
    type: "Email",
    address: "oshin.ganjanapas@gmail.com",
    icon: { dark: "/images/icons/contacts/envelope_icon2.png", light: "/images/icons/contacts/envelope_icon.png" }
  }
];

export default oshinContacts;
