import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";


export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_m5yu168",
        "template_j8l89xd",
        formRef.current,
        "Sv8Nb3uEsvOwlOd_7"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: (
              <>
                <span style={{ whiteSpace: "nowrap" }}>
                  Thanks for reaching out — I'll get back to you soon.
                </span>
                <br />
                <span className="font-semibold">— Thanuja</span>
              </>
            ),
          });
          e.target.reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Try again later.",
          });
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-14 px-4 relative bg-gradient-to-br from-secondary/20 via-secondary/30 to-secondary/40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Reach out — I'm always open to new ideas and connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* MAP & SOCIALS */}
          <div className="space-y-8">
            {/* MAP */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/30 bg-card/50 backdrop-blur-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.62045335813!2d80.53608745!3d7.2945437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36636b3be2d8f%3A0x9342d4cc9ed47d6!2sKandy!5e0!3m2!1sen!2slk!4v1623256898710!5m2!1sen!2slk"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map - Kandy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-primary to-purple-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border/30 shadow-xl">
                <h4 className="font-medium mb-6 text-center text-lg">
                  Connect With Me
                </h4>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.linkedin.com/in/thanujaweerasekara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <FaLinkedin className="text-2xl text-blue-500 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/thanuxj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-600/10 hover:from-pink-500/20 hover:to-purple-600/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    <FaInstagram className="text-2xl text-pink-500 group-hover:text-pink-400 transition-colors" />
                  </a>
                  <a
                    href="https://youtube.com/playlist?list=PLnPX3YKx1p_H960objjo4ZezJGT-ng_sK&feature=shared"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 hover:from-red-500/20 hover:to-red-600/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
                  >
                    <FaYoutube className="text-2xl text-red-500 group-hover:text-red-400 transition-colors" />
                  </a>
                  <a
                    href="https://open.spotify.com/user/312ilcb7aui5h2tj4jj5isipxlbu?si=6cd42aeb47804873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-full bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <FaSpotify className="text-2xl text-green-500 group-hover:text-green-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-card/70 backdrop-blur-md p-6 rounded-2xl border border-border/30 shadow-2xl">
              <h3 className="text-xl font-semibold mb-5 text-center">
                Send a Message
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-muted-foreground">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-border/50 bg-background/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:bg-background/50 hover:border-primary/30 placeholder:text-muted-foreground/70"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-muted-foreground">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-border/50 bg-background/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:bg-background/50 hover:border-primary/30 placeholder:text-muted-foreground/70"
                      placeholder="john@example.com"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-muted-foreground">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-border/50 bg-background/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-none transition-all duration-300 hover:bg-background/50 hover:border-primary/30 placeholder:text-muted-foreground/70"
                      placeholder="Hello, I'd like to talk about..."
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2 mt-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};