import imgPng2 from 'assets/images/png/img-2.png';
import imgPng3 from 'assets/images/png/img-3.png';
import imgPng4 from 'assets/images/png/img-4.png';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface IProps {
  description: string;
  title: string;
  img: string;
}

const HomeSection2Item = ({ description, img, title }: IProps) => (
  <div className='col-12 col-md-4 d-flex flex-column'>
    <div className='d-flex justify-content-center mb-4 mt-4 mt-md-0'>
      <img src={img} />
    </div>
    <h3 className='text-orange text-center'>
      {title}
    </h3>
    <p className='text-center'>
      {description}
    </p>
  </div>
);

const HomeSection2 = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();

  return (
    <div className='container mb-5'>
      <div className='row'>
        <HomeSection2Item
          img={imgPng2}
          title={t(`RÉCUPÉRATION D'ÉPAVES`)}
          description={t(`Votre véhicule a été accidenté ? Vous ne pouvez plus le déplacer ? Nous prenons en charge le déplacement et/ou le recyclage du véhicule.`)} />
        <HomeSection2Item
          img={imgPng3}
          title={t(`ACHAT ET VENTE`)}
          description={t(`Vous avez envie de changer de voiture ? Expliquez-nous vos envies, nous nous chargeons de la recherche et des formalités.`)} />
        <HomeSection2Item
          img={imgPng4}
          title={t(`RÉPARATION MÉCANIQUE`)}
          description={t(`Votre moteur fait du bruit ? Un choc a endommagé la carrosserie ? Confiez-nous votre véhicule, nos mécaniciens s'en occuperont.`)} />
      </div>
    </div>
  );

};

export default memo(HomeSection2);
