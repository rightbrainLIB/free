import { motion , useMotionValue, useMotionValueEvent  } from "framer-motion";
import {useDispatch} from "react-redux";
import { setCurrentTalk } from "@store/talk.js";

const MotionListWrap = ({children}) => {
	const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    }
  };
	return (
		<motion.div variants={list} initial="hidden" animate="visible">
        {children}
      </motion.div>
	)
}

const MotionList = ({sheetOpen, children}) => {
  const y = useMotionValue(0)
  const dispatch = useDispatch();
  
  useMotionValueEvent(y, "animationComplete", () => {
    dispatch(setCurrentTalk(sheetOpen));
  })

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

	return (
    <motion.div style={ sheetOpen ? {y} : null}  variants={item}>{children}</motion.div>
	)
}

export { MotionListWrap, MotionList }