(() => {
  document.querySelectorAll('.project-gallery').forEach((gallery) => {
    const tiles = Array.from(gallery.children);
    if (!tiles.length) return;

    let scheduled = false;
    const layout = () => {
      scheduled = false;
      const styles = getComputedStyle(gallery);
      const columns = Number(styles.getPropertyValue('--project-columns')) || 1;
      const gap = parseFloat(styles.columnGap) || 0;
      const width = (gallery.clientWidth - gap * (columns - 1)) / columns;
      const heights = Array(columns).fill(0);

      gallery.setAttribute('data-staggered', '');
      // Cycle through columns instead of filling one column at a time.
      tiles.forEach((tile, index) => {
        const column = index % columns;
        tile.style.width = `${width}px`;
        tile.style.left = `${column * (width + gap)}px`;
        tile.style.top = `${heights[column]}px`;
        heights[column] += tile.offsetHeight;
      });
      gallery.style.height = `${Math.max(...heights)}px`;
    };
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(layout);
    };

    layout();
    window.addEventListener('resize', schedule);
    gallery.querySelectorAll('img').forEach((image) => {
      image.addEventListener('load', schedule);
      image.addEventListener('error', schedule);
    });
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(schedule);
      tiles.forEach((tile) => observer.observe(tile));
    }
    if (document.fonts) document.fonts.ready.then(schedule);
  });
})();
