import './App.css'
import {FlexiaIcon} from "./components/FlexiaIcon.tsx";
import APPLE from "./assets/apple.png";
import GOOGLEPLAY from "./assets/google-play.png";
import PHONE from "./assets/phone.png";
import AI from "./assets/ai.png";
import DUMBBELL from "./assets/dumbbell.png";
import STRETCH from "./assets/stretch.png";
import TIME from "./assets/time.png";
import {RevealVertical} from "./components/animations/RevealVertical.tsx";
import RevealHorizontal from "./components/animations/RevealHorizontal.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <div className="w-full border-b-1 border-grey py-4">
          <div className="mx-auto container flex items-center justify-center gap-2 px-4 md:px-0">
            <div className="bg-primary flex items-center justify-center h-12 w-12 rounded-2xl">
              <FlexiaIcon className="h-7 w-auto text-white" />
            </div>
            <h1 className="text-xl font-bold">Flexia</h1>
          </div>
        </div>

        <div className="mx-auto container px-4 md:px-0 py-12 md:py-[72px]">
          <div className="flex w-full justify-center">
            <div className="flex flex-col items-center w-full md:w-[45%] gap-[20px] text-center">
              <h1 className="text-5xl md:text-[64px] font-bold md:leading-[64px]">
                Achieve Your Fitness Goals with{" "}
                <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI-Powered
                </span>
                {" "}Training
              </h1>
              <p className="text-placeholder text-xl md:text-2xl">
                Flexia helps you stay active and healthy with customized workout plans powered by AI, designed for any fitness needs.
              </p>
              <div className="flex gap-4 bg-black w-fit px-12 py-[20px] rounded-[8px] text-white hover:scale-95 duration-200 hover:cursor-pointer">
                <h1 className="font-medium">Coming soon</h1>
                <img src={APPLE} alt="Apple App Store" className="h-6 w-auto" />
                <img src={GOOGLEPLAY} alt="Google Play" className="h-6 w-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto container px-4 md:px-0 mb-8 md:mb-12">
          <div className="grid md:grid-cols-3 w-full items-center justify-center">
            <div className="hidden md:flex flex-col justify-between h-full w-full">
              <RevealHorizontal initialX={-200}>
                <div className="flex flex-col w-full h-fit border-1 gap-2 border-grey rounded-[16px] py-8 px-8 items-center justify-center text-center">
                  <img src={AI} alt="AI" className="h-8 w-auto animate-spin" />
                  <strong className="text-xl">AI-Generated Workouts</strong>
                  <p className="text-lg text-placeholder">Personalized plans that adapt to your progress and goals</p>
                </div>
              </RevealHorizontal>
              <RevealHorizontal initialX={-200}>
                <div className="flex flex-col w-full h-fit border-1 gap-2 border-grey rounded-[16px] py-8 px-8 items-center justify-center text-center">
                  <img src={TIME} alt="AI" className="h-8 w-auto" />
                  <strong className="text-xl">Smart Scheduling</strong>
                  <p className="text-lg text-placeholder">Flexible workout times that fit your lifestyle... No excuses!</p>
                </div>
              </RevealHorizontal>
            </div>
            <RevealVertical>
              <div
                className="flex w-full justify-center">
                <img
                  src={PHONE}
                  alt="Flexia demo mobile app"
                  className="w-auto h-[720px]"
                />
              </div>
            </RevealVertical>
            <div className="flex flex-col justify-between h-full w-full gap-4">
              <RevealHorizontal initialX={-200} className="md:hidden">
                <div className="flex flex-col w-full h-fit border-1 gap-2 border-grey rounded-[16px] py-8 px-8 items-center justify-center text-center">
                  <img src={AI} alt="AI" className="h-8 w-auto animate-spin" />
                  <strong className="text-xl">AI-Generated Workouts</strong>
                  <p className="text-lg text-placeholder">Personalized plans that adapt to your progress and goals</p>
                </div>
              </RevealHorizontal>
              <RevealHorizontal className="md:hidden">
                <div className="flex flex-col w-full h-fit border-1 gap-2 border-grey rounded-[16px] py-8 px-8 items-center justify-center text-center">
                  <img src={TIME} alt="AI" className="h-8 w-auto" />
                  <strong className="text-xl">Smart Scheduling</strong>
                  <p className="text-lg text-placeholder">Flexible workout times that fit your lifestyle... No excuses!</p>
                </div>
              </RevealHorizontal>
              <RevealHorizontal className="hidden md:flex">
                <div className="flex flex-col w-full h-fit border-1 gap-2 border-grey rounded-[16px] py-8 px-8 items-center justify-center text-center">
                  <img src={DUMBBELL} alt="AI" className="h-8 w-auto" />
                  <strong className="text-xl">Anywhere, anytime</strong>
                  <p className="text-lg text-placeholder">Customize workout routines that fit your lifestyle whether you're at home, at the gym, or outdoors</p>
                </div>
              </RevealHorizontal>
              <RevealHorizontal initialX={-200} className="md:hidden">
                <div className="flex flex-col w-full h-fit border-1 gap-2 border-grey rounded-[16px] py-8 px-8 items-center justify-center text-center">
                  <img src={DUMBBELL} alt="AI" className="h-8 w-auto" />
                  <strong className="text-xl">Anywhere, anytime</strong>
                  <p className="text-lg text-placeholder">Customize workout routines that fit your lifestyle whether you're at home, at the gym, or outdoors</p>
                </div>
              </RevealHorizontal>
              <RevealHorizontal>
                <div className="flex flex-col w-full h-fit border-1 gap-2 border-grey rounded-[16px] py-8 px-8 items-center justify-center text-center">
                  <img src={STRETCH} alt="AI" className="h-8 w-auto" />
                  <strong className="text-xl">Real-Time Progress Tracking</strong>
                  <p className="text-lg text-placeholder">Start your routine with us and follow your daily workouts with step-by-step exercise guides</p>
                </div>
              </RevealHorizontal>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 py-[72px]">
          <div className="mx-auto container px-4 md:px-0">
            <div className="grid md:flex justify-center md:justify-between gap-8 text-center md:text-left md:gap-4 items-center w-full">
              <a href="" target="_blank" className="hover:scale-95 duration-200 justify-center w-full md:w-fit items-center flex" >
                <FlexiaIcon className="h-[72px] w-auto text-primary" />
              </a>
              <div className="space-y-2">
                <h1 className="font-bold text-lg">Quick Links</h1>
                <a className="hover:text-secondary duration-200" href="" target="_blank">Flexia Fitness Experts (Beta)</a>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-lg">Flexia © 2025</h1>
                <p>
                  Developed by{" "}
                  <a className="hover:text-secondary duration-200" href="https://github.com/aleiva17" target="_blank">Andres Leiva</a>
                  {" "}and{" "}
                  <a className="hover:text-secondary duration-200" href="https://github.com/sayufu" target="_blank">Liliana Fu</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
