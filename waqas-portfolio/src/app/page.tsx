import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image
              src="/imgs/img_waqas.jpg"
              alt="Waqas portfolio"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            <h1>Waqas Ahmed</h1>
            <span className="font-bold">Hello,</span> I am a{" "}
            <span className="font-bold">Oracle developer</span> with{" "}
            <span className="font-bold">4 years</span> of experience. I enjoy
            building <span className="italic">apps and websites</span>. My focus
            is <span className="underline">React (Next.js)</span>.
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
