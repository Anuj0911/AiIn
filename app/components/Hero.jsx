import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Video, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine);
    } catch (err) {
      console.error("Error initializing particles:", err);
    }
  }, []);

  return (
    <div className="relative">
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            opacity: 0
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#3e0999"
            },
            links: {
              color: "#6b7280",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.2
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 3 }
            }
          },
          detectRetina: true
        }}
      /> */}
      <div className="absolute inset-0 z-[-10] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      {/* Hero Content */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative z-50 py-24 px-4 mx-auto max-w-7xl"
      >
        <div className="text-center mb-16">
          <motion.div variants={fadeIn}>
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              <Rocket className="mr-2 h-4 w-4" /> New Feature
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-6 leading-tight"
          >
            Your Personal AI <br/> Interview Coach
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Practice with our AI interviewer and get instant feedback to land your dream job.
          </motion.p>
          
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap gap-4 justify-center mt-10"
          >
            <Button className="px-8 py-6 text-lg group bg-gradient-to-r from-primary to-purple-600" size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg" size="lg">
              <Video className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}