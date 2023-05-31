import { Saira, Saira_Stencil_One } from 'next/font/google'

const saira = Saira({ subsets: ['latin'] })
const saira_stencil_one = Saira_Stencil_One({
  subsets: ['latin'],
  weight: '400'
})

export { saira, saira_stencil_one }
