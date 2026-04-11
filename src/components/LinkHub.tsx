import { ExternalLink, Globe, MessageCircle, Instagram, Facebook, Youtube, Mail, BookOpen, Heart, Pin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import img1 from "../assets/logo.png"

interface CommunityLink {
  title: string;
  url: string;
  icon: React.ReactNode;
  description?: string;
  iconBg?: string;
}

const communityLinks: CommunityLink[] = [
  {
    title: "Official Website",
    url: "https://eathamozhi-masjid.netlify.app/",
    icon: <Globe className="!size-5" />,
    description: "Visit our Official Website",
  },
  {
    title: "WhatsApp Group",
    url: "https://chat.whatsapp.com/C649nwyeNOcLS9h0cOoWZU?mode=gi_t",
    icon: <MessageCircle className="!size-5" />,
    description: "Join the conversation",
  },
  {
    title: "WhatsApp Channel",
    url: "https://whatsapp.com/channel/0029VaAIPXO9Bb5tR7L89o0n",
    icon: <MessageCircle className="!size-5" />,
    description: "Get updates & announcements",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/masjidety",
    icon: <Instagram className="!size-5" />,
    description: "Follow us for stories & reels",
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/share/1aT3hWLE4c/",
    icon: <Facebook className="!size-5" />,
    description: "Like our page",
  },
  {
    title: "Pinterest",
    url: "https://pin.it/5EdyMJzAN",
    icon: <Pin className="!size-5" />,
    description: "Explore our boards",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@masjidety",
    icon: <Youtube className="!size-5" />,
    description: "Watch videos & tutorials",
  },
  {
    title: "Email Us",
    url: "mailto:masjidety@gmail.com",
    icon: <Mail className="!size-5" />,
    description: "Reach out via Gmail",
  },
  {
    title: "Blood Donor",
    url: "https://eathamozhi-blood-donars.netlify.app/",
    icon: <Heart className="!size-5" />,
    description: "Register as a blood donor",
  },
  {
    title: "Blog",
    url: "https://ety-masjid-blog.vercel.app/",
    icon: <BookOpen className="!size-5" />,
    description: "Read our latest articles",
  },
];

const socialLinks = [
  { icon: <Instagram className="size-5" />, url: "https://instagram.com/masjidety", label: "Instagram" },
  { icon: <Facebook className="size-5" />, url: "https://www.facebook.com/share/1aT3hWLE4c/", label: "Facebook" },
  { icon: <Youtube className="size-5" />, url: "https://youtube.com/@masjidety", label: "YouTube" },
];

export default function LinkHub() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Hero Banner */}
      <div className="w-full h-48 sm:h-56 relative overflow-hidden">
        <img
          src={heroBg}
          alt="Community banner"
          className="w-full h-full object-cover"
          width={1200}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Profile Section */}
      <div className="relative -mt-16 flex flex-col items-center px-4 w-full max-w-md mx-auto">
        <Avatar className="size-28 border-4 border-background shadow-lg ring-2 ring-primary/20">
          <AvatarImage src={img1} alt="Community avatar" />
          <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-bold">
            RIM
          </AvatarFallback>
        </Avatar>

        <h1 className="mt-4 text-2xl font-bold text-foreground tracking-tight">
         Rahmania Ilangar Mandram
        </h1>
        <p className="mt-1 text-muted-foreground text-center text-sm max-w-xs">
        A platform to connect, contribute, and create a better community together ❤️
        </p>

        {/* Links */}
        <div className="mt-8 w-full flex flex-col gap-3">
          {communityLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="linkCard" size="lg" className="h-auto" asChild>
                <span>
                  <span className="flex items-center gap-3">
                    <span className="flex items-center justify-center size-9 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {link.icon}
                    </span>
                    <span className="flex flex-col items-start">
                      <span className="font-semibold text-sm">{link.title}</span>
                      {link.description && (
                        <span className="text-xs text-muted-foreground">{link.description}</span>
                      )}
                    </span>
                  </span>
                  <ExternalLink className="!size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </Button>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center justify-center size-10 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-10 mb-8 text-xs text-muted-foreground">
  © {new Date().getFullYear()} ரஹ்மானியா இளைஞர் மன்றம் • All rights reserved
</p>
      </div>
    </div>
  );
}
