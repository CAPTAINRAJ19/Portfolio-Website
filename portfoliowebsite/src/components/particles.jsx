import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim"; // Use Slim to keep the bundle small
import { ThemeContext } from '../ThemeContext';
import { useContext } from "react";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the core functionality
    }).then(() => {
      setInit(true);
    });
  }, []);

  

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: theme === "dark" ? "#000000" : "#ffffff", // Dark -> Black, Light -> White
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 200,
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? ["#80ffdb"] : ["#000000"], // Dark -> Teal, Light -> Black
        },
        links: {
          enable: true,
          color: theme === "dark" ? "#80ffdb" : "#000000", // Dark -> Teal, Light -> Black
          distance: 150,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: {
            default: "bounce",
          },
        },
        number: {
          value: 100,
          density: {
            enable: true,
          },
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 3, max: 6 },
        },
      },
      detectRetina: true,
    }),
    [theme] // Recompute when theme changes
  );
  
  return <Particles id={props.id} options={options} />;
};

export default ParticlesComponent;
