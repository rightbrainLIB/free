import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useDispatch } from "react-redux";
import { setCurrentTalk } from "@store/talk.js";

const MotionListWrap = ({ children }) => {
	const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.7,
      },
    }
  };
  function onAnimationStart(){
    var hasVScroll = document.body.scrollHeight > document.body.clientHeight;
    if(hasVScroll) {
      window.scrollTo({top: document.body.scrollHeight - 50, behavior: 'smooth'})
    }
  }
	return (
		<motion.div onAnimationStart={onAnimationStart} variants={list} initial="hidden" animate="visible">
      {children}
    </motion.div>
	)
}

const MotionList = ({sheetOpen, children}) => {
  const y = useMotionValue(0)
  const dispatch = useDispatch();
  
  useMotionValueEvent(y, "animationComplete", () => {
    if(sheetOpen) {
      dispatch(setCurrentTalk(sheetOpen));
    }
  })

  const item = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

	return (
    <motion.div  style={{y}}  variants={item}>{children}</motion.div>
	)
}

export { MotionListWrap, MotionList }