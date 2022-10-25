import { gsap } from "gsap"

const gsapTransition = ({ onComplete, pageEnter }) => {
  // // prettier-ignore
  // console.log("-\n--\n onComplete \n >", onComplete, "\n--\n-") // REMOVE_ME: remove when done!
  // // prettier-ignore
  // console.log("-\n--\n pageEnter \n >", pageEnter, "\n--\n-") // REMOVE_ME: remove when done!
  // console.log('-------------------------------------------------');
  const tl = gsap.timeline({ onComplete })
  // prettier-ignore
  tl.to(".pageTransitionWrapper", durationTransitionForWrapper, { autoAlpha: 0 }, 0)
    .to(".pageTransitionOverlay", durationTransitionForOverlay, { autoAlpha: 1 }, 0.3)

  return pageEnter ? tl.reverse(0) : tl.play()
}

// EXPORTS
export const durationTransitionForOverlay = 0.6
export const durationTransitionForWrapper = 0.6

export const enterPageWithBasicTransition = () => {
  gsapTransition({ pageEnter: true })
}

export const leavePageWithBasicTransition = next => {
  gsapTransition({ onComplete: next })
}
