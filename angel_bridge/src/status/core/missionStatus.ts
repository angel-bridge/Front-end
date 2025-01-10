import gray from '../assets/gray.svg'
import green from '../assets/green.svg'
import orange from '../assets/orange.svg'
import purple from '../assets/purple.svg'
import red from '../assets/red.svg'

export const MISSION_STATUS = [
  {
    badge: green,
    badgecolor: 'green',
    text: '출석',
    submitStatus: 'ONTIME',
    modalType: 'clickGreenOrOrange',
  },
  {
    badge: orange,
    badgecolor: 'orange',
    text: '지각',
    submitStatus: 'LATE',
    modalType: 'clickGreenOrOrange',
  },
  {
    badge: red,
    badgecolor: 'red',
    text: '결석',
    submitStatus: 'ABCENT',
    modalType: 'clickRedOrPurple',
  },
  {
    badge: gray,
    badgecolor: 'gray',
    text: '공개예정',
    submitStatus: 'PENDING',
  },
  {
    badge: purple,
    badgecolor: 'purple',
    text: '오늘',
    submitStatus: 'TODAY',
    modalType: 'clickRedOrPurple',
  },
]
