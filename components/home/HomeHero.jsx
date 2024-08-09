import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import BtnPrimary from "../common/Btn/BtnPrimary";
import BtnSecondary from "../common/Btn/BtnSecondary";
import BtnIcon from "../common/Btn/BtnIcon";
import { AppWindowMac, CloudCog, Workflow } from "lucide-react";

export function HomeHero() {
    return (
        <BackgroundGradientAnimation>
            <div className="relative z-10 flex flex-col gap-16 p-16 text-neutral-900">
                <div className="flex flex-col gap-4 pt-10">
                    <h1 className="text-6xl max-w-2xl font-bold">Run applications on any device, anywhere.</h1>
                    <div className="flex items-center justify-between">
                        <p>Vagon brings the power of the cloud to your browser.</p>
                        <div className="flex items-center gap-4">
                            <BtnPrimary text={'Try Vagon Now'} />
                            <BtnSecondary text={'Explore Solutions'} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 relative">
                    <div className="flex items-center gap-4">
                        <BtnIcon icon={<CloudCog size={18} />} text={'Cloud Computer'} variant={'blue'} active={true} />
                        <BtnIcon icon={<Workflow size={18} />} text={'Team Workspace'} variant={'neutral'} />
                        <BtnIcon icon={<AppWindowMac size={18} />} text={'Application Streaming'} variant={'teal'} />
                    </div>
                    <div className="flex flex-col gap-2 p-2 rounded bg-neutral-100/40 border border-neutral-100">
                        <div className="flex gap-4 items-center px-2">
                            <div className="flex gap-2 items-center">
                                <span className="w-3 h-3 rounded-full bg-white"></span>
                                <span className="w-3 h-3 rounded-full bg-white"></span>
                                <span className="w-3 h-3 rounded-full bg-white"></span>
                            </div>
                            <span className="px-6 py-1.5 bg-white text-sm border border-neutral-100 rounded">TEAMS - Application Streaming with Global Coverage</span>
                        </div>
                        <div className="w-full h-full rounded">
                            <img className="w-full h-full object-cover rounded" src="https://images.unsplash.com/photo-1718011087751-e82f1792aa32?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundGradientAnimation>
    );
}
