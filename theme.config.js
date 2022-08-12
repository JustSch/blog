const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small >
        <div className="left">
          <time >{YEAR}</time> © Justin Schreiber. Powered by {' '}
          <a href="https://nextjs.org/">Next.js</a> and {' '}
          <a href="https://nextra.vercel.app/">nextra</a>         
        </div>
        <a className="right" href="/blog/feed.xml">RSS</a>        
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
      `}</style>
    </footer>
  ),
}
