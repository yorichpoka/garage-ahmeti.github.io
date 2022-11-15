import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const HomeSection1 = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();

  return (
    <div className='container mb-5'>
      <h1 className='text-orange'>
        {t(`L'expérience et la qualité`)}
      </h1>
      <p>
        {t(`Toute l'équipe du garage Auto Mondial à Aigle vous souhaite la bienvenue. 
        Notre garage vous accompagne sur toute la durée de vie d'un véhicule :  De la vente à la réparation mécanique jusqu'au transport de véhicule hors d'usage. 
        Nous nous déplaçons sur tout le territoire Suisse pour du dépannage ou pour trouver votre véhicule idéal.`)}
      </p>
    </div>
  );

};

export default memo(HomeSection1);
