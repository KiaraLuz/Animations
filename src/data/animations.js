export const animations = [
  {
    name: "Fade In",
    slug: "fade-in",
    codeTailwind: `{
  animation: {
    "fade-in": "fade-in 0.6s ease-in",
  },
  keyframes: {
    "fade-in": {
      "0%": {
        "opacity": "0"
      },
      "100%": {
        "opacity": "1"
      },
    },
  }
}`,
    codeCSS: `.animation-fade-in {
  animation: fade-in 0.6s ease-in;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`,
  },
  {
    name: "Fade Out",
    slug: "fade-out",
    codeTailwind: `{
  animation: {
    "fade-out": "fade-out 0.6s ease-out",
  },
  keyframes: {
    "fade-out": {
      "0%": {
        "opacity": "0"
      },
      "100%": {
        "opacity": "1"
      },
    },
  }
}`,
    codeCSS: `.animation-fade-out {
  animation: fade-out 0.6s ease-out;
}

@keyframes fade-out {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`,
  },
  {
    name: "Fade In Up",
    slug: "fade-in-up",
    codeTailwind: `{
  animation: {
    "fade-in-up": "fade-in-up 0.6s ease-in-out",
  },
  keyframes: {
    "fade-in-up": {
      "0%": {
        opacity: "0",
        transform: "translateY(20px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-fade-in-up {
  animation: fade-in-up 0.6s ease-in-out;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
  },
  {
    name: "Fade In Down",
    slug: "fade-in-down",
    codeTailwind: `{
  animation: {
  "fade-in-down": "fade-in-down 0.6s ease-in-out",
  },
  keyframes: {
    "fade-in-down": {
      "0%": {
        opacity: "0",
        transform: "translateY(-20px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-fade-in-down {
  animation: fade-in-down 0.6s ease-in-out;
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
  },
  {
    name: "Fade In Left",
    slug: "fade-in-left",
    codeTailwind: `{
  animation: {
    "fade-in-left": "fade-in-left 0.6s ease-in-out",
  },
  keyframes: {
    "fade-in-left": {
      "0%": {
        opacity: "0",
        transform: "translateX(20px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateX(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-fade-in-left {
  animation: fade-in-left 0.6s ease-in-out;
}

@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}`,
  },
  {
    name: "Fade In Right",
    slug: "fade-in-right",
    codeTailwind: `{
  animation: {
    "fade-in-right": "fade-in-right 0.6s ease-out",
  },
  keyframes: {
    "fade-in-right": {
      "0%": {
        opacity: "0",
        transform: "translateX(-20px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateX(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-fade-in-right {
  animation: fade-in-right 0.6s ease-out;
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}`,
  },
  {
    name: "Fade Out Up",
    slug: "fade-out-up",
    codeTailwind: `{
  animation: {
    "fade-out-up": "fade-out-up 0.6s ease-out",
  },
  keyframes: {
    "fade-out-up": {
      "0%": {
        opacity: "1",
        transform: "translateY(0)",
      },
      "100%": {
        opacity: "0",
        transform: "translateY(-20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-fade-out-up {
  animation: fade-out-up 0.6s ease-out;
}

@keyframes fade-out-up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}`,
  },
  {
    name: "Fade Out Down",
    slug: "fade-out-down",
    codeTailwind: `{
  animation: {
    "fade-out-down": "fade-out-down 0.6s ease-out",
  },
  keyframes: {
    "fade-out-down": {
      "0%": {
        opacity: "1",
        transform: "translateY(0)",
      },
      "100%": {
        opacity: "0",
        transform: "translateY(20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-fade-out-down {
  animation: fade-out-down 0.6s ease-out;
}

@keyframes fade-out-down {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}`,
  },
  {
    name: "Fade Out Left",
    slug: "fade-out-left",
    codeTailwind: `{
  animation: {
    "fade-out-left": "fade-out-left 0.6s ease-out",
  },
  keyframes: {
    "fade-out-left": {
      "0%": {
        opacity: "1",
        transform: "translateX(0)",
      },
      "100%": {
        opacity: "0",
        transform: "translateX(-20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-fade-out-left {
  animation: fade-out-left 0.6s ease-out;
}

@keyframes fade-out-left {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
}`,
  },
  {
    name: "Fade Out Right",
    slug: "fade-out-right",
    codeTailwind: `{
  animation: {
    "fade-out-right": "fade-out-right 0.6s ease-out",
  },
  keyframes: {
    "fade-out-right": {
      "0%": {
        opacity: "1",
        transform: "translateX(0)",
      },
      "100%": {
        opacity: "0",
        transform: "translateX(20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-fade-out-right {
  animation: fade-out-right 0.6s ease-out;
}

@keyframes fade-out-right {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
}`,
  },
  {
    name: "Slide In Top",
    slug: "slide-in-top",
    codeTailwind: `{
  animation: {
    "slide-in-top": "slide-in-top 0.6s ease-out",
  },
  keyframes: {
    "slide-in-top": {
      "0%": {
        transform: "translateY(-20px)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-in-top {
  animation: slide-in-top 0.6s ease-out;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}`,
  },
  {
    name: "Slide In Bottom",
    slug: "slide-in-bottom",
    codeTailwind: `{
  animation: {
    "slide-in-bottom": "slide-in-bottom 0.6s ease-out",
  },
  keyframes: {
    "slide-in-bottom": {
      "0%": {
        transform: "translateY(20px)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-in-bottom {
  animation: slide-in-bottom 0.6s ease-out;
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}`,
  },
  {
    name: "Slide In Left",
    slug: "slide-in-left",
    codeTailwind: `{
  animation: {
    "slide-in-left": "slide-in-left 0.6s ease-out",
  },
  keyframes: {
    "slide-in-left": {
      "0%": {
        transform: "translateX(-20px)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-in-left {
  animation: slide-in-left 0.6s ease-out;
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0);
  }
}`,
  },
  {
    name: "Slide In Right",
    slug: "slide-in-right",
    codeTailwind: `{
  animation: {
    "slide-in-right": "slide-in-right 0.6s ease-out",
  },
  keyframes: {
    "slide-in-right": {
      "0%": {
        transform: "translateX(20px)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-in-right {
  animation: slide-in-right 0.6s ease-out;
}

@keyframes slide-in-right {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}`,
  },
  {
    name: "Slide Out Top",
    slug: "slide-out-top",
    codeTailwind: `{
  animation: {
    "slide-out-top": "slide-out-top 0.6s ease-out",
  },
  keyframes: {
    "slide-out-top": {
      "0%": {
        transform: "translateY(0)",
      },
      "100%": {
        transform: "translateY(-20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-out-top {
  animation: slide-out-top 0.6s ease-out;
}

@keyframes slide-out-top {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}`,
  },
  {
    name: "Slide Out Bottom",
    slug: "slide-out-bottom",
    codeTailwind: `{
  animation: {
    "slide-out-bottom": "slide-out-bottom 0.6s ease-out",
  },
  keyframes: {
    "slide-out-bottom": {
      "0%": {
        transform: "translateY(0)",
      },
      "100%": {
        transform: "translateY(20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-out-bottom {
  animation: slide-out-bottom 0.6s ease-out;
}

@keyframes slide-out-bottom {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
}`,
  },
  {
    name: "Slide Out Left",
    slug: "slide-out-left",
    codeTailwind: `{
  animation: {
    "slide-out-left": "slide-out-left 0.6s ease-out",
  },
  keyframes: {
    "slide-out-left": {
      "0%": {
        transform: "translateX(0)",
      },
      "100%": {
        transform: "translateX(-20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-out-left {
  animation: slide-out-left 0.6s ease-out;
}

@keyframes slide-out-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-20px);
  }
}`,
  },
  {
    name: "Slide Out Right",
    slug: "slide-out-right",
    codeTailwind: `{
  animation: {
    "slide-out-right": "slide-out-right 0.6s ease-out",
  },
  keyframes: {
    "slide-out-right": {
      "0%": {
        transform: "translateX(0)",
      },
      "100%": {
        transform: "translateX(20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-out-right {
  animation: slide-out-right 0.6s ease-out;
}

@keyframes slide-out-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(20px);
  }
}`,
  },
  {
    name: "Slide Rotate In",
    slug: "slide-rotate-in",
    codeTailwind: `{
  animation: {
    "slide-rotate-in": "slide-rotate-in 0.6s ease-out",
  },
  keyframes: {
    "slide-rotate-in": {
      "0%": {
        opacity: "0",
        transform: "translateX(-20px) rotate(-90deg)",
      },
      "100%": {
        opacity: "1",
        transform: "translateX(0) rotate(0deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-rotate-in {
  animation: slide-rotate-in 0.6s ease-out;
}

@keyframes slide-rotate-in {
  0% {
    opacity: 0;
    transform: translateX(-20px) rotate(-90deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
}`,
  },
  {
    name: "Slide Rotate Out",
    slug: "slide-rotate-out",
    codeTailwind: `{
  animation: {
    "slide-rotate-out": "slide-rotate-out 0.6s ease-out",
  },
  keyframes: {
    "slide-rotate-out": {
      "0%": {
        opacity: "1",
        transform: "translateX(0) rotate(0deg)",
      },
      "100%": {
        opacity: "0",
        transform: "translateX(20px) rotate(90deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-rotate-out {
  animation: slide-rotate-out 0.6s ease-out;
}

@keyframes slide-rotate-out {
  0% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateX(20px) rotate(90deg);
  }
}`,
  },
  {
    name: "Zoom In",
    slug: "zoom-in",
    codeTailwind: `{
  animation: {
    "zoom-in": "zoom-in 0.6s ease-out",
  },
  keyframes: {
    "zoom-in": {
      "0%": {
        opacity: "0",
        transform: "scale(.5)",
      },
      "100%": {
        opacity: "1",
        transform: "scale(1)",
      },
    },
  }
}`,
    codeCSS: `.animation-zoom-in {
  animation: zoom-in 0.6s ease-out;
}

@@keyframes zoom-in {
  0% {
    opacity: 0;
    transform: scale(.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`,
  },
  {
    name: "Zoom Out",
    slug: "zoom-out",
    codeTailwind: `{
  animation: {
    "zoom-out": "zoom-out 0.6s ease-out",
  },
  keyframes: {
    "zoom-out": {
      "0%": {
        opacity: "1",
        transform: "scale(1)",
      },
      "100%": {
        opacity: "0",
        transform: "scale(.5)",
      },
    },
  }
}`,
    codeCSS: `.animation-zoom-out {
  animation: zoom-out 0.6s ease-out;
}

@keyframes zoom-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(.5);
  }
}`,
  },
  {
    name: "Rotate 90",
    slug: "rotate-90",
    codeTailwind: `{
  animation: {
    "rotate-90": "rotate-90 1s ease-in-out",
  },
  keyframes: {
    "rotate-90": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(90deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-rotate-90 {
  animation: rotate-90 1s ease-in-out;
}

@keyframes rotate-90 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}`,
  },
  {
    name: "Rotate 180",
    slug: "rotate-180",
    codeTailwind: `{
  animation: {
    "rotate-180": "rotate-180 1s ease-in-out",
  },
  keyframes: {
    "rotate-180": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(180deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-rotate-180 {
  animation: rotate-180 1s ease-in-out;
}

@keyframes rotate-180 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}`,
  },
  {
    name: "Rotate 360",
    slug: "rotate-360",
    codeTailwind: `{
  animation: {
    "rotate-360": "rotate-360 1s linear",
  },
  keyframes: {
    "rotate-360": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-rotate-360 {
  animation: rotate-360 1s linear;
}

@keyframes rotate-360 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
  },
  {
    name: "Rotate In",
    slug: "rotate-in",
    codeTailwind: `{
  animation: {
    "rotate-in": "rotate-in 0.6s ease-out",
  },
  keyframes: {
    "rotate-in": {
      "0%": {
        opacity: "0",
        transform: "rotate(-90deg)",
      },
      "100%": {
        opacity: "1",
        transform: "rotate(0deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-rotate-in {
  animation: rotate-in 0.6s ease-out;
}

@keyframes rotate-in {
  0% {
    opacity: 0;
    transform: rotate(-90deg);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg);
  }
}`,
  },
  {
    name: "Rotate Out",
    slug: "rotate-out",
    codeTailwind: `{
  animation: {
    "rotate-out": "rotate-out 0.6s ease-out",
  },
  keyframes: {
    "rotate-out": {
      "0%": {
        opacity: "1",
        transform: "rotate(0deg)",
      },
      "100%": {
        opacity: "0",
        transform: "rotate(90deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-rotate-out {
  animation: rotate-out 0.6s ease-out;
}

@keyframes rotate-out {
  0% {
    opacity: 1;
    transform: rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: rotate(90deg);
  }
}`,
  },
  {
    name: "Spin Clockwise",
    slug: "spin-clockwise",
    codeTailwind: `{
  animation: {
    "spin-clockwise": "spin-clockwise 0.6s linear",
  },
  keyframes: {
    "spin-clockwise": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-spin-clockwise {
  animation: spin-clockwise 0.6s linear;
}

@keyframes spin-clockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
  },
  {
    name: "Spin Counter-Clockwise",
    slug: "spin-counter-clockwise",
    codeTailwind: `{
  animation: {
    "spin-counter-clockwise": "spin-counter-clockwise 0.6s linear",
  },
  keyframes: {
    "spin-counter-clockwise": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(-360deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-spin-counter-clockwise {
  animation: spin-counter-clockwise 0.6s linear;
}

@keyframes spin-counter-clockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}`,
  },
  {
    name: "Flip Horizontal",
    slug: "flip-horizontal",
    codeTailwind: `{
  animation: {
    "flip-horizontal": "flip-horizontal 1s ease-in-out",
  },
  keyframes: {
    "flip-horizontal": {
      "0%": {
        transform: "rotateY(0deg)",
      },
      "100%": {
        transform: "rotateY(180deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-flip-horizontal {
  animation: flip-horizontal 1s ease-in-out;
}

@keyframes flip-horizontal {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}`,
  },
  {
    name: "Flip Vertical",
    slug: "flip-vertical",
    codeTailwind: `{
  animation: {
    "flip-vertical": "flip-vertical 1s ease-in-out",
  },
  keyframes: {
    "flip-vertical": {
      "0%": {
        transform: "rotateX(0deg)",
      },
      "100%": {
        transform: "rotateX(180deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-flip-vertical {
  animation: flip-vertical 1s ease-in-out;
}

@keyframes flip-vertical {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(180deg);
  }
}`,
  },
  {
    name: "Flip X",
    slug: "flip-x",
    codeTailwind: `{
  animation: {
    "flip-x": "flip-x 0.6s ease-out",
  },
  keyframes: {
    "flip-x": {
      "0%": {
        transform: "scaleX(1)",
      },
      "50%": {
        transform: "scaleX(-1)",
      },
      "100%": {
        transform: "scaleX(1)",
      },
    },
  }
}`,
    codeCSS: `.animation-flip-x {
  animation: flip-x 0.6s ease-out;
}

@keyframes flip-x {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(-1);
  }
  100% {
    transform: scaleX(1);
  }
}`,
  },
  {
    name: "Flip Y",
    slug: "flip-y",
    codeTailwind: `{
  animation: {
    "flip-y": "flip-y 0.6s ease-out",
  },
  keyframes: {
    "flip-y": {
      "0%": {
        transform: "scaleY(1)",
      },
      "50%": {
        transform: "scaleY(-1)",
      },
      "100%": {
        transform: "scaleY(1)",
      },
    },
  }
}`,
    codeCSS: `.animation-flip-y {
  animation: flip-y 0.6s ease-out;
}

@keyframes flip-y {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(-1);
  }
  100% {
    transform: scaleY(1);
  }
}`,
  },
  {
    name: "Flip In X",
    slug: "flip-in-x",
    codeTailwind: `{
  animation: {
    "flip-in-x": "flip-in-x 0.6s ease-out",
  },
  keyframes: {
    "flip-in-x": {
      "0%": {
        opacity: "0",
        transform: "rotateY(90deg)",
      },
      "100%": {
        opacity: "1",
        transform: "rotateY(0deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-flip-in-x {
  animation: flip-in-x 0.6s ease-out;
}

@keyframes flip-in-x {
  0% {
    opacity: 0;
    transform: rotateY(90deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg);
  }
}`,
  },
  {
    name: "Flip In Y",
    slug: "flip-in-y",
    codeTailwind: `{
  animation: {
    "flip-in-y": "flip-in-y 0.6s ease-out",
  },
  keyframes: {
    "flip-in-y": {
      "0%": {
        opacity: "0",
        transform: "rotateX(90deg)",
      },
      "100%": {
        opacity: "1",
        transform: "rotateX(0deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-flip-in-y {
  animation: flip-in-y 0.6s ease-out;
}

@keyframes flip-in-y {
  0% {
    opacity: 0;
    transform: rotateX(90deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}`,
  },
  {
    name: "Flip Out X",
    slug: "flip-out-x",
    codeTailwind: `{
  animation: {
    "flip-out-x": "flip-out-x 0.6s ease-out",
  },
  keyframes: {
    "flip-out-x": {
      "0%": {
        opacity: "1",
        transform: "rotateY(0deg)",
      },
      "100%": {
        opacity: "0",
        transform: "rotateY(90deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-flip-out-x {
  animation: flip-out-x 0.6s ease-out;
}

@keyframes flip-out-x {
  0% {
    opacity: 1;
    transform: rotateY(0deg);
  }
  100% {
    opacity: 0;
    transform: rotateY(90deg);
  }
}`,
  },
  {
    name: "Flip Out Y",
    slug: "flip-out-y",
    codeTailwind: `{
  animation: {
    "flip-out-y": "flip-out-y 0.6s ease-out",
  },
  keyframes: {
    "flip-out-y": {
      "0%": {
        opacity: "1",
        transform: "rotateX(0deg)",
      },
      "100%": {
        opacity: "0",
        transform: "rotateX(90deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-flip-out-y {
  animation: flip-out-y 0.6s ease-out;
}

@keyframes flip-out-y {
  0% {
    opacity: 1;
    transform: rotateX(0deg);
  }
  100% {
    opacity: 0;
    transform: rotateX(90deg);
  }
}`,
  },
  {
    name: "Bounce",
    slug: "bounce",
    codeTailwind: `{
  animation: {
    bounce: "bounce 1s ease-in-out",
  },
  keyframes: {
    bounce: {
      "0%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-10px)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-bounce {
  animation: bounce 1s ease-in-out;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}`,
  },
  {
    name: "Swing",
    slug: "swing",
    codeTailwind: `{
  animation: {
    swing: "swing 1s ease-in-out",
  },
  keyframes: {
    swing: {
      "0%": {
        transform: "rotate(0deg)",
      },
      "50%": {
        transform: "rotate(15deg)",
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-swing {
  animation: swing 1s ease-in-out;
}

@keyframes swing {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
`,
  },
  {
    name: "Wobble",
    slug: "wobble",
    codeTailwind: `{
  animation: {
    wobble: "wobble 1s ease-in-out",
  },
  keyframes: {
    wobble: {
      "0%": {
        transform: "translateX(0)",
      },
      "15%": {
        transform: "translateX(-20px)",
      },
      "30%": {
        transform: "translateX(20%)",
      },
      "45%": {
        transform: "translateX(-15%)",
      },
      "60%": {
        transform: "translateX(20px)",
      },
      "75%": {
        transform: "translateX(-5%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-wobble {
  animation: wobble 1s ease-in-out;
}

@keyframes wobble {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-20px);
  }
  30% {
    transform: translateX(20%);
  }
  45% {
    transform: translateX(-15%);
  }
  60% {
    transform: translateX(20px);
  }
  75% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
}`,
  },
  {
    name: "Pulse",
    slug: "pulse",
    codeTailwind: `{
  animation: {
    pulse: "pulse 1s ease-in-out",
  },
  keyframes: {
    pulse: {
      "0%": {
        transform: "scale(1)",
      },
      "50%": {
        transform: "scale(1.1)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  }
}`,
    codeCSS: `.animation-pulse {
  animation: pulse 1s ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}`,
  },
  {
    name: "Shake",
    slug: "shake",
    codeTailwind: `{
  animation: {
    shake: "shake 0.5s ease-in-out",
  },
  keyframes: {
    shake: {
      "0%": {
        transform: "translateX(0)",
      },
      "25%": {
        transform: "translateX(-10px)",
      },
      "50%": {
        transform: "translateX(10px)",
      },
      "75%": {
        transform: "translateX(-10px)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-shake {
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}`,
  },
  {
    name: "Tada",
    slug: "tada",
    codeTailwind: `{
  animation: {
    tada: "tada 1s ease-in-out",
  },
  keyframes: {
    tada: {
      "0%": {
        transform: "scale(1)",
      },
      "10%": {
        transform: "scale(0.9) rotate(-3deg)",
      },
      "20%": {
        transform: "scale(0.9) rotate(-3deg)",
      },
      "30%": {
        transform: "scale(1.1) rotate(3deg)",
      },
      "40%": {
        transform: "scale(1.1) rotate(-3deg)",
      },
      "50%": {
        transform: "scale(1.1) rotate(3deg)",
      },
      "60%": {
        transform: "scale(1.1) rotate(-3deg)",
      },
      "70%": {
        transform: "scale(1.1) rotate(3deg)",
      },
      "80%": {
        transform: "scale(1.1) rotate(-3deg)",
      },
      "90%": {
        transform: "scale(1.1) rotate(3deg)",
      },
      "100%": {
        transform: "scale(1) rotate(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-tada {
  animation: tada 1s ease-in-out;
}

@keyframes tada {
  0% {
    transform: scale(1);
  }
  10%, 20% {
    transform: scale(0.9) rotate(-3deg);
  }
  30%, 40%, 50%, 60%, 70%, 80%, 90% {
    transform: scale(1.1) rotate(3deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}`,
  },
  {
    name: "Jump",
    slug: "jump",
    codeTailwind: `{
  animation: {
    jump: "jump 1s ease-in-out",
  },
  keyframes: {
    jump: {
      "0%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-20px)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-jump {
  animation: jump 1s ease-in-out;
}

@keyframes jump {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}`,
  },
  {
    name: "Hang",
    slug: "hang",
    codeTailwind: `{
  animation: {
    hang: "hang 1s ease-in-out",
  },
  keyframes: {
    hang: {
      "0%": {
        transform: "translateY(-20px)",
      },
      "50%": {
        transform: "translateY(0)",
      },
      "100%": {
        transform: "translateY(-20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-hang {
  animation: hang 1s ease-in-out;
}

@keyframes hang {
  0%, 100% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
}`,
  },
  {
    name: "Roll In",
    slug: "roll-in",
    codeTailwind: `{
  animation: {
    "roll-in": "roll-in 1s ease-in-out",
  },
  keyframes: {
    "roll-in": {
      "0%": {
        transform: "translateX(-20px) rotate(-120deg)",
      },
      "100%": {
        transform: "translateX(0) rotate(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-roll-in {
  animation: roll-in 1s ease-in-out;
}

@keyframes roll-in {
  0% {
    transform: translateX(-20px) rotate(-120deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
}`,
  },
  {
    name: "Roll Out",
    slug: "roll-out",
    codeTailwind: `{
  animation: {
    "roll-out": "roll-out 1s ease-in-out",
  },
  keyframes: {
    "roll-out": {
      "0%": {
        transform: "translateX(0) rotate(0)",
      },
      "100%": {
        transform: "translateX(20px) rotate(120deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-roll-out {
  animation: roll-out 1s ease-in-out;
}

@keyframes roll-out {
  0% {
    transform: translateX(0) rotate(0);
  }
  100% {
    transform: translateX(20px) rotate(120deg);
  }
}`,
  },
  {
    name: "Float",
    slug: "float",
    codeTailwind: `{
  animation: {
    float: "float 1s ease-in-out",
  },
  keyframes: {
    float: {
      "0%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-10px)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-float {
  animation: float 1s ease-in-out;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}`,
  },
  {
    name: "Sink",
    slug: "sink",
    codeTailwind: `{
  animation: {
    sink: "sink 1s ease-in-out",
  },
  keyframes: {
    sink: {
      "0%": {
        transform: "translateY(-10px)",
      },
      "50%": {
        transform: "translateY(0)",
      },
      "100%": {
        transform: "translateY(-10px)",
      },
    },
  }
}`,
    codeCSS: `.animation-sink {
  animation: sink 1s ease-in-out;
}

@keyframes sink {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}`,
  },
  {
    name: "Sway",
    slug: "sway",
    codeTailwind: `{
  animation: {
    sway: "sway 0.6s ease-out",
  },
  keyframes: {
    sway: {
      "0%": {
        transform: "rotate(0deg)",
      },
      "50%": {
        transform: "rotate(15deg)",
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-sway {
  animation: sway 0.6s ease-out;
}

@keyframes sway {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}`,
  },
  {
    name: "Flash",
    slug: "flash",
    codeTailwind: `{
  animation: {
    flash: "flash 1s ease-in-out",
  },
  keyframes: {
    flash: {
      "0%": {
        opacity: "1",
      },
      "50%": {
        opacity: "0",
      },
      "100%": {
        opacity: "1",
      },
    },
  }
}`,
    codeCSS: `.animation-flash {
  animation: flash 1s ease-in-out;
}

@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`,
  },
  {
    name: "Jiggle",
    slug: "jiggle",
    codeTailwind: `{
  animation: {
    jiggle: "jiggle 0.5s ease-in-out",
  },
  keyframes: {
    jiggle: {
      "0%": {
        transform: "rotate(-3deg)",
      },
      "50%": {
        transform: "rotate(3deg)",
      },
      "100%": {
        transform: "rotate(-3deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-jiggle {
  animation: jiggle 0.5s ease-in-out;
}

@keyframes jiggle {
  0% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(-3deg);
  }
}`,
  },
  {
    name: "Blink",
    slug: "blink",
    codeTailwind: `{
  animation: {
    blink: "blink 0.5s",
  },
  keyframes: {
    blink: {
      "0%": {
        opacity: "0",
      },
      "100%": {
        opacity: "1",
      },
    },
  }
}`,
    codeCSS: `.animation-blink {
  animation: blink 0.5s;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`,
  },
  {
    name: "Pop",
    slug: "pop",
    codeTailwind: `{
  animation: {
    pop: "pop 0.6s ease-out",
  },
  keyframes: {
    pop: {
      "0%": {
        transform: "scale(1)",
      },
      "50%": {
        transform: "scale(1.1)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  }
}`,
    codeCSS: `.animation-pop {
  animation: pop 0.6s ease-out;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}`,
  },
  {
    name: "Heartbeat",
    slug: "heartbeat",
    codeTailwind: `{
  animation: {
    heartbeat: "heartbeat 0.6s ease-out",
  },
  keyframes: {
    heartbeat: {
      "0%": {
        transform: "scale(1)",
      },
      "25%": {
        transform: "scale(1.1)",
      },
      "50%": {
        transform: "scale(1)",
      },
      "75%": {
        transform: "scale(0.9)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  }
}`,
    codeCSS: `.animation-heartbeat {
  animation: heartbeat 0.6s ease-out;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}`,
  },
  {
    name: "Expand Horizontally",
    slug: "expand-horizontally",
    codeTailwind: `{
  animation: {
    "expand-horizontally": "expand-horizontally 0.6s ease-out",
  },
  keyframes: {
    "expand-horizontally": {
      "0%": {
        transform: "scaleX(0)",
      },
      "100%": {
        transform: "scaleX(1)",
      },
    },
  }
}`,
    codeCSS: `.animation-expand-horizontally {
  animation: expand-horizontally 0.6s ease-out;
}

@keyframes expand-horizontally {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}`,
  },
  {
    name: "Contract Horizontally",
    slug: "contract-horizontally",
    codeTailwind: `{
  animation: {
    "contract-horizontally": "contract-horizontally 0.6s ease-out",
  },
  keyframes: {
    "contract-horizontally": {
      "0%": {
        transform: "scaleX(1)",
      },
      "100%": {
        transform: "scaleX(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-contract-horizontally {
  animation: contract-horizontally 0.6s ease-out;
}

@keyframes contract-horizontally {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}`,
  },
  {
    name: "Expand Vertically",
    slug: "expand-vertically",
    codeTailwind: `{
  animation: {
    "expand-vertically": "expand-vertically 0.6s ease-out",
  },
  keyframes: {
    "expand-vertically": {
      "0%": {
        transform: "scaleY(0)",
      },
      "100%": {
        transform: "scaleY(1)",
      },
    },
  }
}`,
    codeCSS: `.animation-expand-vertically {
  animation: expand-vertically 0.6s ease-out;
}

@keyframes expand-vertically {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}`,
  },
  {
    name: "Contract Vertically",
    slug: "contract-vertically",
    codeTailwind: `{
  animation: {
    "contract-vertically": "contract-vertically 0.6s ease-out",
  },
  keyframes: {
    "contract-vertically": {
      "0%": {
        transform: "scaleY(1)",
      },
      "100%": {
        transform: "scaleY(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-contract-vertically {
  animation: contract-vertically 0.6s ease-out;
}

@keyframes contract-vertically {
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
}`,
  },
  {
    name: "Rubber Band",
    slug: "rubber-band",
    codeTailwind: `{
  animation: {
    "rubber-band": "rubber-band 1s ease-in-out",
  },
  keyframes: {
    "rubber-band": {
      "0%": {
        transform: "scale(1)",
      },
      "30%": {
        transform: "scale(1.25)",
      },
      "40%": {
        transform: "scale(0.75)",
      },
      "50%": {
        transform: "scale(1.15)",
      },
      "65%": {
        transform: "scale(0.95)",
      },
      "75%": {
        transform: "scale(1.05)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  }
}`,
    codeCSS: `.animation-rubber-band {
  animation: rubber-band 1s ease-in-out;
}

@keyframes rubber-band {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.25);
  }
  40% {
    transform: scale(0.75);
  }
  50% {
    transform: scale(1.15);
  }
  65% {
    transform: scale(0.95);
  }
  75% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}`,
  },
  {
    name: "Blurred Fade-In",
    slug: "blurred-fade-in",
    codeTailwind: `{
  animation: {
    "blurred-fade-in": "blurred-fade-in 0.9s ease-in-out",
  },
  keyframes: {
    "blurred-fade-in": {
      "0%": {
        filter: "blur(5px)",
        opacity: "0",
      },
      "100%": {
        filter: "blur(0)",
        opacity: "1",
      },
    },
  }
}`,
    codeCSS: `.animation-blurred-fade-in {
  animation: blurred-fade-in 0.9s ease-in-out;
}

@keyframes blurred-fade-in {
  0% {
    filter: blur(5px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}`,
  },
  {
    name: "Horizontal Vibration",
    slug: "horizontal-vibration",
    codeTailwind: `{
  animation: {
    "horizontal-vibration": "horizontal-vibration 0.3s linear infinite",
  },
  keyframes: {
    "horizontal-vibration": {
      "0%": {
        transform: "translateX(0)",
      },
      "25%": {
        transform: "translateX(5px)",
      },
      "50%": {
        transform: "translateX(-5px)",
      },
      "75%": {
        transform: "translateX(5px)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-horizontal-vibration {
  animation: horizontal-vibration 0.3s linear infinite;
}

@keyframes horizontal-vibration {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}`,
  },
  {
    name: "Rotational Wave",
    slug: "rotational-wave",
    codeTailwind: `{
  animation: {
    "rotational-wave": "rotational-wave 2s ease-in-out infinite",
  },
  keyframes: {
    "rotational-wave": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "25%": {
        transform: "rotate(10deg)",
      },
      "50%": {
        transform: "rotate(-10deg)",
      },
      "75%": {
        transform: "rotate(10deg)",
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-rotational-wave {
  animation: rotational-wave 2s ease-in-out infinite;
}

@keyframes rotational-wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}`,
  },
  {
    name: "Skew",
    slug: "skew",
    codeTailwind: `{
  animation: {
    skew: "skew 0.5s ease-in-out",
  },
  keyframes: {
    skew: {
      "0%": {
        transform: "skew(0deg)",
      },
      "100%": {
        transform: "skew(20deg)",
      },
    },
  }
}`,
    codeCSS: `.animation-skew {
  animation: skew 0.5s ease-in-out;
}

@keyframes skew {
  0% {
    transform: skew(0deg);
  }
  100% {
    transform: skew(20deg);
  }
}`,
  },
  {
    name: "Vertical Bounce",
    slug: "vertical-bounce",
    codeTailwind: `{
  animation: {
    "vertical-bounce": "vertical-bounce 0.6s ease-in-out",
  },
  keyframes: {
    "vertical-bounce": {
      "0%, 100%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-vertical-bounce {
  animation: vertical-bounce 0.6s ease-in-out;
}

@keyframes vertical-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}`,
  },
  {
    name: "Horizontal Bounce",
    slug: "horizontal-bounce",
    codeTailwind: `{
  animation: {
    "horizontal-bounce": "horizontal-bounce 0.6s ease-in-out",
  },
  keyframes: {
    "horizontal-bounce": {
      "0%, 100%": {
        transform: "translateX(0)",
      },
      "50%": {
        transform: "translateX(20px)",
      },
    },
  }
}`,
    codeCSS: `.animation-horizontal-bounce {
  animation: horizontal-bounce 0.6s ease-in-out;
}

@keyframes horizontal-bounce {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}`,
  },
  {
    name: "Tilt",
    slug: "tilt",
    codeTailwind: `{
  animation: {
    tilt: "tilt 0.6s ease-in-out",
  },
  keyframes: {
    tilt: {
      "0%, 100%": {
        transform: "scale(1, 1)",
      },
      "50%": {
        transform: "scale(0.9, 1.1)",
      },
    },
  }
}`,
    codeCSS: `.animation-tilt {
  animation: tilt 0.6s ease-in-out;
}

@keyframes tilt {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(0.9, 1.1);
  }
}`,
  },
  {
    name: "Squeeze",
    slug: "squeeze",
    codeTailwind: `{
  animation: {
    squeeze: "squeeze 0.6s ease-in-out",
  },
  keyframes: {
    squeeze: {
      "0%, 100%": {
        transform: "scale(1, 1)",
      },
      "50%": {
        transform: "scale(1.1, 0.9)",
      },
    },
  }
}`,
    codeCSS: `.animation-squeeze {
  animation: squeeze 0.6s ease-in-out;
}

@keyframes squeeze {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
}
`,
  },
  {
    name: "Slide Up with Fade",
    slug: "slide-up-fade",
    codeTailwind: `{
  animation: {
    "slide-up-fade": "slide-up-fade 0.6s ease-out",
  },
  keyframes: {
    "slide-up-fade": {
      "0%": {
        opacity: "0",
        transform: "translateY(50px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
  }
}`,
    codeCSS: `.animation-slide-up-fade {
  animation: slide-up-fade 0.6s ease-out;
}

@keyframes slide-up-fade {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
  },
  {
    name: "Bounce with Fade-In",
    slug: "bounce-fade-in",
    codeTailwind: `{
  animation: {
    "bounce-fade-in": "bounce-fade-in 0.6s ease-out",
  },
  keyframes: {
    "bounce-fade-in": {
      "0%": {
        transform: "scale(0.5)",
        opacity: "0",
      },
      "100%": {
        transform: "scale(1)",
        opacity: "1",
      },
    },
  }
}`,
    codeCSS: `.animation-bounce-fade-in {
  animation: bounce-fade-in 0.6s ease-out;
}

@keyframes bounce-fade-in {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}`,
  },
  {
    name: "Swing Drop-In",
    slug: "swing-drop-in",
    codeTailwind: `{
  animation: {
    "swing-drop-in": "swing-drop-in 0.6s ease-out",
  },
  keyframes: {
    "swing-drop-in": {
      "0%": {
        transform: "rotate(-30deg) translateY(-50px)",
        opacity: "0",
      },
      "100%": {
        transform: "rotate(0deg) translateY(0)",
        opacity: "1",
      },
    },
  }
}`,
    codeCSS: `.animation-swing-drop-in {
  animation: swing-drop-in 0.6s ease-out;
}

@keyframes swing-drop-in {
  0% {
    transform: rotate(-30deg) translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg) translateY(0);
    opacity: 1;
  }
}`,
  },
  {
    name: "Pulse Fade-In",
    slug: "pulse-fade-in",
    codeTailwind: `{
  animation: {
    "pulse-fade-in": "pulse-fade-in 0.6s ease-out",
  },
  keyframes: {
    "pulse-fade-in": {
      "0%": {
        transform: "scale(0.9)",
        opacity: "0",
      },
      "50%": {
        transform: "scale(1.05)",
        opacity: "0.5",
      },
      "100%": {
        transform: "scale(1)",
        opacity: "1",
      },
    },
  }
}`,
    codeCSS: `.animation-pulse-fade-in {
  animation: pulse-fade-in 0.6s ease-out;
}

@keyframes pulse-fade-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}`,
  },
];
