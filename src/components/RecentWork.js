import React from 'react'

const RecentWork = () => (
  <section id="two">
    <h2>Recent Work</h2>
    <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
      src,
      thumbnail,
      caption,
      description
    }))} />
  </section>
)


export default RecentWork;