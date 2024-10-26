import localFont from 'next/font/local'

export const RusillaFont = localFont({
  variable: "--font-rusilla",
  src: [
    {
      path: "./rusillaserif.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./rusillaseriflight.otf",
      weight: "300",
      style: "normal"
    },
  ]
})