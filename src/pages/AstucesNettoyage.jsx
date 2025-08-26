// src/pages/AstucesNettoyage.jsx

import React, { useState, useRef } from 'react';
import '../css/AstucesNettoyage.css';

// Importez vos images ici
import imgMicrofibre from '../assets/nettoyage-microfibre.jpg';
import imgVelours from '../assets/canape-velours-elegant.jpg';
import imgGuide from '../assets/guide-nettoyage-complet.jpg';
import imgFauteuil from '../assets/fauteuil-tissu-renove.jpg';
// Images pour le carrousel de l'article
import imgAvant1 from '../assets/canape-tache-avant.jpg';
import imgApres1 from '../assets/canape-propre-apres.jpg';
import imgAvant2 from '../assets/fauteuil-poussiereux-avant.jpg';
import imgApres2 from '../assets/fauteuil-revitalise-apres.jpg';

function AstucesNettoyage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const modalContentRef = useRef(null);

  const articles = [
    {
      id: 1,
      image: imgMicrofibre,
      cardTitle: "Secrets d'Entretien pour un Canapé en Microfibre",
      cardTeaser: "La microfibre est douce et résistante, mais comment la garder impeccable ? Découvrez nos techniques professionnelles pour éliminer les taches sans abîmer le tissu.",
      
      modalTitle: "Le Guide Complet pour Nettoyer Votre Canapé en Microfibre",
      modalIntro: "Populaires pour leur esthétique et leur robustesse, les canapés en microfibre nécessitent un entretien adapté pour conserver leur splendeur. Loin d'être complexe, leur nettoyage est simple lorsque l'on connaît les bonnes méthodes. Suivez notre guide pour préserver la beauté et la longévité de votre canapé.",
      
      tableOfContents: [
        { id: 'synthese', title: "Synthèse de l'Article" },
        { id: 'etapes', title: "Guide Étape par Étape" },
        { id: 'bonnes-pratiques', title: "Meilleures Pratiques d'Entretien" },
        { id: 'sans-housses', title: "Nettoyage Sans Housses Amovibles" },
        { id: 'taches-legeres', title: "Traitement des Taches Légères" },
        { id: 'taches-tenaces', title: "Éliminer les Taches Tenaces" },
        { id: 'les-bases', title: "Les Règles d'Or du Nettoyage" },
      ],
      
      sections: [
        {
          id: 'synthese',
          title: "Synthèse de l'Article : L'Essentiel en un coup d'œil",
          content: (
            <>
              <p>Nettoyer un canapé en microfibre est essentiel pour préserver son apparence et prolonger sa durée de vie. Voici les principales étapes et conseils pour un entretien efficace :</p>
              <ul>
                <li><strong>Passer l’aspirateur :</strong> Utilisez une tête adaptée pour éliminer la poussière et les saletés de toutes les surfaces, y compris dossiers, accoudoirs et coussins. Pour les foyers avec animaux, brossez le canapé avec une brosse douce après l’aspiration.</li>
                <li><strong>Retirer et laver les housses :</strong> Si possible, enlevez les housses des coussins et lavez-les en machine en suivant les instructions du fabricant. Utilisez un détergent doux et évitez les assouplissants pour préserver la qualité du tissu.</li>
                <li><strong>Nettoyage des taches légères :</strong> Utilisez de l’eau tiède distillée ou bouillie avec un peu de liquide vaisselle doux. Les lingettes pour bébé sont également efficaces pour un nettoyage délicat sans produits agressifs.</li>
                <li><strong>Traitement des taches tenaces :</strong> Le nettoyant pour vitres peut être une solution efficace. Testez-le d’abord sur une zone peu visible, vaporisez sur la tache, laissez agir quelques instants puis essuyez avec une éponge. Une brosse peut être utilisée pour les taches résistantes.</li>
                <li><strong>Séchage approprié :</strong> Laissez sécher les housses à l’air libre, de préférence à l’ombre, pour éviter les déformations. Évitez le sèche-linge qui pourrait endommager le tissu.</li>
                <li><strong>Bonnes pratiques générales :</strong> Utilisez l’eau avec modération pour éviter les résidus de calcaire. Nettoyez rapidement les taches dès leur apparition. Évitez les nettoyeurs vapeur, l’eau de Javel et les solvants qui peuvent abîmer les fibres de la microfibre.</li>
              </ul>
            </>
          )
        },
        {
          id: 'etapes',
          title: "Guide Étape par Étape pour un Nettoyage en Profondeur",
          content: (
              <>
                  <p>Pour garder votre canapé en parfait état, suivez ces étapes. En les appliquant, votre canapé en microfibre restera comme neuf plus longtemps.</p>
                  <ol>
                      <li><strong>Passer l’aspirateur :</strong> Aspirer le canapé est essentiel pour éliminer la poussière et la saleté accumulées. Utilisez une tête d’aspirateur adaptée à ce type de rembourrage. Ensuite, aspirez toute la surface du canapé, y compris les dossiers, accoudoirs, sièges et coussins. Si vous avez des animaux domestiques, brossez le canapé avec une brosse douce pour enlever les poils et les peluches lorsque l’aspiration ne suffit pas.</li>
                      <li><strong>Retirer les housses :</strong> Si le canapé est sale, il est préférable de retirer les housses et de les laver en machine. Assurez-vous que les housses sont lavables selon les instructions du fabricant. Effectuez ce nettoyage lorsque le canapé est particulièrement sale ou une à deux fois par an. Un lavage trop fréquent pourrait endommager le tissu.</li>
                      <li><strong>Lavage :</strong> Lors du lavage, suivez toujours les recommandations du fabricant. En général, il est conseillé de laver les housses à environ 40°C pour éviter toute déformation. Si le tissu est très sale, faites-le tremper dans de l’eau avec un savon neutre pendant environ une heure avant le lavage.</li>
                      <li><strong>Séchage :</strong> Après le lavage, laissez sécher les housses à l’air libre, de préférence à l’ombre. Bien qu’elles mettent plus de temps à sécher, le résultat sera meilleur. Évitez le sèche-linge, car il peut provoquer des déformations du tissu.</li>
                  </ol>
                  <p>En suivant ces étapes simples, le nettoyage d'un canapé en microfibre devient facile et efficace. Ainsi, votre canapé restera propre et agréable à utiliser pendant de nombreuses années.</p>
              </>
          )
        },
        {
          id: 'bonnes-pratiques',
          title: "Meilleures Pratiques d'Entretien pour Vos Housses",
          content: (
            <>
              <p>Sur certains modèles de canapés en microfibre, il est possible de retirer les housses des coussins pour les laver en machine. Voici les points essentiels à respecter :</p>
              <ul>
                <li>Lavez les housses en suivant scrupuleusement les instructions d’entretien. Cela garantit qu’elles s’ajustent parfaitement aux coussins.</li>
                <li>Utilisez un détergent doux pour préserver la qualité du tissu.</li>
                <li>Réglez votre lave-linge sur un cycle à basse vitesse afin de minimiser les risques de détérioration.</li>
                <li>Évitez, dans la mesure du possible, d’ajouter un assouplissant qui pourrait altérer la texture de la microfibre.</li>
                <li>Pendant que les housses sont encore humides, tirez-les bien sur le rembourrage. Cela aide à maintenir leur forme originale.</li>
              </ul>
            </>
          )
        },
        {
          id: 'sans-housses',
          title: "Comment Nettoyer un Canapé Sans Housses Amovibles ?",
          content: (
            <>
              <p>Si votre canapé en microfibre ne permet pas de retirer les housses, ne vous inquiétez pas. Voici comment procéder : Avant de commencer le nettoyage, identifiez les symboles d’entretien présents sur votre canapé :</p>
              <ul>
                <li>Un <strong>« S »</strong> indique que seuls les produits de nettoyage sans eau (solvants) doivent être utilisés.</li>
                <li>Un <strong>« W »</strong> signifie qu’un nettoyage à base d’eau est recommandé.</li>
                <li>Un <strong>« WS »</strong> ou <strong>« SW »</strong> signifie que vous pouvez utiliser les deux méthodes.</li>
                <li>Un <strong>« X »</strong> signifie qu'aucune des deux options précédentes n’est autorisée. Dans ce cas, utilisez uniquement l’aspirateur et une brosse.</li>
              </ul>
              <div className="example-box">
                <strong>Exemple de mise en situation :</strong> Imaginez que vous avez un canapé en microfibre avec des housses amovibles. Après avoir renversé un verre de vin, vous pouvez rapidement retirer la housse et la laver en machine en suivant les conseils ci-dessus. Cela permet de traiter la tache efficacement sans endommager le tissu. Si les housses ne sont pas amovibles, identifiez le symbole d’entretien et utilisez un nettoyant adapté pour préserver l’apparence de votre canapé.
              </div>
            </>
          )
        },
        {
          id: 'taches-legeres',
          title: "Traitement en Douceur des Taches Légères",
          content: (
            <>
              <p>Nettoyer un canapé en microfibre sans retirer les housses est plus simple que vous ne le pensez. Pour les taches légères, des méthodes douces suffisent généralement, sauf pour les taches plus tenaces comme le vin rouge. Voici comment procéder :</p>
              <p><strong>Utiliser de l’eau tiède :</strong> Souvent, l’eau tiède suffit à éliminer les petites taches. Préférez l’eau tiède distillée pour éviter les résidus de calcaire. Pour les taches grasses, ajoutez quelques gouttes de liquide vaisselle doux ou un savon neutre. Ensuite, séchez le canapé avec un chiffon en coton. Votre canapé sera ainsi prêt pour de nouvelles soirées confortables à la maison !</p>
              <p><strong>Recourir aux lingettes pour bébé :</strong> Les lingettes pour bébé sont une astuce efficace pour un nettoyage délicat. Elles permettent d’essuyer les taches sans recourir à des produits agressifs comme l’eau de Javel. Par exemple, elles sont également idéales pour enlever facilement les taches sur des chaussures blanches.</p>
            </>
          )
        },
        {
          id: 'taches-tenaces',
          title: "Comment Détacher un Canapé en Microfibre Efficacement ?",
          content: (
            <>
              <p>Un conseil souvent méconnu pour nettoyer un canapé en microfibre est d’utiliser du nettoyant pour vitres. Bien que certains craignent que ce produit laisse des résidus, il peut être très efficace. Testez-le d’abord sur une zone peu visible du canapé. Pour éliminer les taches, vaporisez simplement le nettoyant sur la zone concernée, laissez agir quelques instants, puis essuyez de l’extérieur vers l’intérieur avec une éponge. Pour les taches plus résistantes, une brosse peut être utilisée. Enfin, séchez le canapé avec un chiffon propre.</p>
              <div className="example-box">
                <strong>Exemple de mise en situation :</strong> Imaginez que vous ayez renversé du jus de fruit sur votre canapé en microfibre. D’abord, utilisez une lingette pour bébé pour absorber le liquide. Si une petite tache persiste, appliquez du nettoyant pour vitres sur la zone et essuyez avec une éponge. Ainsi, votre canapé retrouvera rapidement son aspect propre et frais.
              </div>
            </>
          )
        },
        {
          id: 'les-bases',
          title: "Nettoyage de la Microfibre : Les Règles d'Or",
          content: (
            <>
              <p>Que les taches soient légères ou tenaces, nous avons rassemblé quelques conseils essentiels pour vous aider à nettoyer votre canapé en microfibre efficacement :</p>
              <ul>
                <li><strong>Utiliser de l’eau de manière appropriée :</strong> Il n’est pas toujours nécessaire d’utiliser de l’eau distillée. Vous pouvez également opter pour de l’eau bouillie afin d’éviter les résidus de calcaire. Dans tous les cas, limitez l’utilisation de l’eau au strict nécessaire. Après le nettoyage, absorbez l’excès d’humidité avec un chiffon sec pour préserver la qualité du tissu.</li>
                <li><strong>Nettoyage minutieux :</strong> Pour éviter les taches d’eau, veillez à nettoyer entre les coutures du canapé et essuyez en suivant le sens du grain de la microfibre. Cette méthode permet de maintenir l’apparence uniforme de votre canapé.</li>
                <li><strong>Agir rapidement :</strong> Le moyen le plus efficace d’éliminer les taches est de les traiter dès qu’elles apparaissent. Par exemple, si vous renversez accidentellement un verre, utilisez immédiatement un jeté pour protéger le canapé. Vous pourrez ensuite laver le jeté après la fête, facilitant ainsi le nettoyage sans laisser de traces visibles.</li>
                <li><strong>Éviter certains outils et produits :</strong> Bien que le nettoyeur vapeur puisse sembler une solution rapide, il est préférable de ne pas l’utiliser sur un canapé en microfibre. La vapeur peut endommager le matériau et provoquer des taches permanentes. De même, évitez les produits de nettoyage contenant de l’eau de Javel ou des solvants, car ils attaquent les fibres délicates de la microfibre.</li>
              </ul>
            </>
          )
        },
      ],
      carouselImages: [
        { before: imgAvant1, after: imgApres1, caption: "Tache de café éliminée" },
        { before: imgAvant2, after: imgApres2, caption: "Fauteuil revitalisé" },
      ]
    },
    
    // Remplacez l'ancien objet 'id: 2' par celui-ci

{
  id: 2,
  image: imgVelours,
  cardTitle: "Raviver la Douceur : Le Guide du Nettoyage Velours",
  cardTeaser: "Le velours est luxueux mais peut sembler intimidant à nettoyer. Apprenez les gestes simples pour préserver sa texture et ses couleurs éclatantes.",
  
  modalTitle: "Comment Nettoyer un Canapé en Velours : Le Guide Complet",
  modalIntro: "Posséder un canapé en velours doux et raffiné apporte une touche d'élégance unique à votre intérieur. Cependant, sa beauté exige un entretien régulier. Découvrez nos méthodes d'expert pour nettoyer votre canapé en velours et préserver son aspect neuf durablement.",
  
  tableOfContents: [
    { id: 'instructions-taches', title: "Instructions Étape par Étape pour les Taches" },
    { id: 'particularites-velours', title: "Comprendre et Nettoyer le Velours" },
    { id: 'conseils-entretien', title: "Conseils d'Entretien Général" },
    { id: 'detachage-efficace', title: "Détachage Efficace : Méthodes Pratiques" },
  ],
  
  sections: [
    {
      id: 'instructions-taches',
      title: "Nettoyage des Taches : Instructions Étape par Étape",
      content: (
        <>
          <p>Un moment d’inattention peut rapidement transformer votre canapé impeccable en une source de stress. Ne paniquez pas, suivez nos instructions détaillées pour restaurer son éclat.</p>
          <p><strong>Matériel nécessaire :</strong></p>
          <ul>
            <li>Chiffons propres, secs et absorbants</li>
            <li>Chiffons doux en microfibre ou coton</li>
            <li>Nettoyant adapté (ou eau savonneuse douce)</li>
            <li>Brosse à poils doux</li>
          </ul>
          <p><strong>Les 6 Étapes Clés :</strong></p>
          <ol>
            <li><strong>Agir immédiatement :</strong> Épongez la zone tachée avec un chiffon absorbant pour retirer l'excédent de liquide. N'appuyez pas trop fort.</li>
            <li><strong>Tester le produit :</strong> Avant toute application, testez votre nettoyant (eau savonneuse ou shampoing spécialisé) sur une zone non visible du canapé pour éviter toute mauvaise surprise. <strong>Important :</strong> N’appliquez jamais le produit directement sur le velours, mais sur votre chiffon.</li>
            <li><strong>Tamponner la tache :</strong> Imbibez un chiffon doux de votre solution nettoyante et tamponnez délicatement la tache, en travaillant de l'extérieur vers l'intérieur pour ne pas l'étendre.</li>
            <li><strong>Rincer le résidu :</strong> Avec un autre chiffon propre et humide, retirez délicatement tout excès de produit nettoyant.</li>
            <li><strong>Laisser sécher :</strong> Le séchage doit se faire naturellement, à l'air libre. N'utilisez pas de sèche-cheveux.</li>
            <li><strong>Restaurer le poil :</strong> Une fois la zone complètement sèche, utilisez une brosse douce pour brosser délicatement dans le sens du poil. Cela redonnera au velours sa texture et son volume.</li>
          </ol>
          <div className="example-box">
            <strong>Conseil de Pro :</strong> En cas de doute ou pour une tache particulièrement difficile, faire appel à un professionnel reste la solution la plus sûre pour préserver votre meuble.
          </div>
        </>
      )
    },
    {
      id: 'particularites-velours',
      title: "Les Particularités du Velours : Mieux le Comprendre pour Mieux le Nettoyer",
      content: (
          <>
              <p>Un canapé en velours est caractérisé par un tissu dont les fils de surface, appelés "poils", sont coupés très courts pour créer cette texture unique, douce et brillante. Les matières premières les plus courantes sont la soie, le coton ou, plus fréquemment pour les meubles, les fibres synthétiques.</p>
              <div className="example-box">
                <strong>Le saviez-vous ?</strong> On parle de "velours" si la hauteur des poils ne dépasse pas deux millimètres. Au-delà, on entre dans la catégorie des peluches. Cette structure dense et courte rend le velours d'ameublement particulièrement résistant.
              </div>
          </>
      )
    },
    {
      id: 'conseils-entretien',
      title: "Conseils Généraux pour l'Entretien Quotidien",
      content: (
        <>
          <p>Bien que le velours de soie soit délicat, les variétés en coton et fibres synthétiques utilisées pour les canapés sont très robustes. Cependant, quelques gestes simples permettent de préserver durablement sa beauté.</p>
          <ul>
            <li><strong>Aspiration régulière :</strong> C'est le geste le plus important. Utilisez un embout brosse doux sur votre aspirateur et passez-le régulièrement pour enlever la poussière qui peut ternir les couleurs.</li>
            <li><strong>Brossage occasionnel :</strong> Pour les saletés légères ou pour redonner du gonflant, utilisez une brosse à linge douce, toujours dans le sens du poil.</li>
            <li><strong>Humidification légère :</strong> De temps en temps, passez un chiffon en microfibre à peine humide sur toute la surface (toujours dans le sens du poil) pour raviver les couleurs.</li>
            <li><strong>Protéger du soleil :</strong> L'exposition directe et prolongée aux UV peut décolorer les tissus. Si possible, évitez de placer votre canapé en plein soleil.</li>
          </ul>
          <p><strong>Important :</strong> Ne frottez jamais le velours agressivement et n'utilisez que des brosses douces pour ne pas endommager les fibres.</p>
        </>
      )
    },
    {
      id: 'detachage-efficace',
      title: "Détachage Efficace : Méthodes Pratiques pour les Taches Courantes",
      content: (
        <>
          <p>Votre canapé présente des taches disgracieuses ? Pas de panique. Voici des solutions éprouvées pour lui redonner son aspect neuf.</p>
          <div className="example-box" style={{borderColor: '#ffc107'}}>
            <strong style={{color: '#856404'}}>⚠️ Attention !</strong> Avant tout nettoyage, consultez l'étiquette d'entretien de votre canapé. Elle vous indiquera les produits autorisés (nettoyage à l'eau "W", à sec "S", etc.).
          </div>
          <h4>Méthodes Efficaces :</h4>
          <ol>
            <li><strong>Solution savonneuse pour taches légères :</strong> Mélangez quelques gouttes de savon de Marseille ou de liquide vaisselle doux dans de l'eau tiède. Appliquez avec un chiffon propre en tamponnant, sans jamais détremper le tissu.</li>
            <li><strong>Vinaigre blanc pour taches tenaces :</strong> Pour les taches plus résistantes, un mélange 50/50 d'eau et de vinaigre blanc est un excellent nettoyant naturel. Appliquez de la même manière, en tamponnant doucement.</li>
            <li><strong>Bicarbonate de soude pour rafraîchir et désodoriser :</strong> Saupoudrez légèrement de bicarbonate de soude sur toute la surface, laissez agir quelques heures (ou toute une nuit), puis aspirez soigneusement. C'est idéal pour neutraliser les odeurs.</li>
          </ol>
          <h4>Astuces Supplémentaires :</h4>
          <ul>
            <li>Testez toujours votre solution sur une zone cachée en premier.</li>
            <li>Séchez toujours à l'air libre et brossez le velours une fois sec pour rétablir sa texture.</li>
          </ul>
        </>
      )
    }
  ],
  carouselImages: [
    { before: imgAvant1, after: imgApres1, caption: "Tache de boisson sur velours" },
    { before: imgAvant2, after: imgApres2, caption: "Accoudoir de fauteuil ravivé" },
  ]
},

// Ajoutez cet objet dans le tableau 'articles'

{
  id: 3,
  image: imgGuide,
  cardTitle: "Le Guide Ultime pour Nettoyer son Canapé",
  cardTeaser: "Tissu, cuir, synthétique... Chaque canapé a ses secrets. Voici notre guide complet pour un nettoyage efficace et adapté à tous les matériaux.",
  
  modalTitle: "Comment Nettoyer son Canapé ? Le Guide Complet",
  modalIntro: "Un beau canapé est la pièce maîtresse du salon, mais il est aussi très sollicité. Taches de boisson, miettes ou traces de vie quotidienne... Découvrez comment redonner à votre canapé son éclat d'origine sans l'endommager.",
  
  tableOfContents: [
    { id: 'remedes-maison', title: "Nettoyage avec des Remèdes Maison" },
    { id: 'conseil-expert', title: "Le Conseil de l'Expert" },
    { id: 'produits-chimiques', title: "L'Utilisation des Produits Chimiques" },
    { id: 'types-tissus', title: "Identifier et Nettoyer les Tissus" },
    { id: 'cas-particuliers', title: "Cas Particuliers : Velours et Microfibre" },
    { id: 'mauvaises-odeurs', title: "Éliminer les Mauvaises Odeurs" },
  ],
  
  sections: [
    {
      id: 'remedes-maison',
      title: "Nettoyer son Canapé avec des Remèdes Maison",
      content: (
        <>
          <p>L'idéal serait de pouvoir laver entièrement son canapé, mais c'est rarement possible. Si votre modèle possède des housses amovibles, c'est une excellente option. Cependant, consultez toujours l'étiquette d'entretien du fabricant avant de les passer en machine pour éviter tout risque de rétrécissement.</p>
          <p>Pour les salissures légères sur des canapés non déhoussables, plusieurs remèdes maison peuvent s'avérer très efficaces. L'essentiel est de toujours tester la solution sur une partie cachée du canapé avant de l'appliquer sur une zone visible.</p>
        </>
      )
    },
    {
      id: 'conseil-expert',
      title: "Le Conseil de l'Expert pour les Taches Courantes",
      content: (
        <div className="example-box">
          <strong>La Recette Efficace :</strong> Pour de nombreuses taches, une solution simple fonctionne à merveille. Mélangez dans un bol d'eau :
          <ul>
            <li>1 cuillère à café de vinaigre blanc</li>
            <li>1 cuillère à café de liquide vaisselle doux</li>
          </ul>
          Appliquez cette solution avec un chiffon en microfibre en tamponnant délicatement la tache. Ensuite, "rincez" la zone en utilisant un autre chiffon propre et humide. Pour éviter les auréoles, nettoyez toujours une zone plus large que la tache elle-même, idéalement d'une couture à l'autre.
        </div>
      )
    },
    {
      id: 'produits-chimiques',
      title: "Nettoyage Chimique : Précautions et Recommandations",
      content: (
        <>
          <p>Les commerces proposent une vaste gamme de nettoyants et mousses pour tissus d'ameublement. Cependant, la prudence est de mise. De nombreux produits chimiques contiennent du chlore, des tensioactifs ou de l'eau de Javel, qui peuvent être agressifs, non biodégradables et provoquer des réactions allergiques.</p>
          <div className="example-box" style={{borderColor: '#ffc107'}}>
            <strong style={{color: '#856404'}}>⚠️ Règle d'Or :</strong> Lisez attentivement les instructions du fabricant et réalisez systématiquement un test sur une zone non visible du canapé. Une tache enlevée au prix d'une décoloration est une mauvaise affaire.
          </div>
          <p>Chez Respire Propre, nous privilégions des produits de nettoyage spécialisés et biodégradables pour garantir un résultat impeccable tout en respectant votre meuble et votre environnement.</p>
        </>
      )
    },
    {
      id: 'types-tissus',
      title: "Quels Types de Tissus peuvent être Nettoyés ?",
      content: (
        <>
          <p>Quasiment tous les revêtements peuvent être nettoyés : tissus classiques, fibres synthétiques (microfibre, velours, Alcantara), fibres naturelles (lin, jute) et tissus mélangés. Cependant, chaque matériau possède une robustesse et une sensibilité qui lui sont propres, et nécessite donc une méthode de nettoyage adaptée.</p>
          <h4>Comment nettoyer un canapé en tissu ?</h4>
          <ol>
            <li><strong>Brossage à sec :</strong> Commencez par brosser délicatement toute la surface avec une brosse douce pour déloger la poussière, les poils et les autres débris.</li>
            <li><strong>Aspiration :</strong> Passez l'aspirateur avec un embout adapté pour éliminer toutes les particules détachées.</li>
            <li><strong>Attention au bicarbonate de soude :</strong> Bien que populaire, le bicarbonate de soude a un pH élevé (alcalin) qui peut provoquer des taches brunes sur les fibres naturelles (coton, lin, etc.). Si vous l'utilisez, testez-le impérativement sur une zone cachée et séchez rapidement.</li>
          </ol>
          <p>Le nettoyage de tissus d'ameublement est un art délicat. En cas de doute, surtout avec des tissus fragiles, faire appel à un professionnel est la meilleure garantie de ne pas causer de dommages irréversibles.</p>
        </>
      )
    },
    {
      id: 'cas-particuliers',
      title: "Cas Particuliers : Focus sur le Velours et la Microfibre",
      content: (
        <>
          <p><strong>Pour le Velours :</strong> Un remède maison efficace est une eau savonneuse mousseuse (avec un savon doux). Appliquez uniquement la mousse avec un chiffon, sans jamais détremper le tissu. Des shampoings spécialisés existent également.</p>
          <h4>Nettoyer la Microfibre : Méthode Éprouvée</h4>
          <ol>
            <li><strong>Créez votre solution :</strong> Dans un flacon pulvérisateur, mélangez de l'eau tiède avec quelques gouttes de liquide vaisselle et une touche de vinaigre blanc.</li>
            <li><strong>Appliquez avec parcimonie :</strong> Vaporisez légèrement sur la tache sans saturer le tissu.</li>
            <li><strong>Frottez doucement :</strong> Utilisez une brosse douce ou un chiffon propre en effectuant des mouvements circulaires.</li>
            <li><strong>Essuyez l'excès :</strong> Tamponnez avec un chiffon sec pour absorber le surplus de liquide.</li>
            <li><strong>Laissez sécher à l'air libre :</strong> Assurez une bonne ventilation de la pièce.</li>
            <li><strong>Restaurez la texture :</strong> Une fois sec, passez un coup d'aspirateur doux pour redonner son aspect velouté à la microfibre.</li>
          </ol>
        </>
      )
    },
    {
      id: 'mauvaises-odeurs',
      title: "Comment Traiter un Canapé qui sent mauvais ?",
      content: (
        <>
          <p>Si votre canapé dégage une odeur persistante, la cause peut être plus profonde. Écartez-le du mur pour vérifier l'absence de moisissure, souvent causée par un manque de ventilation dans une pièce humide.</p>
          <p>Si la moisissure est exclue, deux solutions s'offrent à vous :</p>
          <ul>
            <li><strong>Le bicarbonate de soude :</strong> Saupoudrez généreusement toute la surface du canapé. Laissez agir plusieurs heures (idéalement toute la nuit), puis passez l'aspirateur en profondeur. C'est un excellent neutralisant d'odeurs et il agit également contre les acariens.</li>
            <li><strong>Le vinaigre de cidre :</strong> Dans un vaporisateur, mélangez deux parts d'eau pour une part de vinaigre de cidre. Vaporisez légèrement sur l'ensemble du canapé. L'odeur du vinaigre se dissipera en séchant, emportant avec elle les mauvaises odeurs.</li>
          </ul>
        </>
      )
    }
  ],
  carouselImages: [
    { before: imgAvant1, after: imgApres1, caption: "Tache de boisson sur tissu" },
    { before: imgAvant2, after: imgApres2, caption: "Canapé rafraîchi et désodorisé" },
  ]
},

// Ajoutez cet objet dans le tableau 'articles'

{
  id: 4,
  image: imgFauteuil,
  cardTitle: "Redonner Vie à un Fauteuil en Tissu : Nos Astuces",
  cardTeaser: "Votre fauteuil préféré a perdu de son éclat ? Pas de panique ! Suivez nos conseils pour un nettoyage en profondeur qui le rendra comme neuf.",
  
  modalTitle: "Comment Nettoyer un Fauteuil en Tissu ? Guide d'Expert",
  modalIntro: "Un fauteuil est une invitation à la détente. Mais entre les soirées vin rouge et la vie quotidienne, les taches peuvent vite arriver. Découvrez dans ce guide comment nettoyer efficacement votre fauteuil en tissu et quelles sont les particularités à prendre en compte pour chaque matériau.",
  
  tableOfContents: [
    { id: 'essentiels', title: "Les Points Essentiels du Nettoyage" },
    { id: 'meilleures-methodes', title: "Les Meilleures Méthodes de Nettoyage" },
    { id: 'nettoyage-vapeur', title: "Le Nettoyage à la Vapeur : Pour ou Contre ?" },
    { id: 'produits-chimiques-fauteuil', title: "L'Usage des Produits Chimiques" },
    { id: 'detachage-fauteuil', title: "Remèdes Maison pour Détacher un Fauteuil" },
    { id: 'quel-produit', title: "Quel Produit pour quel Revêtement ?" },
    { id: 'conclusion', title: "Conclusion : La Clé d'un Fauteuil Impeccable" },
  ],
  
  sections: [
    {
      id: 'essentiels',
      title: "Nettoyage de Fauteuil : Les Points Essentiels à Retenir",
      content: (
        <>
          <p>Pour un nettoyage réussi et sans risque, gardez ces règles d'or à l'esprit :</p>
          <ul>
            <li><strong>Agissez vite :</strong> Traitez toujours les taches fraîches. Une tache séchée est bien plus difficile à enlever.</li>
            <li><strong>Tamponnez, ne frottez pas :</strong> Frotter ne fait qu'étaler la tache et l'incruster dans les fibres. Tamponnez délicatement de l'extérieur vers l'intérieur.</li>
            <li><strong>Évitez les produits agressifs :</strong> Bannissez l'acétone et l'eau de Javel, qui peuvent causer des dommages irréversibles.</li>
            <li><strong>Testez toujours :</strong> Appliquez systématiquement votre produit nettoyant sur une zone discrète (comme l'arrière ou sous un coussin) pour vérifier l'absence de décoloration.</li>
            <li><strong>Utilisez les bons outils :</strong> Une brosse douce, un chiffon en microfibre, un aspirateur avec embout adapté sont vos meilleurs alliés.</li>
          </ul>
        </>
      )
    },
    {
      id: 'meilleures-methodes',
      title: "Les Meilleures Méthodes pour Nettoyer un Fauteuil",
      content: (
        <>
          <p>Poils d'animaux, taches de boisson ou simple poussière... chaque type de saleté a sa solution. Souvent, les remèdes maison sont aussi efficaces que les produits du commerce, et bien plus économiques.</p>
          <h4>L'Aspiration : Votre Geste Hebdomadaire</h4>
          <p>Passez l'aspirateur sur votre fauteuil une fois par semaine. Retirez les coussins et utilisez un embout fin pour les recoins, puis une brosse pour tissus d'ameublement sur les surfaces plus larges. C'est la base pour éliminer la poussière, les miettes et les allergènes.</p>
          <div className="example-box">
            <strong>Astuce anti-poils :</strong> L'aspirateur ne suffit pas toujours pour les poils d'animaux. Enfilez un gant en caoutchouc humide et passez-le sur le tissu : les poils s'aggloméreront et seront faciles à retirer.
          </div>
          <h4>Remèdes Maison Efficaces</h4>
          <p>Un mélange de bicarbonate de soude et d'eau (formant une pâte) ou une solution de vinaigre blanc dilué peut faire des merveilles sur les odeurs et les taches légères. Appliquez, laissez agir, puis tamponnez avec un chiffon propre et humide.</p>
        </>
      )
    },
    {
      id: 'nettoyage-vapeur',
      title: "Le Nettoyage à la Vapeur : Une Solution à Manier avec Précaution",
      content: (
        <>
          <p>Le nettoyage à la vapeur (ou par injection-extraction) est une méthode puissante, mais réservée aux fauteuils très sales. Attention, tous les tissus ne le supportent pas, notamment le cuir et certaines microfibres. En cas de doute, abstenez-vous.</p>
          <p>Si vous l'utilisez, aspirez d'abord le fauteuil, réglez l'appareil sur la puissance la plus faible et procédez par touches légères pour ne pas détremper le rembourrage. Un injecteur-extracteur, qui aspire l'eau immédiatement, est souvent plus adapté et plus sûr car il nettoie les fibres en profondeur en éliminant acariens et bactéries.</p>
        </>
      )
    },
    {
      id: 'produits-chimiques-fauteuil',
      title: "Utiliser des Produits Chimiques : Quand et Comment ?",
      content: (
        <>
          <p>Réservez les nettoyants chimiques aux taches extrêmement tenaces que les solutions naturelles n'ont pas vaincues. Beaucoup sont agressifs et peu écologiques.</p>
          <p>Vérifiez toujours la compatibilité du produit avec votre tissu et assurez une bonne aération de la pièce pendant et après l'application pour évacuer les odeurs fortes.</p>
        </>
      )
    },
    {
      id: 'detachage-fauteuil',
      title: "Détacher son Fauteuil : La Boîte à Outils Naturelle",
      content: (
        <>
          <p>Pour chaque tache, une solution maison existe :</p>
          <ul>
            <li><strong>Bicarbonate de soude / Levure chimique :</strong> Parfaits contre les taches de café, ils désinfectent et luttent contre les acariens.</li>
            <li><strong>Mousse à raser :</strong> Étonnamment efficace sur les taches de graisse et les auréoles. Elle aide aussi à neutraliser les odeurs d'urine.</li>
            <li><strong>Sel :</strong> Le premier réflexe sur une tache de vin rouge fraîche. Saupoudrez, laissez absorber, puis aspirez.</li>
            <li><strong>Glaçons :</strong> Pour le chewing-gum ou le chocolat, durcissez la tache avec un glaçon avant de la gratter délicatement.</li>
            <li><strong>Eau froide et lessive douce :</strong> Idéal pour les taches de sang.</li>
          </ul>
        </>
      )
    },
    {
      id: 'quel-produit',
      title: "Quel Produit pour quel Revêtement ?",
      content: (
        <>
          <p>Le choix du nettoyant est crucial et dépend entièrement du matériau de votre fauteuil.</p>
          <ul>
            <li><strong>Cuir véritable :</strong> Utilisez un dégraissant spécifique ou de la mousse à raser pour les taches de gras. Un mélange d'eau distillée et de savon au lait caillé est aussi une excellente option douce.</li>
            <li><strong>Daim (suédine) :</strong> N'utilisez jamais d'eau. Brossez délicatement la saleté à sec avec une brosse spéciale ou une gomme à daim.</li>
            <li><strong>Simili cuir :</strong> Très simple à nettoyer avec une éponge et de l'eau savonneuse (liquide vaisselle). Une gomme magique peut effacer les traces tenaces.</li>
            <li><strong>Microfibre :</strong> Respectez l'étiquette. Utilisez de l'eau distillée pour éviter les auréoles si le nettoyage humide est permis ("W"). Sinon, optez pour une poudre nettoyante à sec.</li>
            <li><strong>Tissu classique :</strong> Le bicarbonate de soude est votre meilleur allié. Appliquez à sec, laissez agir, puis aspirez. Pour un nettoyage humide, formez une pâte avec un peu d'eau.</li>
          </ul>
        </>
      )
    },
    {
      id: 'conclusion',
      title: "Conclusion : La Clé d'un Fauteuil Impeccable",
      content: (
        <>
          <p>Savoir comment nettoyer un fauteuil en fonction de son tissu est essentiel pour préserver sa beauté. En choisissant les bons produits et en appliquant les bonnes méthodes, vous pouvez facilement venir à bout des saletés et des taches. Un entretien régulier et attentif garantit que votre fauteuil restera une pièce maîtresse accueillante et esthétique dans votre salon pour de nombreuses années.</p>
        </>
      )
    }
  ],
  carouselImages: [
    { before: imgAvant1, after: imgApres1, caption: "Tache de vin rouge sur tissu" },
    { before: imgAvant2, after: imgApres2, caption: "Fauteuil en microfibre rafraîchi" },
  ]
},
  ];
  
  const openArticle = (article) => {
    document.body.style.overflow = 'hidden';
    setSelectedArticle(article);
  };
  const closeArticle = () => {
    document.body.style.overflow = 'auto';
    setSelectedArticle(null);
  };

  const handleCarouselNav = (direction) => {
    const totalImages = selectedArticle.carouselImages.length;
    if (direction === 'next') {
      setCarouselIndex((prev) => (prev + 1) % totalImages);
    } else {
      setCarouselIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  const handleTocClick = (id) => {
    const targetElement = modalContentRef.current.querySelector(`#${id}`);
    if (targetElement) {
        const topOffset = targetElement.getBoundingClientRect().top;
        modalContentRef.current.scrollBy({ top: topOffset - 20, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="astuces-page">
         <div className="astuces-header">
           <h1>Nos Astuces de Pro</h1>
           <p>Découvrez nos guides et conseils pour entretenir vos meubles et garder un intérieur sain et propre au quotidien.</p>
         </div>
         <div className="articles-grid">
           {articles.map(article => (
             <div className="article-card" key={article.id} onClick={() => openArticle(article)}>
               <div className="card-image">
                 <img src={article.image} alt={article.cardTitle} />
               </div>
               <div className="card-content">
                 <h3>{article.cardTitle}</h3>
                 <p>{article.cardTeaser}</p>
                 <span className="card-button">Lire la suite <i className="fas fa-arrow-right"></i></span>
               </div>
             </div>
           ))}
         </div>
      </section>

      {selectedArticle && (
        <div className="modal-backdrop" onClick={closeArticle}>
          <div className="modal-content" ref={modalContentRef} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeArticle}><i className="fas fa-times"></i></button>
            
            <div className="modal-header">
              <h1>{selectedArticle.modalTitle}</h1>
              <p className="modal-intro">{selectedArticle.modalIntro}</p>
            </div>
            
            <div className="modal-body">
              <nav className="modal-toc">
                <h4>Au sommaire de cet article</h4>
                <ul>
                  {selectedArticle.tableOfContents.map(item => (
                    <li key={item.id} onClick={() => handleTocClick(item.id)}>
                      <i className="fas fa-angle-right"></i> {item.title}
                    </li>
                  ))}
                </ul>
              </nav>

              {selectedArticle.sections.map(section => (
                <section key={section.id} id={section.id} className="modal-section">
                  <h2>{section.title}</h2>
                  {section.content}
                </section>
              ))}

              <section className="modal-section">
                <h2>La preuve par l'image : Avant / Après</h2>
                <div className="modal-carousel-container">
                  <div className="modal-carousel-slider" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
                    {selectedArticle.carouselImages.map((img, index) => (
                      <div className="carousel-slide" key={index}>
                        <div className="img-comparison">
                          <img src={img.before} alt="Avant nettoyage" />
                          
                        </div>
                        <div className="img-comparison">
                          <img src={img.after} alt="Après nettoyage" />
                          
                        </div>
                      </div>
                    ))}
                  </div>
                  {selectedArticle.carouselImages.length > 1 && (
                    <>
                      <button className="carousel-nav prev" onClick={() => handleCarouselNav('prev')}><i className="fas fa-chevron-left"></i></button>
                      <button className="carousel-nav next" onClick={() => handleCarouselNav('next')}><i className="fas fa-chevron-right"></i></button>
                    </>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AstucesNettoyage;