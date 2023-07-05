export const navbarStyles = {
  container: {
    position: 'fixed',
    top: 0,
    justifyContent: 'space-between',
    display: { base: 'none', lg: 'flex' },
    zIndex: 30,
    width: '100%',
    px: { base: '1rem', lg: '10rem' },
    transition: 'background-color 0.5s ease;'
  },
  wrap: {
    fontWeight: 'bold',
    fontSize: { base: 12, lg: 16 },
    p: 5,
  },
  link: {
    _hover: { color: '#3f4479' },
    cursor: "pointer"
  }
};
