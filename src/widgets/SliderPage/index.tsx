import styles from "./SliderPage.module.scss";
import sliderBg from "@/images/slider/sliderBg.jpg";
import slider1Img from "@/images/slider/slider1.jpg";
import slider2Img from "@/images/slider/slider2.jpg";
import slider3Img from "@/images/slider/slider3.jpg";
import slider4Img from "@/images/slider/slider4.jpg";
import slider5Img from "@/images/slider/slider5.jpg";
import slider6Img from "@/images/slider/slider6.jpg";
import Close from "@/shared/ui/Close/Close";
import { type ReactNode, useRef } from "react";
import { handleScroll } from "@/features/handleScroll";
import { handleIndicators } from "@/features/handleIndicators";

interface Item {
  image: string;
  text: ReactNode;
}

const sliderItems: Item[] = [
  {
    image: slider1Img,
    text: (
      <>
        <p>
          On a déforesté cette zone, alors, repeuplons-la! Pour un habitant
          implanté en Amazonie, trois arbres en jachère offerts. Mesdames, vous
          serez les Amazones modernes, venues des entrailles du monde poser
          leurs valises en cette terre sainte. Le climat amazonien est chaud et
          humide toute l'année, il y fait une température idéale pour quiconque
          souhaite vivre dans la douceur verte aux effluves excentriques. Terre
          sauvage aux vingt couleurs et mille voix, l'Amazonie offre la
          possibilité de vivre en harmonie et en fusion avec mère nature tout en
          étant au centre du repeuplement mondial moderne.
        </p>
        <br />
        <p>Les places sont limitées !</p>
      </>
    ),
  },
  {
    image: slider2Img,
    text: (
      <>
        <p>
          Avant, seuls les gens très fortunés pouvaient se rendre sur la lune,
          mais la bonne nouvelle maintenant c’est qu’elle fait partie des zones
          prioritaires, à repeupler. Et oui, vous ne rêvez pas, je suis bien en
          train de vous vendre la lune. Je pourrais même la décrocher pour vous.
          Parce qu’il y a urgence. C’est une zone ultra-cyclique qui ressemble à
          une boule de neige, ou de rêve, ou à une luge en serpentin. La lune,
          c’est le paradis sur terre. Bien sûr parfois le décor change, il est
          incertain, imprévisible, lunatique. Et puis sinon y ‘ a l’Islande … !
          le proverbe polonais « se perdre dans une forêt en Islande » n ‘aura
          plus lieu d’être puisqu’on pourra enfin en replanter grâce aux arbres
          de l’Amazonie, enlevés pour l’occasion quand la zone a été défrichée
          dans le but d’y accueillir la population prioritaire.
        </p>
        <br />
        <p>
          Citoyen, tu dois avoir une confiance politique, conscience pardon . Et
          ces zones ont besoin de toi, de vous, de nous. Tout reste à faire. La
          catastrophe naturelle nous aura appris à ne plus mépriser certains
          recoins de la planète bleue.
        </p>
      </>
    ),
  },
  {
    image: slider3Img,
    text: (
      <p>
        On dit de moi que je suis la sœur jumelle de celle que tu as quittée. Je
        lui ressemble un peu mais je cultive ma différence à ma manière. Ici
        tout se cultive, mes sols sont très fertiles. Habiter en moi c'est être
        au tréfonds de tout fantasme humain. Depuis combien de lustres
        pense-t-on à moi ? Chacun voulant sur ma carcasse marcher comme on
        sautille. Ils voulaient tous en être, de la planète Mars ! J'étais
        l'inaccessible, leur Graal. Je me présente, je suis la planète Mars à
        nulle autre pareille. Je dois être pudique voire même assez timide car
        souvent je rougis. Je suis l'avenir de la planète terre et l'humanité va
        trouver son salut en mon sein réchauffé. Maintenant en 2037, vont être
        amenés en priorité sur mes terres, les citoyens de droit qui sont
        financièrement plutôt à l'aise. Car, même si comme je le disais en
        préambule, mes terres sont toutes très fertiles, ce qui pousse le mieux
        ici, c'est le blé et l'oseille.
      </p>
    ),
  },
  {
    image: slider4Img,
    text: (
      <>
        <p>
          Kafka t'attend sur le rivage du Sahara et ce n'est ni un rêve, ni un
          mirage. Dès qu'on prononce ce nom, on se voit projeté dans un désert
          de feu accueillant et prospère, une immensité qui sait se rétrécir
          pour mieux loger son peuple. Le Sahara n'est plus un lieu aride.
          Depuis le réchauffement de la planète, il y fait en fait plus froid
          car la fonte des glaces a trouvé son point de chute en son sein
          opposé, à des milliers de kilomètres de là, pile-poil donc dans le
          désert du Sahara. Le Sahara offre qui plus est un lieu de bien-être ;
          des études scientifiques ont prouvé le rapport de cause à effet entre
          les paysages du Sahara et l'accalmie cérébrale.
        </p>
        <br />
        <p>
          Sarah, je t'ai aimée dans l'enfer des oiseaux et pour moi seul le
          sable pourra nous séparer. S'il enseveli et mon cœur et ton sang dans
          un même tombeau gardé par un berbère.
        </p>
        <br />
        <p>
          Le Sahara est un lieu d'inspiration et une zone prioritaire de
          repeuplement qui vous promet une nouvelle vie, aussi flamboyante que
          le soleil arable.
        </p>
      </>
    ),
  },
  {
    image: slider5Img,
    text: (
      <>
        <p>
          Vous savez où se situe exactement la Sibérie ? Eh bien, je vous le
          donne en mille : c'est le lieu où les robots s'amusent ! Cyber rit...
          L'endroit le plus branché de la planète. De toutes les planètes... The
          place to be !!!
        </p>
        <br />
        <p>
          On vous a menti trop longtemps en suggérant qu'on y gèle car depuis la
          dernière catastrophe climatique, la neige y tombe tiède et son
          spectacle dure deux siècles ininterrompus dans les yeux ébahis des
          nouveaux habitants, qui ont la sensation de voir un film en noir et
          blanc que dieu dessinerait du haut de son extase. Un peu penchée mais
          beau à perte de vue. Certains d'ailleurs en ont perdu le souffle mais
          ce n'est pas un problème pour survivre en ces lieux : les Sibériens
          possèdent une respiration spéciale sans effort de leur part ; c'est le
          climat qui veut ça et “ça" leur est donné dès leur premier jour ici.
          La Sibérie, zone prioritaire de bonheur, de flocons, d'ordinateurs et
          de fous rires. En choisissant la Sibérie, vous tutoyez l'avenir. Et
          pour ceux qui aiment les grands espaces, c'est l'idéal ; la Sibérie
          est une région d'Asie, située en ancienne Russie et qui s'étend sur 13
          millions de kilomètres carrés et qui est très riche en ressources
          naturelles.
        </p>
        <br />
        <p>
          N'hésitez plus!!! PS : en ce moment le gouvernement russe offre des
          terres.
        </p>
      </>
    ),
  },
  {
    image: slider6Img,
    text: (
      <>
        <p>
          L Alaska est le 49e État des États-Unis, dont la capitale est Juneau
          et la plus grande ville Anchorage, où habite environ 40 % de la
          population de l'État. Avec une superficie totale de 1 717 854 km2, il
          est l'État le plus étendu et le plus septentrional du pays, mais l'un
          des moins peuplés, ne comptant que 731 545 habitants en 2019. Mais ça
          c'était avant. Nous sommes en 2037 et beaucoup de choses ont changé.
        </p>
        <br />
        <p>
          Comme Hawaï, l'Alaska est séparé des États-Unis contigus et se situe
          au nord-ouest du Canada. Mais ça aussi, c'était avant. Désormais, il
          n'y a plus d'États-Unis à proprement parler mais seulement des états
          mitoyens à repeupler.
        </p>
        <br />
        <p>
          L'Alaska est au cœur de tous les débats. Il fait partie des Zones
          prioritaires les plus demandées surtout depuis que le dialecte
          alaskien, savant ménage entre l'anglais et l'hindou- monglien a été
          élu langue internationale. Les appartements sont à loyer très faible
          et l' Alaska dispose d'universités les plus cotées au monde désormais.
        </p>
        <br />
        <p>Alaska: le savoir vivre à grande échelle.</p>
      </>
    ),
  },
];

const Slider = () => {
  const items = useRef<HTMLDivElement>(null);
  const indicators = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.sliderPage}>
      <img src={sliderBg} className={styles.bg} />
      <div className={styles.content}>
        <h2 className={styles.title}>ZPRs</h2>
        <p className={styles.description}>
          Des zones de repeuplement prioritaire
        </p>
        <div className={styles.slider}>
          <div
            className={styles.items}
            ref={items}
            onScroll={() => handleScroll(items, indicators, styles)}
          >
            {sliderItems.map((item, index) => (
              <div
                className={styles.sliderItem}
                key={index}
                id={`slide-${index}`}
                onClick={(event) => {
                  event.currentTarget.parentElement?.classList.toggle(
                    styles.overflow,
                  );
                  document.body.classList.toggle("overflow");
                  event.currentTarget.classList.toggle(styles.active);
                }}
              >
                <div className={styles.close}>
                  <Close to='#' color='black' />
                </div>
                <img
                  src={item.image}
                  className={styles.img}
                  draggable={false}
                />
                <div className={styles.contentText}>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.indicators} ref={indicators}>
            {sliderItems.map((_, index) => (
              <div
                className={
                  index === 0
                    ? `${styles.indicator} ${styles.active}`
                    : styles.indicator
                }
                key={index}
                onClick={() =>
                  handleIndicators({ index, indicators, items, styles })
                }
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
