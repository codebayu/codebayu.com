export const bannerStyles = {
  container: {
    width: '100%',
    borderRadius: '25px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 20px 35px',
    overflow: 'hidden',
    marginTop: 30,
    zIndex: 1,
    position: 'relative',
    flexDir: { base: 'column', lg: 'row' },
  },
  wrap: {
    flex: 1,
    fontFamily: 'Roboto',
    padding: { base: '1rem', lg: '2rem' },
    flexDir: 'column',
  },
  greet: {
    fontSize: { base: 16, lg: 20 },
    textAlign: { base: 'center', lg: 'start' },
  },
  wrapBio: {
    flexDir: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: { base: 'center', lg: 'start' },
    gap: 4,
  },
  name: {
    fontSize: { base: 30, lg: 60 },
  },
  job: {
    fontSize: { base: 16, lg: 20 },
    fontWeight: 500,
  },
  summary: {
    fontSize: { base: 12, lg: 14 },
    maxW: '95%',
    textAlign: { base: 'center', lg: 'start' },
  },
  wrapIcon: {
    spacing: 3,
    marginTop: 5,
    display: 'flex',
    justifyContent: { base: 'center', lg: 'start' },
  },
  wrapImage: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    alignItems: 'end',
  },
  buble: {
    width: '20rem',
    height: '20rem',
    borderRadius: '15rem',
    position: 'absolute',
    top: -200,
    right: -200,
    _hover: {
      top: -205,
      right: -205,
      transition: '0.7s',
    },
    display: { base: 'none', lg: 'block' },
  },
};
