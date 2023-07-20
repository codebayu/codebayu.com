export const projectStyles = {
  container: {
    flexDir: { base: 'column', lg: 'row' },
    alignItems: { base: 'center', lg: 'start' },
    justifyContent: 'start',
    width: '100%',
    height: { base: '100%', lg: '15rem' },
    zIndex: 10,
    rounded: '10px',
    overflow: 'hidden',
    shadow: 'md',
  },
  slider: {
    background: 'red',
    flex: 1,
  },
  wrap: {
    textAlign: 'start',
    flexDir: 'column',
    flex: 1,
    padding: 3,
    marginTop: { base: 5, lg: 0 },
  },
  title: {
    fontSize: 15,
    fontWeight: 'semibold',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
  },
};
