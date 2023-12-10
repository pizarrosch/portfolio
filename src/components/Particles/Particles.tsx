import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import React, {useEffect, useState} from "react";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

const ParticlesComponent = () => {

    const [ init, setInit ] = useState(false);

    const activationStatus = useAppSelector((state: RootState) => state.activationsStatus);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadFull(engine);
            //await loadBasic(engine);
        })
            .then(() => {
                setInit(true);
            })
    }, [])

    return (
        init && <Particles options={{
            background: {
                color: {
                    value: "#ffffff",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: activationStatus.active,
                        mode: "push",
                    },
                    onHover: {
                        enable: activationStatus.active,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#989898",
                },
                links: {
                    color: "#989898",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: activationStatus.active,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 150,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }} />
    )
}

export default ParticlesComponent;