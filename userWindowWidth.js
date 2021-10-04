

  const userWindowWidth = () => {
    const [width, setWidth] = useState([window.innerWidth]);
    useEffect(() => {
      const widthResize = () => {
        setWidth([window.innerWidth]);
      };
      window.addEventListener('resize', widthResize);
    }, []);
    return width;
  }

  const windowWidth = userWindowWidth();