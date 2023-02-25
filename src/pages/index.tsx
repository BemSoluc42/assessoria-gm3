
import Image from 'next/image'
import styles from './../styles/Home.module.css'

import Img1 from './../img2/capa.jpg'
import Img2 from './../img2/capa2.png'

import zap from './../img/logo-whatsapp-256.png'
import Link from 'next/link'

import img1 from './../img/Camada1.jpg'
import img2 from './../styles/Camada2.jpg'

export default function Home() {

  return (
    <main>
      <div className={styles.firstImage}>
        <div id='firstImg'>
          <Image src={img1} alt='acessoria GMAC' layout='responsive' />
        </div>

        <div className={styles.text}>
          <a>SOLUÇÕES</a>
          <a>FINANCEIRAS ONLINE</a>
        </div>
      </div>


      <div className={styles.content1}>
        <h1>Quite seu financiamento
          com rapidez e segurança</h1>

        <p>Soluções online de quitação com descontos
          exclusivos. Realize uma avaliação online segura
          sem precisar sair de casa.</p>

        <Link href='https://api.whatsapp.com/send?phone=5511958277872&text=ol%C3%A1%2C%20poderia%20me%20ajudar%3F'>
          <button id='button' style={{ cursor: 'pointer' }}>SOLICITAR COTAÇÃO</button>
        </Link>
      </div>




      <div className={styles.content2}>
        <div className={styles.item}>
          <h2>QUITAÇÃO DE FINANCIAMENTO</h2>
          <p>Quіtаçãо contratual com dеѕсоntоѕ e condições
            exclusivas, desfrute agora, Solicite sua Quіtаçãо.
          </p>
          <Link href='https://api.whatsapp.com/send?phone=5511958277872&text=ol%C3%A1%2C%20poderia%20me%20ajudar%3F'>
            <button id='button' style={{ cursor: 'pointer' }}>SOLICITAR COTAÇÃO</button>
          </Link>
        </div>
        <div className={styles.item}>
          <h2>PARCELAS EM ATRASO</h2>
          <p>
            Evite Pаrсеlаѕ em atrasos e juros altos, solicite
            agora sua emissão de 2ª vіа, com redução de
            juros e taxas.
          </p>
          <Link href='https://api.whatsapp.com/send?phone=5511958277872&text=ol%C3%A1%2C%20poderia%20me%20ajudar%3F'>
            <button id='button' style={{ cursor: 'pointer' }}>SOLICITAR COTAÇÃO</button>
          </Link>
        </div>
      </div>

      <div className={styles.content3}>
        <div>
          <Image src={img2} alt='acessoria GMAC' layout='responsive' />
        </div>

        <div className={styles.allText}>
          <a className={styles.title}>QUEM SOMOS</a>

          <a>Somos uma empresa que disponibiliza serviços de aumento de score, emissão de 2º via, negociação de dívidas, adiantamento de parcelas e quitação contratual, focada em resolver soluções financeiras.</a><br/>

          <a>Nascemos da necessidade de trazer comodidade, segurança e praticidade para você. Estamos no mercado trazendo soluções em regularização de contratos, para que você possa ter uma consultoria especializada que realmente irá lhe ajudar a finalizar seu contrato de forma segura, simples e fácil.</a>

          <a>Somos uma empresa autorizada a fazer a intermediação entre o cliente e o banco emissor. Estamos sempre buscando a evolução de nossos serviços para trazer as melhores soluções para você!</a>
        </div>
      </div>


      <div className={styles.content4}>
        <a>
          REDUZIMOS EM ATÉ 50%
          OS JUROS DO SEU FINANCIAMENTO
        </a>

        <Link href='https://api.whatsapp.com/send?phone=5511958277872&text=ol%C3%A1%2C%20poderia%20me%20ajudar%3F'>
          <button id='button' style={{ cursor: 'pointer' }}>SOLICITAR COTAÇÃO</button>
        </Link>

        <a>solicite uma analise sem compromisso</a>
      </div>


      <footer className={styles.content5}>
        <a>Todos os Direitos Reservados - Revisaja</a>
      </footer>
    </main>
  )
}