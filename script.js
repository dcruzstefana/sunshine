function navigateTo(page) {
    window.location.href = page;
  }
  const images = [
    {
      src: 'images/picture.jpg',
      caption:
        'When I said, "I wish the lights were mistletoes instead," we both paused, smiled, and in that quiet moment, the sparkle in our eyes revealed what our hearts had known all along—the beginning of something truly beautiful.'
    },
    { src: 'images/pic2.jpg', caption: 'In that cozy dessert haven, with the warm glow of lights around us and sweetness in the air, we held each other close—our hearts full, our laughter lingering, and in that quiet, comforting hug, my world felt complete.' },
    { src: 'images/pic3.jpg', caption: 'As the rain poured outside the coffee shop, we cozied up, lost in our own little world—laughing, goofing around, sharing One Piece episodes and delicious sips, turning an ordinary day into one of the most magical memories we\'ll always carry in our hearts.' },
    { src: 'images/pic4.jpg', caption: 'We welcomed the new year hand in hand—a fresh chapter filled with hope, love, healing, and growth, not just within ourselves, but in the beautiful bond we were building together, closer with every heartbeat.' },
    { src: 'images/pic5.jpg', caption: 'Tired but content, we rested in each other\’s arms, and in that quiet embrace, I knew—with every breath and every heartbeat—that your arms are the safest, most peaceful place in the world.' },
    { src: 'images/pic6.jpg', caption: 'The day was long and weary, but simply being with you—detoxing in the calm of your presence—reminded me that even in life\’s chaos, your love makes it all beautifully worthwhile.' }
  ];
  
  let index = 0;
  
  function showImage(i) {
    const imgEl = document.getElementById('memoryImg');
    const captionEl = document.getElementById('caption');
  
    if (imgEl && captionEl) {
      imgEl.classList.remove('fade-in');
      setTimeout(()=>{
      imgEl.src = images[i].src;
      captionEl.textContent = images[i].caption;
      console.log(`Showing image ${i}:`, images[i]); // for debugging
    } ,50);}else {
      console.error('Image or caption element not found');
    }
  }
  
  function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
  }
  
  function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showImage(index);
  });
  