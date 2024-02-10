import about from "@/components/about";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";


export default function Lottie() {
   return (
      <div className="mt-24 flex flex-col items-center justify-center">
         <motion.div
            className="text-2xl font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
         >
            Syncing your health
         </motion.div>
         <Player src={about} autoplay loop />
      </div>
   )
}