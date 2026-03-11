import styles from "./SocialConnect.module.css";
import {
  FacebookIcon,
  XIcon,
  LinkedInIcon,
  InstagramIcon,
} from "@/assets/icons/icons";

const socialLinks = [
  {
    icon: <FacebookIcon fill="var(--color-bg-primary)" size={28} />,
    url: "https://www.facebook.com/profile.php?id=61587259290137",
  },
  {
    icon: <XIcon fill="var(--color-bg-primary)" size={28} />,
    url: "https://x.com/task_holidays?s=21",
  },
  {
    icon: <LinkedInIcon fill="var(--color-bg-primary)" size={28} />,
    url: "https://www.linkedin.com/in/task-holidays-6172183b2/",
  },
  {
    icon: <InstagramIcon fill="var(--color-bg-primary)" size={28} />,
    url: "https://www.instagram.com/taskholidays/",
  },
];

export default function SocialConnect() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Connect with us on :</h3>

      <div className={styles.icons}>
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
