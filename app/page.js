import BlogSection from "@/components/common/BlogSection";
import BtnPrimary from "@/components/common/Btn/BtnPrimary";
import BtnSecondary from "@/components/common/Btn/BtnSecondary";
import FeatureCard from "@/components/common/Card/FeatureCard";
import SolutionCard from "@/components/common/Card/SolutionCard";
import CTASection from "@/components/common/CTASection";
import Heading from "@/components/common/Heading";
import SelectComponent from "@/components/common/SelectComponent";
import TestimonialSection from "@/components/common/TestimonialSection";
import { HomeHero } from "@/components/home/HomeHero";
import HomeLogoCarousel from "@/components/home/HomeLogoCarousel";

export default function Home() {
  return (
    <>
      <HomeHero />

      <HomeLogoCarousel />

      <div className="p-16 py-20 bg-neutral-100 flex flex-col gap-12">
        <Heading
          mainHeading="One solution for all your creative needs"
          paragraph="Future of work with the products designed for high performance & scalability."
          headingClassName='text-neutral-800'
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <SolutionCard
            img="https://framerusercontent.com/images/B9AW397Xk9Am6xL7iv4jr5pNyAE.svg"
            heading="Cloud Computer"
            description="Cloud computing offers scalable, on-demand access to a wide range of computing resources over the internet."
            className="bg-blue-50"
            headingClassName="text-blue-600"
          />
          <SolutionCard
            img="https://framerusercontent.com/images/8jJjtUeeQKF4LwHXum3sYsPFTq8.svg"
            heading="Temporary Workspaces"
            description="Temporary workspaces in the cloud allow users to quickly set up virtual environments for development."
            className="bg-neutral-50"
            headingClassName="text-neutral-900"
          />
          <SolutionCard
            img="https://framerusercontent.com/images/J3Nq1LJBEoBCbCUhLULgMyCvX4.svg"
            heading="Application Streaming"
            description="Application streaming delivers software applications from the cloud directly to end-user devices."
            className="bg-teal-50"
            headingClassName="text-teal-600"
          />
        </div>
      </div>

      <div className="px-16 py-20 flex flex-col gap-12">
        <Heading
          subheading='Features'
          mainHeading="Performance at scale on your device"
          paragraph="Turn any device into a professional workstation with just a click."
          headingClassName='text-violet-800'
          className='items-center text-center'
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FeatureCard
            img="https://framerusercontent.com/images/a9K0yXZdRmHjRrIt4fTmDSuuvGU.png"
            heading="High Quality & Low Latency Streaming"
            description="Vagon Interactive Streaming Protocol provides up to 4K & 60FPS streaming with full-color support and brings zero latency experience with auto-adjusted streaming configurations."
          />
          <FeatureCard
            img="https://framerusercontent.com/images/r1amgOtbD1p7LWKkwy7Bn1y5B8I.png"
            heading="RTX Enabled NVIDIA GPUs"
            description="Vagon Interactive Streaming Protocol provides up to 4K & 60FPS streaming with full-color support and brings zero latency experience with auto-adjusted streaming configurations."
          />
          <FeatureCard
            img="https://framerusercontent.com/images/5XOj1wRsFyjf46siOnnnNl2wanQ.png"
            heading="Worldwide Coverage"
            description="Vagon Interactive Streaming Protocol provides up to 4K & 60FPS streaming with full-color support and brings zero latency experience with auto-adjusted streaming configurations."
          />
          <FeatureCard
            img="https://framerusercontent.com/images/QUnzsnRGEC8w0TJZCqweW2ZnR8.png?scale-down-to=2048"
            heading="Encrypted Connection & Isolated Environments"
            description="Vagon Interactive Streaming Protocol provides up to 4K & 60FPS streaming with full-color support and brings zero latency experience with auto-adjusted streaming configurations."
          />
          <FeatureCard
            img="https://framerusercontent.com/images/BAOfYoJ80xhcOisSbxsns6tGs.png?scale-down-to=2048"
            heading="Use Any Device as a Workstation"
            description="Vagon Interactive Streaming Protocol provides up to 4K & 60FPS streaming with full-color support and brings zero latency experience with auto-adjusted streaming configurations."
          />
        </div>
      </div>

      <div className="px-16 py-20 flex flex-col gap-12 bg-blue-50/50">
        <Heading
          subheading='cloud computer'
          mainHeading="Remote Desktop for Creatives, Gamers & Engineers"
          paragraph="Run graphic-intensive apps with latest generation hardware, step up your workflow with enhanced features."
          headingClassName='text-blue-600'
          className='items-center text-center'
        />

        <div className="flex flex-col gap-20 py-8">
          <div className="flex flex-col sm:flex-row gap-16 items-center">
            <div className="rounded-xl overflow-hidden max-h-96 w-1/2">
              <img src="https://framerusercontent.com/images/CzHzAumYDkDHSK4dHkLyNr9H59s.png?scale-down-to=1024" alt="" className="w-full object-cover" />
            </div>
            <div className="flex flex-col gap-8 w-1/2">
              <h3 className="text-3xl font-semibold text-neutral-900">Personal remote desktop just for you, and your creative needs</h3>
              <div className="flex flex-col gap-6">
                <p>Vagon Cloud Computer makes remote desktop experiences accessible for everyone with 4K resolution and 60 FPS streaming experience.</p>
                <p>✓ Secure, isolated and personal workspace</p>
                <p>✓ Ability to configure computer hardware on the go</p>
                <p>✓ Mobile & tablet device support, connect from any device</p>
              </div>
              <div className="flex items-center gap-4">
                <BtnPrimary text={'Try Vagon Computer Now'} />
                <BtnSecondary text={'Explore All Features'} />
              </div>
            </div>
          </div>

          <SelectComponent selectedBgColor="bg-blue-100" selectedTextColor="text-blue-600" />
        </div>
      </div>

      <TestimonialSection />

      <div className="py-16 px-6">
        <div className="px-16 py-20 flex flex-col gap-12 bg-neutral-50/50 w-full rounded-xl">
          <Heading
            subheading='cloud computer'
            mainHeading="Remote Desktop for Creatives, Gamers & Engineers"
            paragraph="Run graphic-intensive apps with latest generation hardware, step up your workflow with enhanced features."
            headingClassName='text-neutral-900'
            className='items-center text-center'
          />

          <div className="flex flex-col gap-20 py-8">
            <div className="flex flex-col sm:flex-row gap-16 items-center">
              <div className="rounded-xl overflow-hidden max-h-96 w-1/2">
                <img src="https://framerusercontent.com/images/CzHzAumYDkDHSK4dHkLyNr9H59s.png?scale-down-to=1024" alt="" className="w-full object-cover" />
              </div>
              <div className="flex flex-col gap-8 w-1/2">
                <h3 className="text-3xl font-semibold text-neutral-900">Personal remote desktop just for you, and your creative needs</h3>
                <div className="flex flex-col gap-6">
                  <p>Vagon Cloud Computer makes remote desktop experiences accessible for everyone with 4K resolution and 60 FPS streaming experience.</p>
                  <p>✓ Secure, isolated and personal workspace</p>
                  <p>✓ Ability to configure computer hardware on the go</p>
                  <p>✓ Mobile & tablet device support, connect from any device</p>
                </div>
                <div className="flex items-center gap-4">
                  <BtnPrimary text={'Try Vagon Computer Now'} />
                  <BtnSecondary text={'Explore All Features'} />
                </div>
              </div>
            </div>

            <SelectComponent selectedBgColor="bg-neutral-200" selectedTextColor="text-neutral-900" />
          </div>
        </div>
      </div>

      <div className="py-16 px-6 bg-neutral-50/50">
        <div className="px-16 py-20 flex flex-col gap-12 bg-teal-50/50 w-full rounded-xl">
          <Heading
            subheading='cloud computer'
            mainHeading="Remote Desktop for Creatives, Gamers & Engineers"
            paragraph="Run graphic-intensive apps with latest generation hardware, step up your workflow with enhanced features."
            headingClassName='text-teal-600'
            className='items-center text-center'
          />

          <div className="flex flex-col gap-20 py-8">
            <div className="flex flex-col sm:flex-row gap-16 items-center">
              <div className="rounded-xl overflow-hidden max-h-96 w-1/2">
                <img src="https://framerusercontent.com/images/CzHzAumYDkDHSK4dHkLyNr9H59s.png?scale-down-to=1024" alt="" className="w-full object-cover" />
              </div>
              <div className="flex flex-col gap-8 w-1/2">
                <h3 className="text-3xl font-semibold text-neutral-900">Personal remote desktop just for you, and your creative needs</h3>
                <div className="flex flex-col gap-6">
                  <p>Vagon Cloud Computer makes remote desktop experiences accessible for everyone with 4K resolution and 60 FPS streaming experience.</p>
                  <p>✓ Secure, isolated and personal workspace</p>
                  <p>✓ Ability to configure computer hardware on the go</p>
                  <p>✓ Mobile & tablet device support, connect from any device</p>
                </div>
                <div className="flex items-center gap-4">
                  <BtnPrimary text={'Try Vagon Computer Now'} />
                  <BtnSecondary text={'Explore All Features'} />
                </div>
              </div>
            </div>

            <SelectComponent selectedBgColor="bg-teal-100" selectedTextColor="text-teal-600" />
          </div>
        </div>
      </div>

      <CTASection />

      <BlogSection />
    </>
  );
}
