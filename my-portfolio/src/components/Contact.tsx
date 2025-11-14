// import { Mail, Phone, Github, Linkedin, Send, Loader2, MessageCircle } from "lucide-react";
// import { Card } from "./ui/card";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { Button } from "./ui/button";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";
// import RevealOnScroll from "./RevealOnScroll";
// import SectionHeading from "./SectionHeading";

// const contactSchema = z.object({
//   name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
//   email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
//   message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
// })

// type ContactFormData = z.infer<typeof contactSchema>;

// const Contact = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<ContactFormData>({
//     resolver: zodResolver(contactSchema),
//   });

//   const onSubmit = async (data: ContactFormData) => {
//     setIsSubmitting(true);
    
//     try {
//       // Simulate API call - In production, this would send to a backend
//       await new Promise((resolve) => setTimeout(resolve, 1500));
      
//       toast({
//         title: "Message sent successfully!",
//         description: "Thank you for reaching out. I'll get back to you soon.",
//       });
      
//       reset();
//     } catch (error) {
//       toast({
//         title: "Failed to send message",
//         description: "Please try again or contact me directly via email.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-secondary/30">
//       <div className="container mx-auto px-4">
//         <RevealOnScroll direction="fade">
//           <SectionHeading 
//             icon={<MessageCircle size={32} />}
//             subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!"
//           >
//             Get in Touch
//           </SectionHeading>
//         </RevealOnScroll>

//         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
//           <RevealOnScroll direction="left">
//             <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
//             <div className="flex items-center gap-4 mb-4">
//               <div className="p-3 bg-primary/10 rounded-lg">
//                 <Mail className="text-primary" size={24} />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-foreground">Email</h3>
//                 <a
//                   href="mailto:gmalathi2005@gmail.com"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   gmalathi2005@gmail.com
//                 </a>
//               </div>
//             </div>
//           </Card>
//           </RevealOnScroll>

//           <RevealOnScroll direction="right" delay={100}>
//             <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
//             <div className="flex items-center gap-4 mb-4">
//               <div className="p-3 bg-primary/10 rounded-lg">
//                 <Phone className="text-primary" size={24} />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-foreground">Phone</h3>
//                 <a
//                   href="tel:+917092436653"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   +91 7092436653
//                 </a>
//               </div>
//             </div>
//           </Card>
//           </RevealOnScroll>

//           <RevealOnScroll direction="left" delay={200}>
//             <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
//             <div className="flex items-center gap-4 mb-4">
//               <div className="p-3 bg-primary/10 rounded-lg">
//                 <Github className="text-primary" size={24} />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-foreground">GitHub</h3>
//                 <a
//                   href="https://github.com/Malathi-gokila"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   github.com/Malathi-gokila
//                 </a>
//               </div>
//             </div>
//           </Card>
//           </RevealOnScroll>

//           <RevealOnScroll direction="right" delay={300}>
//             <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
//             <div className="flex items-center gap-4 mb-4">
//               <div className="p-3 bg-primary/10 rounded-lg">
//                 <Linkedin className="text-primary" size={24} />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-foreground">LinkedIn</h3>
//                 <a
//                   href="https://www.linkedin.com/in/malathi-gokila13/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   linkedin.com/in/malathi-gokila13
//                 </a>
//               </div>
//             </div>
//           </Card>
//           </RevealOnScroll>
//         </div>

//         <RevealOnScroll direction="up" delay={400}>
//           <Card className="mt-12 max-w-2xl mx-auto p-8 bg-card border-border">
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div className="space-y-2">
//               <label htmlFor="name" className="text-sm font-medium text-foreground">
//                 Name
//               </label>
//               <Input
//                 id="name"
//                 {...register("name")}
//                 placeholder="Your name"
//                 className={`transition-all duration-300 focus:scale-[1.02] ${
//                   errors.name ? "border-destructive focus-visible:ring-destructive" : ""
//                 }`}
//               />
//               {errors.name && (
//                 <p className="text-sm text-destructive animate-slide-up">{errors.name.message}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="email" className="text-sm font-medium text-foreground">
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 {...register("email")}
//                 placeholder="your.email@example.com"
//                 className={`transition-all duration-300 focus:scale-[1.02] ${
//                   errors.email ? "border-destructive focus-visible:ring-destructive" : ""
//                 }`}
//               />
//               {errors.email && (
//                 <p className="text-sm text-destructive animate-slide-up">{errors.email.message}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="message" className="text-sm font-medium text-foreground">
//                 Message
//               </label>
//               <Textarea
//                 id="message"
//                 {...register("message")}
//                 placeholder="Your message..."
//                 rows={5}
//                 className={`transition-all duration-300 focus:scale-[1.02] resize-none ${
//                   errors.message ? "border-destructive focus-visible:ring-destructive" : ""
//                 }`}
//               />
//               {errors.message && (
//                 <p className="text-sm text-destructive animate-slide-up">{errors.message.message}</p>
//               )}
//             </div>

//             <Button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full transition-all duration-300 hover:shadow-glow"
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <Send className="mr-2 h-4 w-4" />
//                   Send Message
//                 </>
//               )}
//             </Button>
//           </form>
//         </Card>
//         </RevealOnScroll>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { Mail, Phone, Github, Linkedin, Send, Loader2, MessageCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import emailjs from "emailjs-com";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,    
          email: data.email,  
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <RevealOnScroll direction="fade">
          <SectionHeading
            icon={<MessageCircle size={32} />}
            subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!"
          >
            Get in Touch
          </SectionHeading>
        </RevealOnScroll>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Contact info cards omitted for brevity */}
        </div>

        <RevealOnScroll direction="up" delay={400}>
          <Card className="mt-12 max-w-2xl mx-auto p-8 bg-card border-border">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Your name"
                  className={`transition-all duration-300 focus:scale-[1.02] ${
                    errors.name ? "border-destructive focus-visible:ring-destructive" : ""
                  }`}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="your.email@example.com"
                  className={`transition-all duration-300 focus:scale-[1.02] ${
                    errors.email ? "border-destructive focus-visible:ring-destructive" : ""
                  }`}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Your message..."
                  rows={5}
                  className={`transition-all duration-300 focus:scale-[1.02] resize-none ${
                    errors.message ? "border-destructive focus-visible:ring-destructive" : ""
                  }`}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full transition-all duration-300 hover:shadow-glow"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;