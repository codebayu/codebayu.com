export const bannerStyles = {
  container: {
    width: '100%',
    background: 'gray.300',
    borderRadius: '25px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 20px 35px',
    overflow: 'hidden',
    marginTop: 30,
    zIndex: 1,
    position: 'relative',
    flexDir: {
      base: { flexDir: 'column' },
      lg: { flexDir: 'row' },
    },
  },
  wrap: {
    flex: 1,
    fontFamily: 'Roboto',
    padding: { base: '1rem', lg: '2rem' },
    flexDir: 'column'
  },
  greet: {
    color: 'gray.800',
    fontSize: { base: 16, lg: 20 },
    textAlign:{ base: 'center', lg: 'start' }
  },
  wrapBio: {
    flexDir: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: { base: 'center', lg: 'start' },
    gap: 4
  },
  name: {
    fontSize: { base: 30, lg: 60 },
    color: 'gray.800'
  },
  job: {
    fontSize: { base: 16, lg: 20 },
    fontWeight: 500,
    color: 'gray.800'
  },
  summary: {
    fontSize: 12,
    color: 'gray.800',
    maxW: '95%',
    textAlign: { base: 'center', lg: 'start' }
  },
  wrapIcon: {
    spacing: 3,
    marginTop: 5,
    display: 'flex',
    justifyContent: { base: 'center', lg: 'start' }
  },
  wrapImage: {
    flex: 1,
    position: 'relative',
    alignItems: 'end',
    background: 'gray.300',
    bgGradient: 'linear-gradient(120deg, gray.400 30%, gray.300 100%)'
  },
  buble: {
    width: '20rem',
    height: '20rem',
    background: 'gray.400',
    borderRadius: '15rem',
    position: 'absolute',
    top: -200,
    right: -200,
    _hover: {
      top: -205,
      right: -205,
      transition: '0.7s',
    },
    display: { base: 'none', lg: 'block' }
  }
}
