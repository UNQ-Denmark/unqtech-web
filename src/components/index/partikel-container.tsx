import React, { Children, PureComponent } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export class ParticlesContainer extends PureComponent<unknown> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  }

  render() {
    return <Particles style={{position: 'unset'}} options={{
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
              parallax: {
                enable: true,
                force: 100,
                smooth: 50
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 500,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 1, max: 7 },
          },
        },
        detectRetina: true}} init={this.customInit}>{this.props.children}</Particles>;
  }
}