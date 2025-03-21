const Interests = () => {
  // const spotifyEmbedWindow = document.querySelector(
  //   'iframe[src*="spotify.com/embed"]',
  // ).contentWindow;
  // spotifyEmbedWindow.postMessage({ command: "toggle" }, "*");

  return (
    <div>
      <div>
        Some favorite songs of mine
        <iframe
          src="https://open.spotify.com/embed/track/1Xi28qSSoARTXiqMwb8Srg?utm_source=generator"
          width="75%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/track/6IizHJqeD17dTIfLxzfI9T?utm_source=generator"
          width="75%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/track/2LiDZmGERLzjrtBTCofj2G?utm_source=generator"
          width="75%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/track/5JWPUEov2wlX7c0jhYZpeB?utm_source=generator"
          width="75%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div>
        Podcasts I like
        <iframe
          src="https://open.spotify.com/embed/episode/3T2MHkFenI1OI1o9lOL5ts?utm_source=generator"
          width="75%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/episode/1gaVtWEVI51yKSWBO0uLIX?utm_source=generator"
          width="75%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Interests;
