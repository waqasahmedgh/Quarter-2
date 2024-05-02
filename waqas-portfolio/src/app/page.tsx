import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image
              src="/imgs/img_waqas.jpg"
              alt="Waqas Ahmed Portfolio"
              width="300"
              height="200"
            />
            <h1>Waqas Ahmed</h1>
            <p>
              <span className="font-bold">Asslam-o-Aliakum,</span> I am a{" "}
              <span className="font-bold">Oracle developer</span> with{" "}
              <span className="font-bold">4 years</span> of experience. I enjoy
              building <span className="italic">apps and websites</span>. My
              focus is <span className="underline">React (Next.js)</span>.
            </p>
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/waqasahmedgh/" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a
                href="www.linkedin.com/in/waqas-ahmed-96b25225/"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
