const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Justin Schreiber. Powered by <nbps></nbps>
        <a href="https://nextjs.org/">Next.js</a> and <nbps></nbps>
        <a href="https://nextra.vercel.app/">nextra</a>
        <right><a href="/feed.xml">RSS</a></right>
        
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        right {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
