import { GithubLogo, LinkedinLogo, FacebookLogo } from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();
  return (
    <>
      <div className="flex w-full bg-green-800 border-t-4 border-black justify-center">
        <div className="flex-col text-center mt-4 mb-4">
          <h2 className="text-white font-bold">
            Farmácia do Diego Rodrigues do Nascimento | Copyright: {data}
          </h2>
          <p className="text-white font-bold">Acessa nossas redes socias</p>
          <div className="flex flex-row justify-center space-x-2 mt-3 text-white">
            <a href="https://github.com/diego1999dd" target="_blank">
              <GithubLogo size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/diegorodriguesdonascimento99-ti/"
              target="_blank"
            >
              <LinkedinLogo size={50} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FacebookLogo size={50} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
