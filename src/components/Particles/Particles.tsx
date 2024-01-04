import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import React, {useEffect, useState} from "react";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

const ParticlesComponent = () => {

    const [ init, setInit ] = useState(false);

    const activationStatus = useAppSelector((state: RootState) => state.activationsStatus);
    const actualTheme = useAppSelector((state: RootState) => state.theme);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        })
            .then(() => {
                setInit(true);
            })
    }, [])

    return (
        init && <Particles options={{
            background: {
                color: {
                    value: actualTheme.theme === 'light' ? "#F6F7F9" : "#404854",
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
                    value: actualTheme.theme === 'light' ? "#989898" : "#F6F7F9",
                },
                links: {
                    color: actualTheme.theme === 'light' ? "#989898" : "#F6F7F9",
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