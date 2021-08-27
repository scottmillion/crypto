export const desktopCellWidths = [18, 280, 122, 90, 90, 90, 230, 230, 120]

export const coinListPercentDisplayColors = [
  ['rgb(255, 181, 40)', 'rgb(254, 225, 88)'],
  ['rgb(71, 76, 119)', 'rgb(138, 146, 178)'],
  ['rgb(27, 162, 122)', 'rgb(26, 108, 85)'],
  ['rgb(187, 159, 51)', 'rgb(228, 205, 130)'],
  ['rgb(254, 125, 67)', 'rgb(255, 220, 206)'],
  ['rgb(179, 64, 74)', 'rgb(244, 178, 176)'],
  ['rgb(29, 50, 125)', 'rgb(39, 117, 201)'],
  ['rgb(131, 128, 139)', 'rgb(240, 146, 66)'],
  ['rgb(152, 0, 157)', 'rgb(152, 93, 157)'],
]

export const columnLabelsText = [
  '#',
  'Name',
  'Price',
  '1h%',
  '24h%',
  '7d%',
  '24h Volume/Market Cap',
  'Circulating/Total Supply',
  'Last 7d',
]

export const currencyList = {
  usd: {
    name: 'USD',
    symbol: '$',
  },
  gbp: {
    name: 'GBP',
    symbol: '£',
  },
  eur: {
    name: 'EUR',
    symbol: '€',
  },
  btc: {
    name: 'BTC',
    symbol: '₿',
  },
  eth: {
    name: 'ETH',
    symbol: 'Ξ',
  },
}

export const darkTheme = {
  mainFont: '#FFF',
  primary: '#1F2128',
  secondary: '#191B1F', // darkest
  secondaryInverted: '#FFF',
  tertiary: '#2C2F36',
  barChart: '#2172e5',
  lineChart: '#00ff5f',
  lineChartGradientTop: '#414547',
  lineChartGradientBottom: '#000',
  hrLineTop: '#707070',
  hrLineBottom: '#646565',
}

export const lightTheme = {
  mainFont: '#000',
  primary: '#f7f7f7',
  secondary: '#FFF',
  secondaryInverted: '#191B1F',
  tertiary: '#edeff2',
  barChart: '#1ad761',
  lineChart: '#2550ea',
  lineChartGradientTop: '#6785f0',
  lineChartGradientBottom: '#FFF',
  hrLineTop: '#e4e4e4',
  hrLineBottom: '#f0f0f0',
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const screenSizeWidth = {
  none: `(min-width: 0px)`,
  mobileS: `(min-width: 320px)`,
  mobileM: `(min-width: 375px)`,
  mobileL: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`,
  mobile: `(max-width: 899px)`,
  desktopS: `(min-width: 900px)`,
  desktopSM: `(min-width: 1000px)`,
  desktopM: `(min-width: 1200px)`,
  desktopML: `(min-width: 1300px)`,
  desktopL: `(min-width: 1500px)`,
  desktopXL: `(min-width: 1700px)`,
}

export const today = new Date()
